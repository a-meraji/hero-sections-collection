import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155')] bg-cover bg-center opacity-30" />
      <div className="relative container mx-auto px-4 py-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            TRAIN HARDER
            <span className="block font-light">Achieve More</span>
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            Professional grade sportswear engineered for maximum performance and comfort.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">View Latest</Button>
            <Button variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-800/50">Size Guide</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportswearHero3;