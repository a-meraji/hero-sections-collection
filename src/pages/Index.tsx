import { useState } from 'react';
import LuxuryFashionHero from '@/components/heroes/LuxuryFashionHero';
import TechStoreHero from '@/components/heroes/TechStoreHero';
import FurnitureStoreHero from '@/components/heroes/FurnitureStoreHero';
import JewelryStoreHero from '@/components/heroes/JewelryStoreHero';
import CosmeticsHero from '@/components/heroes/CosmeticsHero';
import SportswearHero from '@/components/heroes/SportswearHero';

const Index = () => {
  const [currentHero, setCurrentHero] = useState<number>(0);
  
  const heroes = [
    { component: <LuxuryFashionHero />, name: 'Luxury Fashion' },
    { component: <TechStoreHero />, name: 'Tech Store' },
    { component: <FurnitureStoreHero />, name: 'Furniture Store' },
    { component: <JewelryStoreHero />, name: 'Jewelry Store' },
    { component: <CosmeticsHero />, name: 'Cosmetics' },
    { component: <SportswearHero />, name: 'Sportswear' }
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 flex-wrap justify-center gap-4">
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