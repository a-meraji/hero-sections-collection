import { Button } from "@/components/ui/button";

const TechStoreHero4 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        <h2 className="text-xl font-medium text-purple-300 mb-4">Revolutionary Gaming Experience</h2>
        <h1 className="text-7xl font-bold mb-6">
          Next-Gen
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Gaming Gear
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experience gaming like never before with our cutting-edge equipment and accessories.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-purple-500 hover:bg-purple-600">Shop Now</Button>
          <Button variant="outline" className="border-purple-400 text-purple-400">
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-purple-400">4K</h3>
            <p className="text-sm text-gray-300">Ultra HD Display</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">240Hz</h3>
            <p className="text-sm text-gray-300">Refresh Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">1ms</h3>
            <p className="text-sm text-gray-300">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero4;