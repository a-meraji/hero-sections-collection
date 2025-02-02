import { Button } from "@/components/ui/button";

const TechStoreHero3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div className="order-2 lg:order-1 flex items-center p-12 bg-gray-100">
        <div className="max-w-xl">
          <span className="text-blue-600 font-medium mb-2 block">New Release</span>
          <h1 className="text-5xl font-bold mb-6">
            Smart Living
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Transform your home with our latest collection of smart devices and connected solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Shop Devices</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center min-h-[400px]" />
    </div>
  );
};

export default TechStoreHero3;