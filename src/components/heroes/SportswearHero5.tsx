import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SportswearHero5 = () => {
  return (
    <div className="min-h-[80vh] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 flex items-center p-12 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-600 uppercase tracking-wider text-sm font-medium">New Collection</span>
            <h1 className="text-5xl font-bold mt-4 mb-6">
              TRAIN HARDER
              <span className="block text-red-600">ACHIEVE MORE</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Premium sportswear designed for maximum performance and comfort. Push your limits with confidence.
            </p>
            <div className="space-x-4">
              <Button className="bg-red-600 hover:bg-red-700">Shop Collection</Button>
              <Button variant="outline" className="border-red-600 text-red-600">Size Guide</Button>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:from-white/50 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero5;