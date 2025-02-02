import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TechStoreHero6 = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6"
          >
            Smart Home
            <span className="block text-blue-400">Innovation Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Transform your living space with cutting-edge smart home technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Button className="bg-blue-500 hover:bg-blue-600">Explore Products</Button>
            <Button variant="outline">Watch Demo</Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-blue-400 text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-400">Smart Devices</div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-blue-400 text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-blue-400 text-4xl font-bold mb-2">50K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStoreHero6;