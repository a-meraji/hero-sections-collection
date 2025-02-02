import { motion } from 'framer-motion';

const JewelryStoreHero = () => {
  return (
    <div 
      className="relative h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative flex h-full flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-2 font-serif text-xl tracking-widest">ELEGANCE DEFINED</h2>
          <h1 className="mb-6 font-serif text-7xl font-light tracking-wide">Timeless Beauty</h1>
          <p className="mb-8 text-lg font-light tracking-wider">Discover our exclusive collection of handcrafted jewelry</p>
          <button className="border border-white bg-transparent px-8 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default JewelryStoreHero;