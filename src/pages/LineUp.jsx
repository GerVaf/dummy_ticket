import React from "react";
import poster from "../assets/poster.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { useNavigate } from "react-router-dom";
const LineUp = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-center">
      {/* Poster */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center my-5 items-center gap-5">
        {/* Line up */}
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
        <img
          src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-[25%]"
        />
      </div>
      <button
        onClick={() => nav("/")}
        className="bg-red-600 text-white rounded px-10 py-3 mb-5"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default LineUp;
