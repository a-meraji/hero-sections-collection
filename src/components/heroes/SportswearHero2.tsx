import { Button } from "@/components/ui/button";
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

export default SportswearHero2;