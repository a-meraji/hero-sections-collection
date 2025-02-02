import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products', value: '1000+' },
  { label: 'Countries', value: '30+' }
];

const TechStoreHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="relative h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex h-full flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-7xl font-bold">Future is Now</h1>
          <p className="mb-8 text-xl font-light">Experience tomorrow's technology today</p>
          
          <div className="mb-12 flex justify-center gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-full bg-blue-500 px-8 py-3 text-lg font-medium transition-colors hover:bg-blue-600"
          >
            Shop Latest Gadgets
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStoreHero;