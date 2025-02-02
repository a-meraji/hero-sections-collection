import { Button } from "@/components/ui/button";

const JewelryStoreHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-amber-50 to-rose-50">
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-amber-700 font-medium mb-4 block">New Collection</span>
          <h1 className="text-6xl font-serif mb-6">
            Artisanal Jewelry
            <span className="block text-amber-800">Handcrafted with Love</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Each piece tells a story of elegance and sophistication.
          </p>
          <div className="space-x-4">
            <Button className="bg-amber-900 hover:bg-amber-800">Shop Collection</Button>
            <Button variant="outline" className="border-amber-900 text-amber-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryStoreHero3;