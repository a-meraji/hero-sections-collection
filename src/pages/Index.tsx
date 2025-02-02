import { useState } from 'react';
import LuxuryFashionHero from '@/components/heroes/LuxuryFashionHero';
import TechStoreHero from '@/components/heroes/TechStoreHero';
import FurnitureStoreHero from '@/components/heroes/FurnitureStoreHero';

const Index = () => {
  const [currentHero, setCurrentHero] = useState<number>(0);
  
  const heroes = [
    { component: <LuxuryFashionHero />, name: 'Luxury Fashion' },
    { component: <TechStoreHero />, name: 'Tech Store' },
    { component: <FurnitureStoreHero />, name: 'Furniture Store' }
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        {heroes.map((hero, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`px-4 py-2 rounded-full transition-colors ${
              currentHero === index
                ? 'bg-black text-white'
                : 'bg-white text-black border border-black'
            }`}
          >
            {hero.name}
          </button>
        ))}
      </div>
      
      {heroes[currentHero].component}
    </div>
  );
};

export default Index;