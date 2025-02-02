import { Button } from "@/components/ui/button";

const LuxuryFashionHero6 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div className="order-2 lg:order-1 flex items-center p-12 bg-[#1a1a1a] text-white">
        <div className="max-w-xl">
          <span className="text-gold-500 font-medium mb-2 block">Limited Edition</span>
          <h1 className="text-5xl font-serif mb-6">
            Luxury Redefined
            <span className="block text-gold-500">For The Modern Elite</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Experience unparalleled craftsmanship and sophistication in our latest collection.
          </p>
          <div className="space-x-4">
            <Button className="bg-gold-600 hover:bg-gold-700 text-black">View Collection</Button>
            <Button variant="outline" className="border-gold-500 text-gold-500">Private Viewing</Button>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b')] bg-cover bg-center min-h-[400px]" />
    </div>
  );
};

export default LuxuryFashionHero6;