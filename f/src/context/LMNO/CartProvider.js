import React, { useState } from 'react'

export const CartContext = React.createContext()

export default function CountProvider(props){
      const [count, setCount] = useState(null)


      function addProduct1() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P1')
            box.appendChild(product)
      }

      function addProduct2() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P2')
            box.appendChild(product)
      }

      function addProduct3() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P3')
            box.appendChild(product)
      }

      function addProduct4() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P4')
            box.appendChild(product)
      }

      function addProduct5() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P5')
            box.appendChild(product)
      }

      function addProduct6() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P6')
            box.appendChild(product)
      }

      function addProduct7() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P7')
            box.appendChild(product)
      }

      function addProduct8() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P8')
            box.appendChild(product)
      }


      function addProduct9() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P9')
            box.appendChild(product)
      }


      function addProduct10() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P10')
            box.appendChild(product)
      }


      function addProduct11() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P11')
            box.appendChild(product)
      }


      function addProduct12() { 
            setCount(count + 1)
            const box = document.querySelector('#box')
            const product = document.createElement('div')
            product.classList.add('P12')
            box.appendChild(product)
      }

      return(
            <CartContext.Provider
                  value={{count, setCount, 
                        addProduct1, 
                        addProduct2,
                        addProduct3,
                        addProduct4,
                        addProduct5,
                        addProduct6,
                        addProduct7,
                        addProduct8,
                        addProduct9,
                        addProduct10,
                        addProduct11,
                        addProduct12,
                  }}
            >
               {props.children}
            </CartContext.Provider>
      )
}