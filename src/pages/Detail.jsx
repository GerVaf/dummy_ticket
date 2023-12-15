import {
  BsFacebook,
  BsFillArrowDownCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { detail } from "../Global/TicketSlice";

const Detail = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [sectionStates, setSectionStates] = useState({
    packages: false,
    tickets: false,
    tablePlan: false,
  });

  const toggleImages = (section) => {
    setSectionStates((prevStates) => ({
      ...prevStates,
      [section]: !prevStates[section],
    }));
  };

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
    <div className="flex flex-col gap-5">
      {/* Hero Image */}
      <div className="aspect-auto">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      {/* Packages Section */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-5xl md:text-8xl text-red-800 text-center uppercase">
          Packages
        </h1>
        <button
          className="w-full px-5 py-2 bg-red-700 text-white font-bold text-lg flex items-center justify-center gap-3"
          onClick={() => toggleImages("packages")}
        >
          Click Here To See <BsFillArrowDownCircleFill />
        </button>
        {/* Packages */}
        <div
          className={`flex flex-col gap-5 w-full lg:w-[60%] mx-auto scrollbar-none overflow-y-scroll transition-all duration-500 ${
            sectionStates.packages ? "h-screen" : "h-0"
          }`}
        >
          {/* images */}
          <img
            src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
        </div>
      </div>

      {/* Ticket Section */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-5xl md:text-8xl text-red-800 text-center uppercase">
          Tickets
        </h1>
        <button
          className="w-full px-5 py-2 bg-red-700 text-white font-bold text-lg flex items-center justify-center gap-3"
          onClick={() => toggleImages("tickets")}
        >
          Click Here To See <BsFillArrowDownCircleFill />
        </button>
        <div
          className={`flex flex-wrap rounded mx-1 overflow-y-scroll scrollbar-none transition-all duration-500 ${
            sectionStates.tickets ? "h-screen" : "h-0"
          }`}
        >
          {/* Card */}
          
            
              <div onClick={()=>nav('/ga')} className="rounded overflow-hidden lg:w-2/6 p-5">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover"
                />
                <div
                  className={`flex justify-between items-center p-2 text-white bg-gradient-to-r from-white/10 via-black to-white/10`}
                >
                  <h1 className={`text-3xl font-bold`}>Title</h1>
                  <div>
                    <p className="text-xs text-end">For</p>

                    <p className="price font-bold">MMK</p>
                  </div>
                </div>
              </div>
           
        </div>
      </div>

      {/* Floor Plan */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-5xl md:text-8xl text-red-800 text-center">
          VENUE
        </h1>
        <button
          className="w-full px-5 py-2 bg-red-700 text-white font-bold text-lg flex items-center justify-center gap-3"
          onClick={() => toggleImages("tablePlan")}
        >
          Click Here To See <BsFillArrowDownCircleFill />
        </button>
        <div
          className={`px-3 scrollbar-none overflow-y-scroll transition-all duration-500 flex justify-center items-center ${
            sectionStates.tablePlan ? "h-[300px] lg:h-screen" : "h-0"
          }`}
        >
          <div className="w-full lg:w-[75%] border border-orange-500 p-5">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <div className="flex flex-col items-center gap-5">
        <button
          className="px-8 py-5 rounded bg-red-700 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-red-900"
          onClick={() => {
            nav("/buy-ticket");
            dispatch(detail(data[0]));
          }}
        >
          Click Here To Buy Tickets <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 bg-gradient-to-r from-white/10 via-red-600 to-white/10 p-5 flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          {/* Social Icons */}
          <a className="text-white flex items-center gap-5 text-3xl">
            <BsFacebook />
          </a>
          <div className="text-white flex flex-col lg:flex-row gap-3">
            <span className="text-lg">Something i dont know</span>
            <span className="text-lg">09-------</span>
          </div>
        </div>
        {/* Privacy Policy */}

        <p className="text-center md:text-start text-slate-300">
          ©something i dont know
        </p>
      </div>
    </div>
  );
};

export default Detail;
