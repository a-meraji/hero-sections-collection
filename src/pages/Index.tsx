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
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 backdrop-blur-sm py-4 sticky top-0 z-50 border-b">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
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
      </nav>
      
      <main className="flex-1">
        {heroes[currentHero].component}
      </main>
    </div>
  );
};

export default Index;