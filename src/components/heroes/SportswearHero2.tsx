import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Performance
            <span className="block font-light">Redefined</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Engineered for athletes, designed for everyone. Discover our latest collection of performance wear.
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

export default SportswearHero2;