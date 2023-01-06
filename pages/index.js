import Head from "next/head";
import Product from "../components/product";
import React, { useState } from "react";
import { AiFillShopping } from "react-icons/ai";

const aProducts = [
  {
    id: 1,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 20,
  },
  {
    id: 2,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 10,
  },
  {
    id: 3,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 10,
  },
  {
    id: 4,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 10,
  },
  {
    id: 5,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 10,
  },
  {
    id: 6,
    title: "Tourmaline & Eucalyptus Bar Soap",
    description:
      "Recharge you skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    img: "/img/img.png",
    price: 12.0,
    quantity: 0,
    titleSize: 10,
  },
];

export default function Home() {
  const [products, setProducts] = useState(aProducts);
  const [cart, setCart] = useState([]);

  const handleChangeQuantity = (id, type) => {
    let product = products.find((ele) => ele.id === id);
    if (product) {
      if (type === "inc" && product.quantity >= 0) product.quantity++;
      if (type === "dec" && product.quantity > 0) product.quantity--;
      setProducts([...products]);
    }
  };

  const handleChangeTitle = (id, value) => {
    let product = products.find((ele) => ele.id === id);
    if (product) {
      product.title = value;
      setProducts([...products]);
    }
  };

  const handleChangeTitleSize = (id, value) => {
    let product = products.find((ele) => ele.id === id);
    if (product) {
      product.titleSize = value;
      setProducts([...products]);
    }
  };

  const handleAddCart = (id) => {
    let product = products.find((ele) => ele.id === id);
    if (product) {
      setCart([...cart, Object.assign({},product)]);
      product.quantity = 0;
      setProducts([...products]);
    }
  };

  return (
    <>
      <Head>
        <title>TEST - DANGO DIGITAL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 text-white">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
              TEST DANGO DIGITAL
            </div>
            <div>
              {
                cart.length > 0 
                ? 
                  <div className="flex flex-row justify-center items-center">
                    <AiFillShopping />
                    <label className="ml-2">ITEMS: { cart.reduce((a, b) => { return a + b.quantity; }, 0) }</label>
                    <label className="ml-2">TOTAL: ${ cart.reduce((a, b) => { return a + (b.price * b.quantity); }, 0) }</label>
                    </div>
                : <></>
              }
            </div>
          </div>
        </nav>
        <div className="ml-2 md:ml-20">
        <div className="flex flex-wrap">
          {products &&
            products.map((item) => {
              return (
                <div className="flex w-80 border m-2" key={item.id}>
                  <Product
                    data={item}
                    handleChangeQuantity={handleChangeQuantity}
                    handleChangeTitle={handleChangeTitle}
                    handleChangeTitleSize={handleChangeTitleSize}
                    handleAddCart={handleAddCart}
                  />
                </div>
              );
            })}
        </div>
        </div>
      </main>
    </>
  );
}
