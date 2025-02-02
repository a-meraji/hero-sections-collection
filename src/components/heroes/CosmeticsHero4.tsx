import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CosmeticsHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-rose-600 text-xl mb-4">Organic Collection</h2>
            <h1 className="text-6xl font-serif mb-6">
              Natural Beauty
              <span className="block text-rose-700">Pure Radiance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover our collection of natural and organic beauty products that enhance your natural glow.
            </p>
            <div className="space-x-4">
              <Button className="bg-rose-600 hover:bg-rose-700">Shop Now</Button>
              <Button variant="outline" className="border-rose-600 text-rose-600">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-rose-200 to-pink-200 p-8">
              <div className="w-full h-full rounded-full bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348')] bg-cover bg-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsHero4;