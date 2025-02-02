import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FurnitureStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f4f1ec]">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-serif mb-6">
              Scandinavian
              <span className="block text-amber-800">Living Space</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Minimalist design meets comfort in our latest collection of Nordic-inspired furniture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Living Room</Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Bedroom</Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-[400px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1')] bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Button className="bg-white text-black hover:bg-gray-100">Dining Room</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero4;