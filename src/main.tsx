import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Button from './components/Button'
import TextField from './components/MeowBox'
import '../global.css'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <div className="w-screen h-screen grid-cols-4 place-items-center">
      <div className="w-screen h-[33%]">
        <img src="/assets/paw.png" className="h-52 w-52 paw rotate-[142deg]" />
      </div>
      <div className="w-[80%] h-[34%] place-items-center">
        <h1>C A T .</h1>
        <TextField text="Fill this box!" classNames="w-[52rem] h-[10rem]" />
      </div>
      <div className="w-screen h-[33%] place-items-end pt-12">
        <img src="/assets/paw.png" className="h-52 w-52 paw rotate-[-31deg]" />
      </div>
    </div>
  </StrictMode>
)
