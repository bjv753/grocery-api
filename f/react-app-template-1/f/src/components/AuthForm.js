import React from 'react'


function AuthForm(props){

  const {
    handleChange, 
    handleSubmit,
    checkToken,
    btnText,
    errMsg, 
    inputs: {
      username, 
      password
    } 
  } = props


  return (
    <div>
        <form id='auth-form' onSubmit={handleSubmit}>
        <input 
          id='inputs' 
          type="text" 
          value={username}
          name="username" 
          onChange={handleChange} 
          placeholder='Username'/> 
        <input 
          id='inputs' 
          type="text" 
          value={password}
          name="password" 
          onChange={handleChange} 
          placeholder='Password'/>
        <br />
        <br />
        <button onClick={checkToken} id='signature-buttons' >{ btnText }</button>
        <p style={{color: "red"}}>{ errMsg }</p>
      </form>
    </div>
  )
}

export default AuthForm