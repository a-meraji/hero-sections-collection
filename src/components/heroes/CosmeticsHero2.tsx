import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CosmeticsHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#fdf6f0] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-6">
            Pure Beauty
            <span className="block font-serif italic">Natural Radiance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our collection of natural skincare products that enhance your natural beauty.
          </p>
          <div className="space-x-4">
            <Button className="bg-rose-900 hover:bg-rose-800">Shop Collection</Button>
            <Button variant="outline" className="border-rose-900 text-rose-900">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmeticsHero2;