import React from "react";
import img1 from "../assets/gaTicket.png";
import { useNavigate } from "react-router-dom";
const Ga = () => {
  const nav = useNavigate()
  return (
    <div className="flex flex-col gap-3 py-5 justify-center items-center">
      <img src='https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full lg:w-[50%] lg:h-[50%]" />
      <button onClick={()=>nav('/')} className="bg-red-600 text-white rounded px-10 py-3">Go Back to Home</button>
    </div>
  );
};

export default Ga;
