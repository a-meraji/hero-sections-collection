import { useState } from 'react';
import { toast } from "sonner";
import { ClipboardCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LuxuryFashionHero from '@/components/heroes/LuxuryFashionHero';
import LuxuryFashionHero2 from '@/components/heroes/LuxuryFashionHero2';
import LuxuryFashionHero3 from '@/components/heroes/LuxuryFashionHero3';
import LuxuryFashionHero4 from '@/components/heroes/LuxuryFashionHero4';
import TechStoreHero from '@/components/heroes/TechStoreHero';
import TechStoreHero2 from '@/components/heroes/TechStoreHero2';
import TechStoreHero3 from '@/components/heroes/TechStoreHero3';
import TechStoreHero4 from '@/components/heroes/TechStoreHero4';
import FurnitureStoreHero from '@/components/heroes/FurnitureStoreHero';
import FurnitureStoreHero2 from '@/components/heroes/FurnitureStoreHero2';
import FurnitureStoreHero3 from '@/components/heroes/FurnitureStoreHero3';
import FurnitureStoreHero4 from '@/components/heroes/FurnitureStoreHero4';
import JewelryStoreHero from '@/components/heroes/JewelryStoreHero';
import JewelryStoreHero2 from '@/components/heroes/JewelryStoreHero2';
import JewelryStoreHero3 from '@/components/heroes/JewelryStoreHero3';
import CosmeticsHero from '@/components/heroes/CosmeticsHero';
import CosmeticsHero2 from '@/components/heroes/CosmeticsHero2';
import CosmeticsHero3 from '@/components/heroes/CosmeticsHero3';
import SportswearHero from '@/components/heroes/SportswearHero';
import SportswearHero2 from '@/components/heroes/SportswearHero2';
import SportswearHero3 from '@/components/heroes/SportswearHero3';

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

  'LuxuryFashionHero2.tsx': `const LuxuryFashionHero2 = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#FDF6F0]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F0] via-transparent to-transparent" />
      
      <div className="absolute right-0 top-0 h-full w-2/3">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="relative flex h-full items-center px-8 md:px-16">
        <div className="max-w-xl">
          <h2 className="mb-4 text-lg font-medium text-rose-500">New Collection</h2>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-gray-900">Natural Beauty Enhanced</h1>
          <p className="mb-8 text-lg text-gray-600">
            Discover our range of organic and cruelty-free cosmetics, designed to enhance your natural beauty
          </p>
          <button className="rounded-full bg-rose-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-rose-600">
            Shop Now
          </button>
          
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Natural Ingredients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">Cruelty</p>
              <p className="text-sm text-gray-600">Free Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">ECO</p>
              <p className="text-sm text-gray-600">Friendly Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryFashionHero2;`,

  'LuxuryFashionHero3.tsx': `const LuxuryFashionHero3 = () => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2 bg-[#F6F6F7]">
      <div className="flex items-center justify-center p-16">
        <div>
          <h1 className="mb-6 text-6xl font-light leading-tight text-gray-900">
            Create Your
            <br />
            <span className="font-bold">Perfect Space</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Curated furniture collections for modern living
          </p>
          <button className="rounded-none bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800">
            Explore Collections
          </button>
        </div>
      </div>
      
      <div 
        className="relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486718448742-163732cd1544)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default LuxuryFashionHero3;`,

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

  'TechStoreHero2.tsx': `import { Button } from "@/components/ui/button";

const TechStoreHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Future of Technology
            <span className="block text-blue-400">Is Here Today</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Discover cutting-edge devices and innovative solutions that transform the way you live and work.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600">Shop Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero2;`,

  'TechStoreHero3.tsx': `import { Button } from "@/components/ui/button";

const TechStoreHero3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div className="order-2 lg:order-1 flex items-center p-12 bg-gray-100">
        <div className="max-w-xl">
          <span className="text-blue-600 font-medium mb-2 block">New Release</span>
          <h1 className="text-5xl font-bold mb-6">
            Smart Living
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Transform your home with our latest collection of smart devices and connected solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Shop Devices</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center min-h-[400px]" />
    </div>
  );
};

export default TechStoreHero3;`,

  'TechStoreHero4.tsx': `import { Button } from "@/components/ui/button";

const TechStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        <h2 className="text-xl font-medium text-purple-300 mb-4">Revolutionary Gaming Experience</h2>
        <h1 className="text-7xl font-bold mb-6">
          Next-Gen
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Gaming Gear
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experience gaming like never before with our cutting-edge equipment and accessories.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-purple-500 hover:bg-purple-600">Shop Now</Button>
          <Button variant="outline" className="border-purple-400 text-purple-400">
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-purple-400">4K</h3>
            <p className="text-sm text-gray-300">Ultra HD Display</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">240Hz</h3>
            <p className="text-sm text-gray-300">Refresh Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">1ms</h3>
            <p className="text-sm text-gray-300">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero4;`,

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

  'FurnitureStoreHero2.tsx': `import { Button } from "@/components/ui/button";

const FurnitureStoreHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f4f1ec] overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-medium mb-2 block">New Collection</span>
            <h1 className="text-5xl font-light mb-6">
              Modern Living
              <span className="block font-bold">Redefined</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Discover furniture pieces that blend comfort with contemporary design, creating spaces that inspire.
            </p>
            <div className="space-x-4">
              <Button className="bg-amber-700 hover:bg-amber-800">View Collection</Button>
              <Button variant="outline">Our Story</Button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04')] bg-cover bg-center rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero2;`,

  'FurnitureStoreHero3.tsx': `import { Button } from "@/components/ui/button";

const FurnitureStoreHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100" />
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-serif mb-6">
            Artisanal Furniture
            <span className="block text-amber-700">Handcrafted with Care</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Each piece tells a story of craftsmanship and dedication to quality.
          </p>
          <div className="space-x-4">
            <Button className="bg-amber-900 hover:bg-amber-800">Browse Collection</Button>
            <Button variant="outline" className="border-amber-900 text-amber-900">
              Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero3;`,

  'FurnitureStoreHero4.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FurnitureStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f4f1ec]">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-serif mb-6">
              Scandinavian
              <span className="block text-amber-800">Living Space</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Minimalist design meets comfort in our latest collection of Nordic-inspired furniture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Living Room</Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Bedroom</Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Dining Room</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero4;`,

  'JewelryStoreHero.tsx': `const JewelryStoreHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <h2 className="mb-2 text-xl font-light uppercase tracking-widest">Timeless Elegance</h2>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold">Luxury Jewelry</h1>
          <p className="mb-8 text-lg md:text-xl font-light">Discover our exclusive collection of handcrafted pieces</p>
          <button className="border-2 border-white px-8 py-3 text-lg transition-colors hover:bg-white hover:text-black">
            View Collection
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-16 text-white">
        <div className="text-center">
          <p className="text-3xl font-light">500+</p>
          <p className="text-sm uppercase tracking-wider">Unique Designs</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-light">50+</p>
          <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-light">100%</p>
          <p className="text-sm uppercase tracking-wider">Certified</p>
        </div>
      </div>
    </div>
  );
};

