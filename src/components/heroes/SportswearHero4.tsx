import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-red-500 text-xl mb-4">Performance Collection</h2>
            <h1 className="text-6xl font-bold mb-6">
              ELEVATE YOUR
              <span className="block text-red-500">PERFORMANCE</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Advanced sportswear designed to push your limits and achieve new records.
            </p>
            <div className="space-x-4">
              <Button className="bg-red-500 hover:bg-red-600">Shop Now</Button>
              <Button variant="outline" className="border-red-500 text-red-500">Find Store</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero4;