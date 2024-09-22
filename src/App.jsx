
import './index.css' 
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Menu from "./components/Meun"
import Service from "./components/Service"
import { Nav } from "./components/Nav"

function App() {

  return (
    <>
     <Nav/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/meun" element={<Menu/>}></Route>
   <Route path="/service" element={<Service/>}></Route>
   <Route path="*" element={<h1>page is not found</h1>}></Route>
   </Routes>

    
   
    </>
  )
}



export default App
