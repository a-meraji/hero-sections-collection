const FurnitureStoreHero = () => {
  return (
    <div className="grid h-screen grid-cols-2 bg-[#F6F6F7]">
      <div className="flex items-center justify-center p-16">
        <div>
          <h1 className="mb-6 text-6xl font-light leading-tight text-gray-900">
            Create Your
            <br />
            <span className="font-bold">Perfect Space</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Curated furniture collections for modern living
          </p>
          <button className="rounded-none bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800">
            Explore Collections
          </button>
        </div>
      </div>
      
      <div 
        className="relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486718448742-163732cd1544)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default FurnitureStoreHero;