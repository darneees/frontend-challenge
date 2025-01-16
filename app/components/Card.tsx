import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onAddToCart: () => void;
}

export default function Card({
  name,
  description,
  image,
  price,
  onAddToCart,
}: CardProps) {
  const formattedPrice = `${Number(price).toFixed(2)} ETH`;

  return (
    <div className="bg-zinc-800 text-white p-4 rounded-lg shadow-lg w-72">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="rounded mb-4"
        priority
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-400 my-2">{description}</p>
        <div className="flex items-start justify-center flex-col gap-3">
          <span className="text-lg font-bold flex items-start justify-start flex-row gap-3">
            <Image
              src="/assets/img/eth.png"
              width={25}
              height={25}
              alt="eth icon"
              priority
            />
            {formattedPrice}
          </span>
          <button
            className="bg-orange-500 text-white px-4 py-2 uppercase rounded hover:bg-orange-600 w-full"
            onClick={onAddToCart}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}