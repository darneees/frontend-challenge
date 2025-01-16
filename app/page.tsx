'use client';

import Card from './components/Card';

export default function Page({ addToCart }: { addToCart: (item: any) => void }) {
  const cards = [
    {
      id: 1,
      name: 'Backpack',
      description: 'Uma mochila resistente com compartimentos secretos...',
      image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
      price: 182,
    },
    {
      id: 2,
      name: 'Boots of Ppeed',
      description: 'Botas feitas de couro fino e tecido élfico...',
      image: 'https://softstar.s3.amazonaws.com/items/boots-of-speed.png',
      price: 338,
    },
    {
      id: 3,
      name: 'Curved Blade',
      description: 'Uma lâmina curva, afiada como o olhar de um predador...',
      image: 'https://softstar.s3.amazonaws.com/items/curved-blade.png',
      price: 291,
    },
    {
      id: 4,
      name: 'Demon Dagger',
      description: 'Uma adaga negra com runas ígneas incrustadas na lâmina...',
      image: 'https://softstar.s3.amazonaws.com/items/demon-dagger.png',
      price: 225,
    },
  ];

  return (
    <div className="relative flex items-center justify-center h-auto w-full flex-row gap-5 flex-wrap">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          description={card.description}
          image={card.image}
          price={card.price}
          onAddToCart={() =>
            addToCart({
              name: card.name,
              description: card.description,
              image: card.image,
              price: card.price,
            })
          }
        />
      ))}
    </div>
  );
}