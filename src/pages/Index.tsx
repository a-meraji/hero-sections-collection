import { useState } from 'react';
import { toast } from "sonner";
import CategoryNav from '@/components/CategoryNav';
import { HeroShowcase } from '@/components/HeroShowcase';
import LuxuryFashionHero from '@/components/heroes/LuxuryFashionHero';
import LuxuryFashionHero2 from '@/components/heroes/LuxuryFashionHero2';
import LuxuryFashionHero3 from '@/components/heroes/LuxuryFashionHero3';
import LuxuryFashionHero4 from '@/components/heroes/LuxuryFashionHero4';
import LuxuryFashionHero5 from '@/components/heroes/LuxuryFashionHero5';
import LuxuryFashionHero6 from '@/components/heroes/LuxuryFashionHero6';
import TechStoreHero from '@/components/heroes/TechStoreHero';
import TechStoreHero2 from '@/components/heroes/TechStoreHero2';
import TechStoreHero3 from '@/components/heroes/TechStoreHero3';
import TechStoreHero4 from '@/components/heroes/TechStoreHero4';
import TechStoreHero5 from '@/components/heroes/TechStoreHero5';
import TechStoreHero6 from '@/components/heroes/TechStoreHero6';
import FurnitureStoreHero from '@/components/heroes/FurnitureStoreHero';
import FurnitureStoreHero2 from '@/components/heroes/FurnitureStoreHero2';
import FurnitureStoreHero3 from '@/components/heroes/FurnitureStoreHero3';
import FurnitureStoreHero4 from '@/components/heroes/FurnitureStoreHero4';
import JewelryStoreHero from '@/components/heroes/JewelryStoreHero';
import JewelryStoreHero2 from '@/components/heroes/JewelryStoreHero2';
import JewelryStoreHero3 from '@/components/heroes/JewelryStoreHero3';
import JewelryStoreHero4 from '@/components/heroes/JewelryStoreHero4';
import JewelryStoreHero5 from '@/components/heroes/JewelryStoreHero5';
import CosmeticsHero from '@/components/heroes/CosmeticsHero';
import CosmeticsHero2 from '@/components/heroes/CosmeticsHero2';
import CosmeticsHero3 from '@/components/heroes/CosmeticsHero3';
import CosmeticsHero4 from '@/components/heroes/CosmeticsHero4';
import CosmeticsHero5 from '@/components/heroes/CosmeticsHero5';
import SportswearHero from '@/components/heroes/SportswearHero';
import SportswearHero2 from '@/components/heroes/SportswearHero2';
import SportswearHero3 from '@/components/heroes/SportswearHero3';
import SportswearHero4 from '@/components/heroes/SportswearHero4';
import SportswearHero5 from '@/components/heroes/SportswearHero5';
import { heroComponents } from '@/data/heroComponents';

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleCopyCode = (fileName: string) => {
    const code = heroComponents[fileName];
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
    } else {
      toast.error('Component code not found');
    }
  };

  const categories = [
    {
      name: 'Luxury Fashion',
      components: [
        { component: <LuxuryFashionHero />, name: 'Style 1', file: 'LuxuryFashionHero.tsx' },
        { component: <LuxuryFashionHero2 />, name: 'Style 2', file: 'LuxuryFashionHero2.tsx' },
        { component: <LuxuryFashionHero3 />, name: 'Style 3', file: 'LuxuryFashionHero3.tsx' },
        { component: <LuxuryFashionHero4 />, name: 'Style 4', file: 'LuxuryFashionHero4.tsx' },
        { component: <LuxuryFashionHero5 />, name: 'Style 5', file: 'LuxuryFashionHero5.tsx' },
        { component: <LuxuryFashionHero6 />, name: 'Style 6', file: 'LuxuryFashionHero6.tsx' }
      ]
    },
    {
      name: 'Tech Store',
      components: [
        { component: <TechStoreHero />, name: 'Style 1', file: 'TechStoreHero.tsx' },
        { component: <TechStoreHero2 />, name: 'Style 2', file: 'TechStoreHero2.tsx' },
        { component: <TechStoreHero3 />, name: 'Style 3', file: 'TechStoreHero3.tsx' },
        { component: <TechStoreHero4 />, name: 'Style 4', file: 'TechStoreHero4.tsx' },
        { component: <TechStoreHero5 />, name: 'Style 5', file: 'TechStoreHero5.tsx' },
        { component: <TechStoreHero6 />, name: 'Style 6', file: 'TechStoreHero6.tsx' }
      ]
    },
    {
      name: 'Furniture Store',
      components: [
        { component: <FurnitureStoreHero />, name: 'Style 1', file: 'FurnitureStoreHero.tsx' },
        { component: <FurnitureStoreHero2 />, name: 'Style 2', file: 'FurnitureStoreHero2.tsx' },
        { component: <FurnitureStoreHero3 />, name: 'Style 3', file: 'FurnitureStoreHero3.tsx' },
        { component: <FurnitureStoreHero4 />, name: 'Style 4', file: 'FurnitureStoreHero4.tsx' }
      ]
    },
    {
      name: 'Jewelry Store',
      components: [
        { component: <JewelryStoreHero />, name: 'Style 1', file: 'JewelryStoreHero.tsx' },
        { component: <JewelryStoreHero2 />, name: 'Style 2', file: 'JewelryStoreHero2.tsx' },
        { component: <JewelryStoreHero3 />, name: 'Style 3', file: 'JewelryStoreHero3.tsx' },
        { component: <JewelryStoreHero4 />, name: 'Style 4', file: 'JewelryStoreHero4.tsx' },
        { component: <JewelryStoreHero5 />, name: 'Style 5', file: 'JewelryStoreHero5.tsx' }
      ]
    },
    {
      name: 'Cosmetics',
      components: [
        { component: <CosmeticsHero />, name: 'Style 1', file: 'CosmeticsHero.tsx' },
        { component: <CosmeticsHero2 />, name: 'Style 2', file: 'CosmeticsHero2.tsx' },
        { component: <CosmeticsHero3 />, name: 'Style 3', file: 'CosmeticsHero3.tsx' },
        { component: <CosmeticsHero4 />, name: 'Style 4', file: 'CosmeticsHero4.tsx' },
        { component: <CosmeticsHero5 />, name: 'Style 5', file: 'CosmeticsHero5.tsx' }
      ]
    },
    
    {
      name: 'Sportswear',
      components: [
        { component: <SportswearHero />, name: 'Style 1', file: 'SportswearHero.tsx' },
        { component: <SportswearHero2 />, name: 'Style 2', file: 'SportswearHero2.tsx' },
        { component: <SportswearHero3 />, name: 'Style 3', file: 'SportswearHero3.tsx' },
        { component: <SportswearHero4 />, name: 'Style 4', file: 'SportswearHero4.tsx' },
        { component: <SportswearHero5 />, name: 'Style 5', file: 'SportswearHero5.tsx' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <CategoryNav
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />
      
      <main className="flex-1 py-8">
        <HeroShowcase
          components={categories[currentCategory].components}
          onCopyCode={handleCopyCode}
        />
      </main>
    </div>
  );
};

export default Index;