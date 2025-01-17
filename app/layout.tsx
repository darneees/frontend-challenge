"use client"; 

import React from "react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import { Button } from "./styles/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./styles/components/ui/sheet";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactElement<{ addToCart: (item: any) => void }>; // Define a tipagem personalizada
}) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (name, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <header className="container flex items-center justify-between h-10vh px-5">
          <article className="text-xl font-bold">
            <Image
              src="/assets/img/starsoft.png"
              width={90}
              height={90}
              alt="Starsoft Logo"
            />
          </article>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <img src="./assets/img/Bag.png" alt="bag" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-none flex flex-col justify-end align-middle w-96 h-full bg-zinc-900">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <SheetTitle className="absolute top-6 w-full text-2xl font-normal text-white">
                    Mochila de Compras
                  </SheetTitle>
                </div>
              </SheetHeader>
              <section className="p-4 space-y-4">
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center bg-gray-800 p-4 rounded-lg"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded mr-4"
                      />
                      <article className="flex-1">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-orange-500 font-bold">
                          {item.price.toFixed(2)} ETH
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="bg-gray-700 text-white px-3 py-1 rounded"
                            onClick={() => updateQuantity(item.name, -1)}
                          >
                            -
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            className="bg-gray-700 text-white px-3 py-1 rounded"
                            onClick={() => updateQuantity(item.name, 1)}
                          >
                            +
                          </button>
                        </div>
                      </article>
                      <button
                        className="bg-red-500 text-white p-2 rounded-full ml-4"
                        onClick={() => removeFromCart(item.name)}
                      >
                        🗑️
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">TOTAL:</span>
                  <span className="text-orange-500 text-lg font-bold">
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    ETH
                  </span>
                </div>
              </section>
              <SheetFooter>
                <Button className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded">
                  FINALIZAR COMPRA
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </header>

        {React.cloneElement(children, {
          addToCart,
        })}
      </body>
    </html>
  );
}