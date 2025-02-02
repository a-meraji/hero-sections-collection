import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const JewelryStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-amber-50 to-rose-50 overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-700 text-xl mb-4">Artisanal Collection</h2>
            <h1 className="text-6xl font-serif mb-6">
              Timeless Beauty
              <span className="block text-amber-800">Handcrafted Elegance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Each piece tells a story of craftsmanship and dedication to beauty.
            </p>
            <div className="space-x-4">
              <Button className="bg-amber-700 hover:bg-amber-800">View Collection</Button>
              <Button variant="outline" className="border-amber-700 text-amber-700">Book Consultation</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-amber-200 to-rose-200 p-8">
              <div className="w-full h-full rounded-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338')] bg-cover bg-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JewelryStoreHero4;