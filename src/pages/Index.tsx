import { useState } from 'react';
import { toast } from "sonner";
import { ClipboardCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

// Reference object containing standalone component code
const heroComponents = {
  'LuxuryFashionHero.tsx': `import { useState, useEffect } from 'react';

const LuxuryFashionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      title: "Autumn Collection",
      subtitle: "2024"
    },
    {
      bg: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      title: "Summer Elegance",
      subtitle: "2024"
    },
    {
      bg: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      title: "Winter Luxe",
      subtitle: "2024"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={\`absolute inset-0 transition-opacity duration-1000 \${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }\`}
          style={{
            backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\${slide.bg})\`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex h-full items-center justify-center text-white">
            <div className="text-center">
              <h1 className="mb-4 text-6xl font-bold tracking-tight">{slide.title}</h1>
              <p className="text-2xl font-light">{slide.subtitle}</p>
              <button className="mt-8 border border-white px-8 py-3 text-lg transition-colors hover:bg-white hover:text-black">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={\`h-2 w-8 rounded-full transition-colors \${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }\`}
          />
        ))}
      </div>
    </div>
  );
};

export default LuxuryFashionHero;`,

  'TechStoreHero.tsx': `import { useState, useEffect } from 'react';

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products', value: '1000+' },
  { label: 'Countries', value: '30+' }
];

const TechStoreHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="relative h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex h-full flex-col items-center justify-center text-white">
        <div className={\`opacity-\${isVisible ? '100' : '0'} transform translate-y-\${isVisible ? '0' : '5'} transition-all duration-1000\`}>
          <h1 className="mb-6 text-7xl font-bold text-center">Future is Now</h1>
          <p className="mb-8 text-xl font-light text-center">Experience tomorrow's technology today</p>
          
          <div className="mb-12 flex justify-center gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={\`opacity-\${isVisible ? '100' : '0'} transform translate-y-\${isVisible ? '0' : '5'} transition-all duration-1000 delay-\${200 + index * 100}\`}
              >
                <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <button className={\`opacity-\${isVisible ? '100' : '0'} transition-opacity duration-1000 delay-700 mx-auto block rounded-full bg-blue-500 px-8 py-3 text-lg font-medium transition-colors hover:bg-blue-600\`}>
            Shop Latest Gadgets
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero;`,

  'FurnitureStoreHero.tsx': `const FurnitureStoreHero = () => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2 bg-[#F6F6F7]">
      <div className="flex items-center justify-center p-8 md:p-16">
        <div>
          <h1 className="mb-6 text-4xl md:text-6xl font-light leading-tight text-gray-900">
            Create Your
            <br />
            <span className="font-bold">Perfect Space</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-600">
            Curated furniture collections for modern living
          </p>
          <button className="rounded-none bg-gray-900 px-6 md:px-8 py-3 text-base md:text-lg font-medium text-white transition-colors hover:bg-gray-800">
            Explore Collections
          </button>
        </div>
      </div>
      
      <div 
        className="relative h-64 md:h-full"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486718448742-163732cd1544)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default FurnitureStoreHero;`,

  // ... Add more components in the same format
};

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleCopyCode = async (componentPath: string) => {
    try {
      const componentCode = heroComponents[componentPath];
      if (!componentCode) {
        throw new Error('Component code not found');
      }

      await navigator.clipboard.writeText(componentCode);
      toast.success("Ready-to-use component code copied to clipboard!");
    } catch (error) {
      console.error('Failed to copy code:', error);
      toast.error("Failed to copy component code");
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