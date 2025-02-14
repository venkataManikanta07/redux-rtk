import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./app/features/counterSlice";
import { useNavigate } from "react-router-dom";

const CounterUI = () => {
    const navigate = useNavigate(); 
  const countValue = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center border border-gray-300">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Counter App</h2>

        <p className="text-5xl font-extrabold text-blue-600 mb-6">{countValue}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200 transform hover:scale-105"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200 transform hover:scale-105"
          >
            -
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="mt-6 px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200 transform hover:scale-105"
        >
          Reset
        </button>

        <button
        onClick={() => navigate("/")}
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 transform hover:scale-105"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default CounterUI;
