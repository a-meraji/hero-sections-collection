import { Button } from "@/components/ui/button";
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

export default CosmeticsHero3;