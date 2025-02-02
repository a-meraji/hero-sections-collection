const SportswearHero = () => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div 
        className="relative order-2 md:order-1"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="order-1 flex items-center bg-gray-100 px-8 md:order-2 md:px-16">
        <div>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-gray-600">
            New Collection 2024
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Push Your
            <br />
            Limits
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-600">
            High-performance sportswear designed to help you achieve your personal best
          </p>
          <button className="bg-black px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-gray-900">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero;