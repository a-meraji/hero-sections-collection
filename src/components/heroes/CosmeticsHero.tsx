import { motion } from 'framer-motion';

const stats = [
  { value: '98%', label: 'Natural Ingredients' },
  { value: '2M+', label: 'Happy Customers' },
  { value: '150+', label: 'Products' }
];

const CosmeticsHero = () => {
  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mb-6 text-6xl font-light tracking-tight text-gray-900">
                Natural Beauty,
                <br />
                <span className="font-medium">Enhanced by Science</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Discover skincare products made with natural ingredients and backed by scientific research
              </p>
              <button className="w-fit bg-black px-8 py-3 text-sm uppercase tracking-wider text-white transition-opacity hover:opacity-90">
                Shop Now
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-light text-gray-900">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsHero;