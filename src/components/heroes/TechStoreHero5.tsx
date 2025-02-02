import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TechStoreHero5 = () => {
  return (
    <div className="relative min-h-[80vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-cyan-400 text-xl mb-4">Revolutionary Gaming</h2>
            <h1 className="text-6xl font-bold mb-6">
              Next-Gen
              <span className="block text-cyan-400">Gaming Setup</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Experience gaming like never before with our cutting-edge equipment.
            </p>
            <div className="space-x-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600">Shop Now</Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-500">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593640408182-31c70c8268f5')] bg-cover bg-center rounded-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero5;