import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LuxuryFashionHero5 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl font-medium text-purple-300 mb-4">New Collection 2024</h2>
          <h1 className="text-7xl font-serif mb-6">
            Timeless
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Elegance
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our exclusive collection of handcrafted luxury pieces.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600">Shop Collection</Button>
            <Button variant="outline" className="border-purple-400 text-purple-400">
              Book Appointment
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryFashionHero5;