export default JewelryStoreHero;`,

  'JewelryStoreHero2.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const JewelryStoreHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Exquisite Collection
            <span className="block font-light">Timeless Beauty</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover our handcrafted jewelry pieces that blend traditional craftsmanship with modern design.
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">View Collection</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">Book Consultation</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JewelryStoreHero2;`,

  'JewelryStoreHero3.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const JewelryStoreHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#2a2a2a] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Artisan Collection
            <span className="block font-light">Handcrafted Beauty</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Each piece tells a unique story, crafted with passion and precision by our master artisans.
          </p>
          <div className="space-x-4">
            <Button className="bg-amber-500 text-black hover:bg-amber-400">Explore Now</Button>
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-950/50">Custom Orders</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JewelryStoreHero3;`,

  'CosmeticsHero.tsx': `const CosmeticsHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#FDF6F0]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F0] via-transparent to-transparent" />
      
      <div className="absolute right-0 top-0 h-full w-2/3">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="relative flex h-full items-center px-8 md:px-16">
        <div className="max-w-xl">
          <h2 className="mb-4 text-lg font-medium text-rose-500">New Collection</h2>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-gray-900">Natural Beauty Enhanced</h1>
          <p className="mb-8 text-lg text-gray-600">
            Discover our range of organic and cruelty-free cosmetics, designed to enhance your natural beauty
          </p>
          <button className="rounded-full bg-rose-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-rose-600">
            Shop Now
          </button>
          
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Natural Ingredients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">Cruelty</p>
              <p className="text-sm text-gray-600">Free Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">ECO</p>
              <p className="text-sm text-gray-600">Friendly Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsHero;`,

  'CosmeticsHero2.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CosmeticsHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Natural Beauty
            <span className="block font-light">Pure Radiance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our collection of natural and organic beauty products that enhance your natural glow.
          </p>
          <div className="space-x-4">
            <Button className="bg-pink-500 text-white hover:bg-pink-600">Shop Now</Button>
            <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmeticsHero2;`,

  'CosmeticsHero3.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CosmeticsHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612817288484-6f916006741a')] bg-cover bg-center opacity-30" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Luxury Skincare
            <span className="block font-light">For Your Beauty</span>
          </h1>
          <p className="text-lg text-purple-200 mb-8">
            Experience the transformative power of premium skincare products designed for your unique beauty.
          </p>
          <div className="space-x-4">
            <Button className="bg-purple-500 text-white hover:bg-purple-600">Explore Collection</Button>
            <Button variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-800/50">Book Consultation</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmeticsHero3;`,

  'SportswearHero.tsx': `const SportswearHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=ef41091b5d5851c37891f96127f42299081f48aa&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      
      <div className="relative flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <h2 className="mb-2 text-xl font-bold uppercase tracking-widest text-yellow-400">New Collection</h2>
          <h1 className="mb-6 text-5xl md:text-7xl font-black uppercase">Push Your Limits</h1>
          <p className="mb-8 text-lg md:text-xl">Performance wear for the ultimate athlete</p>
          <button className="rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-gray-900 transition-colors hover:bg-yellow-300">
            Shop Collection
          </button>
          
          <div className="mt-12 flex justify-center gap-16">
            <div>
              <p className="text-3xl font-bold">Pro</p>
              <p className="text-sm uppercase">Athletes Choice</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm uppercase">Performance</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm uppercase">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero;`,

  'SportswearHero2.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')] bg-cover bg-center opacity-40" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            PUSH YOUR LIMITS
            <span className="block font-light">Break Records</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            High-performance sportswear designed to help you achieve your personal best.
          </p>
          <div className="space-x-4">
            <Button className="bg-red-600 text-white hover:bg-red-700">Shop Collection</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">Find Store</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportswearHero2;`,

  'SportswearHero3.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155')] bg-cover bg-center opacity-30" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            TRAIN HARDER
            <span className="block font-light">Achieve More</span>
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            Professional grade sportswear engineered for maximum performance and comfort.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">View Latest</Button>
            <Button variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-800/50">Size Guide</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportswearHero3;`,

  'SportswearHero4.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155')] bg-cover bg-center opacity-30" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            TRAIN HARDER
            <span className="block font-light">Achieve More</span>
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            Professional grade sportswear engineered for maximum performance and comfort.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">View Latest</Button>
            <Button variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-800/50">Size Guide</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportswearHero4;`,

  'JewelryStoreHero4.tsx': `import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const JewelryStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#2a2a2a] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Artisan Collection
            <span className="block font-light">Handcrafted Beauty</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Each piece tells a unique story, crafted with passion and precision by our master artisans.
          </p>
          <div className="space-x-4">
            <Button className="bg-amber-500 text-black hover:bg-amber-400">Explore Now</Button>
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-950/50">Custom Orders</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JewelryStoreHero4;`
};

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
        { component: <LuxuryFashionHero4 />, name: 'Style 4', file: 'LuxuryFashionHero4.tsx' }
      ]
    },
    {
      name: 'Tech Store',
      components: [
        { component: <TechStoreHero />, name: 'Style 1', file: 'TechStoreHero.tsx' },
        { component: <TechStoreHero2 />, name: 'Style 2', file: 'TechStoreHero2.tsx' },
        { component: <TechStoreHero3 />, name: 'Style 3', file: 'TechStoreHero3.tsx' },
        { component: <TechStoreHero4 />, name: 'Style 4', file: 'TechStoreHero4.tsx' }
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
