import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './context/CartProvider'
import UserProvider from './context/UserProvider'

import './css/index.css'
import './css/auth.css'
import './css/accessories.css'
import './css/checkout.css'
import './css/contact.css'
import './css/commingsoon.css'
import './css/home.css'
import './css/nav.css'
import './css/cards.css'
import './css/footer.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<UserProvider>
    <CartProvider>
        <App/>
    </CartProvider>
</UserProvider>

);

