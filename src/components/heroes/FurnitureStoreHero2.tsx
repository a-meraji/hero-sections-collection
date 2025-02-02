import { Button } from "@/components/ui/button";

const FurnitureStoreHero2 = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f4f1ec] overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-medium mb-2 block">New Collection</span>
            <h1 className="text-5xl font-light mb-6">
              Modern Living
              <span className="block font-bold">Redefined</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Discover furniture pieces that blend comfort with contemporary design, creating spaces that inspire.
            </p>
            <div className="space-x-4">
              <Button className="bg-amber-700 hover:bg-amber-800">View Collection</Button>
              <Button variant="outline">Our Story</Button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04')] bg-cover bg-center rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreHero2;