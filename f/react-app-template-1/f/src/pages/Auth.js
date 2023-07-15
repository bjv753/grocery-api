import React, {useState, useContext} from 'react'
import AuthForm from '../components/AuthForm';
import { UserContext } from '../context/UserProvider';

const initInputs = { username: "", password: "" }

const Auth = ({setToggleAuth}) => {

  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)


  function checkToken() {
    
    const item = localStorage.getItem('token')

    if (item) {
      setToggleAuth(false)
    } else {
      setToggleAuth(true)
    }
  }


  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }
    
  function closeAuth(){
    setToggleAuth(false)
  }

  return (
      <div id="auth-box"> 
            <div onClick={closeAuth} id='close-icon' >✖</div>
              { !toggle ?
              <>
                <AuthForm
                  handleChange={handleChange}
                  handleSubmit={handleSignup}
                  inputs={inputs}
                  btnText="Sign Up"
                  errMsg={errMsg}
                  checkToken={checkToken}
                />
                <p  id='signupin' onClick={toggleForm}>Want to SignIn?</p>
                </>
              :
                    <>
                <AuthForm
                  handleChange={handleChange}
                  handleSubmit={handleLogin}
                  inputs={inputs}
                  btnText="Sign In"
                  errMsg={errMsg} 
                  checkToken={checkToken}          
                />
                <p  id='signupin' onClick={toggleForm}>Want to SignUp?</p>
                </>
              }
            
      </div>  
  )
}

export default Auth