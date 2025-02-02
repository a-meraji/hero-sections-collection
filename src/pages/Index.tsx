import { useState } from 'react';
import { toast } from "sonner";
import LuxuryFashionHero from '@/components/heroes/LuxuryFashionHero';
import LuxuryFashionHero2 from '@/components/heroes/LuxuryFashionHero2';
import LuxuryFashionHero3 from '@/components/heroes/LuxuryFashionHero3';
import TechStoreHero from '@/components/heroes/TechStoreHero';
import TechStoreHero2 from '@/components/heroes/TechStoreHero2';
import TechStoreHero3 from '@/components/heroes/TechStoreHero3';
import FurnitureStoreHero from '@/components/heroes/FurnitureStoreHero';
import FurnitureStoreHero2 from '@/components/heroes/FurnitureStoreHero2';
import FurnitureStoreHero3 from '@/components/heroes/FurnitureStoreHero3';
import JewelryStoreHero from '@/components/heroes/JewelryStoreHero';
import JewelryStoreHero2 from '@/components/heroes/JewelryStoreHero2';
import JewelryStoreHero3 from '@/components/heroes/JewelryStoreHero3';
import CosmeticsHero from '@/components/heroes/CosmeticsHero';
import CosmeticsHero2 from '@/components/heroes/CosmeticsHero2';
import CosmeticsHero3 from '@/components/heroes/CosmeticsHero3';
import SportswearHero from '@/components/heroes/SportswearHero';
import SportswearHero2 from '@/components/heroes/SportswearHero2';
import SportswearHero3 from '@/components/heroes/SportswearHero3';
import { Button } from '@/components/ui/button';
import { ClipboardCopy } from 'lucide-react';

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleCopyCode = async (componentPath: string) => {
    try {
      const response = await fetch(`/src/components/heroes/${componentPath}`);
      const code = await response.text();
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (error) {
      console.error('Failed to copy code:', error);
      toast.error("Failed to copy code");
    }
  };

  const categories = [
    {
      name: 'Luxury Fashion',
      components: [
        { component: <LuxuryFashionHero />, name: 'Style 1', file: 'LuxuryFashionHero.tsx' },
        { component: <LuxuryFashionHero2 />, name: 'Style 2', file: 'LuxuryFashionHero2.tsx' },
        { component: <LuxuryFashionHero3 />, name: 'Style 3', file: 'LuxuryFashionHero3.tsx' }
      ]
    },
    {
      name: 'Tech Store',
      components: [
        { component: <TechStoreHero />, name: 'Style 1', file: 'TechStoreHero.tsx' },
        { component: <TechStoreHero2 />, name: 'Style 2', file: 'TechStoreHero2.tsx' },
        { component: <TechStoreHero3 />, name: 'Style 3', file: 'TechStoreHero3.tsx' }
      ]
    },
    {
      name: 'Furniture Store',
      components: [
        { component: <FurnitureStoreHero />, name: 'Style 1', file: 'FurnitureStoreHero.tsx' },
        { component: <FurnitureStoreHero2 />, name: 'Style 2', file: 'FurnitureStoreHero2.tsx' },
        { component: <FurnitureStoreHero3 />, name: 'Style 3', file: 'FurnitureStoreHero3.tsx' }
      ]
    },
    {
      name: 'Jewelry Store',
      components: [
        { component: <JewelryStoreHero />, name: 'Style 1', file: 'JewelryStoreHero.tsx' },
        { component: <JewelryStoreHero2 />, name: 'Style 2', file: 'JewelryStoreHero2.tsx' },
        { component: <JewelryStoreHero3 />, name: 'Style 3', file: 'JewelryStoreHero3.tsx' }
      ]
    },
    {
      name: 'Cosmetics',
      components: [
        { component: <CosmeticsHero />, name: 'Style 1', file: 'CosmeticsHero.tsx' },
        { component: <CosmeticsHero2 />, name: 'Style 2', file: 'CosmeticsHero2.tsx' },
        { component: <CosmeticsHero3 />, name: 'Style 3', file: 'CosmeticsHero3.tsx' }
      ]
    },
    {
      name: 'Sportswear',
      components: [
        { component: <SportswearHero />, name: 'Style 1', file: 'SportswearHero.tsx' },
        { component: <SportswearHero2 />, name: 'Style 2', file: 'SportswearHero2.tsx' },
        { component: <SportswearHero3 />, name: 'Style 3', file: 'SportswearHero3.tsx' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 backdrop-blur-sm py-4 sticky top-0 z-50 border-b">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setCurrentCategory(index)}
              className={`px-4 py-2 rounded-full transition-colors ${
                currentCategory === index
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>
      
      <main className="flex-1 py-8">
        <div className="container mx-auto space-y-32">
          {categories[currentCategory].components.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-16 left-4 flex items-center gap-4">
                <span className="text-sm font-medium text-gray-500">{item.name}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => handleCopyCode(item.file)}
                >
                  <ClipboardCopy className="w-4 h-4" />
                  Copy Code
                </Button>
              </div>
              {item.component}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;