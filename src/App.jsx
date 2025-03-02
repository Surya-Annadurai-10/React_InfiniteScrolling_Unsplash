import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Search from './Search/Search'
import Component from './Components/Component'


function App() {
  const [searchData , setSearchData] = useState([])
  const [inputVal, setInputVal] = useState("flowers");
  const [searching,setSearching] = useState(true);
  return (
 <>
    <Header />
    <Search searching={searching} setSearching={setSearching} inputVal = {inputVal} setInputVal= {setInputVal} />
   <Component inputVal = {inputVal} setInputVal= {setInputVal}  /> 
 

 </>
  )
}

export default App
