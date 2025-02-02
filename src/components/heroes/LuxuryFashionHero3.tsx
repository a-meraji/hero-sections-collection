import { Button } from "@/components/ui/button";

const LuxuryFashionHero3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div className="flex items-center justify-center p-12 bg-[#1a1a1a] text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-light mb-6">
            AUTUMN
            <span className="block font-bold">COLLECTION</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Experience luxury reimagined through our latest collection of timeless pieces and contemporary designs.
          </p>
          <Button className="bg-white text-black hover:bg-gray-100">
            Explore Now
          </Button>
        </div>
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901')] bg-cover bg-center min-h-[400px]" />
    </div>
  );
};

export default LuxuryFashionHero3;