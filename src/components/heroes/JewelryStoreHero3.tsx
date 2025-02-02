import { Button } from "@/components/ui/button";
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

export default JewelryStoreHero3;