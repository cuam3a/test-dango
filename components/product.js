import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const Product = ({ data, handleChangeQuantity, handleChangeTitle, handleChangeTitleSize, handleAddCart }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-5">
      <div className="flex justify-end">
        <button
          onClick={() => setShow(!show)}
          class="font-bold py-1 px-2 border hover:bg-amber-300 hover:text-white"
        >
          <AiOutlineEdit />
        </button>
      </div>
      {show ? (
        <div class="w-full max-w-xs">
          <div class="bg-white shadow-md rounded px-3 pt-3 pb-3 mb-1">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="title"
              >
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={data.title}
                onChange={(e) => handleChangeTitle(data.id, e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label
                for="titleSize"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title size {data.titleSize} px
              </label>
              <input
                id="titleSize"
                type="range"
                min={8}
                max={40}
                value={data.titleSize}
                onChange={(e) => handleChangeTitleSize(data.id, e.target.value)}
                class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-center mt-2">
        <img src={data.img} responsive className="object-cover h-38 w-64 border rounded-md" />
      </div>
      <div
        className="flex justify-start mt-2"
        style={{ fontSize: data.titleSize + "px" }}
      >
        {data.title} 
      </div>
      <div className="flex flex-row justify-start items-center mt-8">
        <div className="mr-5 font-bold">$ {data.price.toFixed(2)}</div>

        <button
          onClick={() => handleChangeQuantity(data.id, "dec")}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3"
        >
          -
        </button>
        <input className="w-10 text-center" disabled value={data.quantity} />
        <button
          onClick={() => handleChangeQuantity(data.id, "inc")}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3"
        >
          +
        </button>
      </div>
      <div className="flex justify-start mt-2">{data.description}</div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => handleAddCart(data.id)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Add to cart
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <a href="#" className="underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Product;
