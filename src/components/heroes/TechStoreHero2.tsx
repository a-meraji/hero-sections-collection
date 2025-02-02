import { Button } from "@/components/ui/button";

const TechStoreHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Future of Technology
            <span className="block text-blue-400">Is Here Today</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Discover cutting-edge devices and innovative solutions that transform the way you live and work.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600">Shop Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStoreHero2;