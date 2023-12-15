import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import axios from "axios";
import { detail } from "../Global/TicketSlice";
const Home = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.ozzy.today/tickets");
        // console.log(response);
        setData(response?.data?.result?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="relative flex justify-center flex-col gap-5 lg:flex-row">
        <img className="w-full" src='https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        {/* Buttons */}
        <div className="lg:absolute flex flex-col md:flex-row justify-center items-center gap-10 bottom-4">
          {/* LineUp */}
          <button onClick={() => nav("/line-up")} className="buttons">
            Line Up
          </button>
          {/* LineUp */}
          <button
            onClick={() => {
              nav("/buy-ticket");
              dispatch(detail(data[0]));
            }}
            className="buttons"
          >
            Shop Now
          </button>
          {/* LineUp */}
          <button onClick={() => nav("/details")} className="buttons">
            Details
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gradient-to-r from-white/10 via-red-600 to-white/10 p-5 flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* Social Icons */}
          <a
            className="text-white flex items-center gap-5 text-3xl"
          >
            <BsFacebook />
          </a>
          <div className="text-white flex flex-col lg:flex-row gap-3">
            <span className="text-lg">Something i dont know</span>
            <span className="text-lg">09---------</span>
          </div>
        </div>
        {/* Privacy Policy */}

        <p className="text-center md:text-start text-slate-300">
          ©something i don't know
        </p>
      </div>
    </>
  );
};

export default Home;
