export const productCardComponents = {
  'SimpleProductCard.tsx': `import React from 'react';
import { Button } from '@/components/ui/button';

export const SimpleProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/placeholder.svg" alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Simple Product</div>
        <p className="text-gray-700 text-base">
          A simple product description goes here.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};`,
  // Add more product card component strings here as needed
};