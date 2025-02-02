import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LuxuryFashionHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f8f5f0] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-6">
            Timeless Elegance
            <span className="block font-serif italic">Refined Style</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our curated collection of luxury fashion pieces that define sophistication and grace.
          </p>
          <div className="space-x-4">
            <Button className="bg-black hover:bg-gray-800">Shop Collection</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryFashionHero2;