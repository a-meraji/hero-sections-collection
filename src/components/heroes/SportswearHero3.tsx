import { Button } from "@/components/ui/button";

const SportswearHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <span className="text-gray-300 font-medium mb-4 block">New Collection</span>
          <h1 className="text-6xl font-bold mb-6">
            Elite Performance
            <span className="block font-light">Maximum Comfort</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Engineered for peak performance, designed for everyday excellence.
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-black hover:bg-gray-100">Shop Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero3;