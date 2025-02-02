import { Button } from "@/components/ui/button";

const CosmeticsHero5 = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612817288484-6f916006741a')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
        <div className="flex items-center justify-center p-12 lg:p-24">
          <div className="max-w-xl">
            <span className="text-pink-400 uppercase tracking-wider text-sm">Premium Collection</span>
            <h1 className="text-5xl font-serif mt-4 mb-6">
              Luxury Skincare
              <span className="block text-pink-400">For Your Beauty</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Experience the transformative power of premium skincare products designed for your unique beauty.
            </p>
            <div className="space-x-4">
              <Button className="bg-pink-500 hover:bg-pink-600">Shop Collection</Button>
              <Button variant="outline" className="border-pink-400 text-pink-400">Book Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsHero5;