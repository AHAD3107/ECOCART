import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate();

  const handlingClickLog=()=>{
    const user=localStorage.getItem("user")
    if(user){
      navigate("/account")
    }else{
      navigate("/login")
    }
  }
  const handlingClickHelp=()=>{
    navigate("/help")
  }

  const handlingClickHome = () => {
    navigate("/home");
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-green-600 text-white">
      <div className="text-2xl font-bold">
        EcoCart
      </div>
      <div className="flex gap-6 text-lg">
        <div className="cursor-pointer hover:underline" onClick={handlingClickHome}>Home</div>
        <div className="cursor-pointer hover:underline" onClick={handlingClickHelp} >Help
          
        </div>
        <div className="cursor-pointer hover:underline " onClick={handlingClickLog}>Account</div>
      </div>
    </div>
  )
}

export default Header