import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Crad.jsx'
import Image from './components/Image.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card Co={"Cookie kaj kortese hehehe"} using={"You're using 3rd party cookie 1"} Accept={"Grohon koro hehe 1"}  Deny={"Deny 1"}/>
    <Card Co={"Cookie adowo ki ksj kore?"} using={"You're using 3rd party cookie 2"} Accept={"Grohon koro hehe 2"}  Deny={"Deny 3"}/>
    <Image hei={"'300px'"} />
    <Image hei={"'100px'"} />
    <Footer />
  </StrictMode>,
)
