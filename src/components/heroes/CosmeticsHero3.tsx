import { Button } from "@/components/ui/button";

const CosmeticsHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-rose-600 font-medium mb-4 block">Clean Beauty</span>
          <h1 className="text-6xl font-serif mb-6">
            Natural Skincare
            <span className="block text-rose-700">For Every Skin Type</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the power of natural ingredients for your daily skincare routine.
          </p>
          <div className="space-x-4">
            <Button className="bg-rose-700 hover:bg-rose-800">View Products</Button>
            <Button variant="outline" className="border-rose-700 text-rose-700">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsHero3;