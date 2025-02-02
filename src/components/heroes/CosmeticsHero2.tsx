import { Button } from "@/components/ui/button";
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

export default CosmeticsHero2;