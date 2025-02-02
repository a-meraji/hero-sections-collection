import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LuxuryFashionHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f8f5f0] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500 mb-4">Limited Edition</span>
          <h1 className="text-6xl font-light mb-6">
            The Art of
            <span className="block font-serif italic">Luxury Fashion</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our exclusive collection of handcrafted pieces that define modern elegance.
          </p>
          <div className="space-x-4">
            <Button className="bg-black hover:bg-gray-800">View Collection</Button>
            <Button variant="outline">Book Appointment</Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[600px]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center rounded-lg shadow-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryFashionHero4;