import { Button } from "@/components/ui/button";
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

export default JewelryStoreHero2;