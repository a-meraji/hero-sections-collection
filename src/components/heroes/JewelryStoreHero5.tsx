import { Button } from "@/components/ui/button";

const JewelryStoreHero5 = () => {
  return (
    <div className="min-h-[80vh] bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
        <div className="flex items-center justify-center p-12 lg:p-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-xl">
            <span className="text-gold-400 uppercase tracking-wider text-sm">Premium Collection</span>
            <h1 className="text-5xl font-serif mt-4 mb-6">
              Where Luxury
              <span className="block text-gold-400">Meets Artistry</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Discover our exclusive collection of handcrafted jewelry pieces, where every detail tells a story of elegance and sophistication.
            </p>
            <div className="space-x-4">
              <Button className="bg-gold-500 hover:bg-gold-600 text-black">Explore Collection</Button>
              <Button variant="outline" className="border-gold-500 text-gold-400">Book Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryStoreHero5;