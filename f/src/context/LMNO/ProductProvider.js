import React, { useState } from 'react'

export const ProductContext = React.createContext()

export default function ProductProvider(props){

      return(
            <ProductContext.Provider
                  value={{canister, setCanister, showCanister}}
            >
               {props.children}
            </ProductContext.Provider>
      )
}