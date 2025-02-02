import { Button } from "@/components/ui/button";

const FurnitureStoreHero3 = () => {
  return (
    <div className="relative min-h-[80vh] bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100" />
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-serif mb-6">
            Artisanal Furniture
            <span className="block text-amber-700">Handcrafted with Care</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Each piece tells a story of craftsmanship and dedication to quality.
          </p>
          <div className="space-x-4">
            <Button className="bg-amber-900 hover:bg-amber-800">Browse Collection</Button>
            <Button variant="outline" className="border-amber-900 text-amber-900">
              Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero3;