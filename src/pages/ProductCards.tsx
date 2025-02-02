import { useState } from "react";
import { SimpleProductCard } from "@/components/product-cards/SimpleProductCard";
import { ModernProductCard } from "@/components/product-cards/ModernProductCard";
import { LuxuryProductCard } from "@/components/product-cards/LuxuryProductCard";
import { MinimalProductCard } from "@/components/product-cards/MinimalProductCard";
import { DetailedProductCard } from "@/components/product-cards/DetailedProductCard";
import { FeaturedProductCard } from "@/components/product-cards/FeaturedProductCard";
import { InteractiveProductCard } from "@/components/product-cards/InteractiveProductCard";
import { HoverEffectProductCard } from "@/components/product-cards/HoverEffectProductCard";
import { GalleryProductCard } from "@/components/product-cards/GalleryProductCard";
import { VariantsProductCard } from "@/components/product-cards/VariantsProductCard";
import { CompactProductCard } from "@/components/product-cards/CompactProductCard";
import { SimpleInteractiveCard } from "@/components/product-cards/SimpleInteractiveCard";
import { ModernInteractiveCard } from "@/components/product-cards/ModernInteractiveCard";
import { MinimalistInteractiveCard } from "@/components/product-cards/MinimalistInteractiveCard";
import { ElegantInteractiveCard } from "@/components/product-cards/ElegantInteractiveCard";
import { GradientProductCard } from "@/components/product-cards/GradientProductCard";
import { BorderlessProductCard } from "@/components/product-cards/BorderlessProductCard";
import { GlassProductCard } from "@/components/product-cards/GlassProductCard";
import { HeroShowcase } from "@/components/HeroShowcase";
import { toast } from "sonner";
import { productCardComponents } from "@/data/productCardComponents";

const ProductCards = () => {
  const handleCopyCode = (fileName: string) => {
    const code = productCardComponents[fileName];
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
    } else {
      toast.error('Component code not found');
    }
  };

  const components = [
    { component: <SimpleProductCard />, name: 'Simple Product Card', file: 'SimpleProductCard.tsx' },
    { component: <ModernProductCard />, name: 'Modern Product Card', file: 'ModernProductCard.tsx' },
    { component: <LuxuryProductCard />, name: 'Luxury Product Card', file: 'LuxuryProductCard.tsx' },
    { component: <MinimalProductCard />, name: 'Minimal Product Card', file: 'MinimalProductCard.tsx' },
    { component: <DetailedProductCard />, name: 'Detailed Product Card', file: 'DetailedProductCard.tsx' },
    { component: <FeaturedProductCard />, name: 'Featured Product Card', file: 'FeaturedProductCard.tsx' },
    { component: <InteractiveProductCard />, name: 'Interactive Product Card', file: 'InteractiveProductCard.tsx' },
    { component: <HoverEffectProductCard />, name: 'Hover Effect Product Card', file: 'HoverEffectProductCard.tsx' },
    { component: <GalleryProductCard />, name: 'Gallery Product Card', file: 'GalleryProductCard.tsx' },
    { component: <VariantsProductCard />, name: 'Variants Product Card', file: 'VariantsProductCard.tsx' },
    { component: <CompactProductCard />, name: 'Compact Product Card', file: 'CompactProductCard.tsx' },
    { component: <SimpleInteractiveCard />, name: 'Simple Interactive Card', file: 'SimpleInteractiveCard.tsx' },
    { component: <ModernInteractiveCard />, name: 'Modern Interactive Card', file: 'ModernInteractiveCard.tsx' },
    { component: <MinimalistInteractiveCard />, name: 'Minimalist Interactive Card', file: 'MinimalistInteractiveCard.tsx' },
    { component: <ElegantInteractiveCard />, name: 'Elegant Interactive Card', file: 'ElegantInteractiveCard.tsx' },
    { component: <GradientProductCard />, name: 'Gradient Product Card', file: 'GradientProductCard.tsx' },
    { component: <BorderlessProductCard />, name: 'Borderless Product Card', file: 'BorderlessProductCard.tsx' },
    { component: <GlassProductCard />, name: 'Glass Product Card', file: 'GlassProductCard.tsx' },
  ];

  return (
    <div className="min-h-screen py-8">
      <HeroShowcase components={components} onCopyCode={handleCopyCode} />
    </div>
  );
};

export default ProductCards;