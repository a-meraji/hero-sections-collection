import { MinimalProductCard } from "@/components/product-cards/MinimalProductCard"
import { ModernProductCard } from "@/components/product-cards/ModernProductCard"
import { LuxuryProductCard } from "@/components/product-cards/LuxuryProductCard"
import { CompactProductCard } from "@/components/product-cards/CompactProductCard"
import { DetailedProductCard } from "@/components/product-cards/DetailedProductCard"
import { GalleryProductCard } from "@/components/product-cards/GalleryProductCard"
import { HoverEffectProductCard } from "@/components/product-cards/HoverEffectProductCard"
import { VariantsProductCard } from "@/components/product-cards/VariantsProductCard"
import { SimpleProductCard } from "@/components/product-cards/SimpleProductCard"
import { FeaturedProductCard } from "@/components/product-cards/FeaturedProductCard"
import { InteractiveProductCard } from "@/components/product-cards/InteractiveProductCard"
import { MinimalistInteractiveCard } from "@/components/product-cards/MinimalistInteractiveCard"
import { ElegantInteractiveCard } from "@/components/product-cards/ElegantInteractiveCard"
import { ModernInteractiveCard } from "@/components/product-cards/ModernInteractiveCard"
import { SimpleInteractiveCard } from "@/components/product-cards/SimpleInteractiveCard"

const ProductCards = () => {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Product Card Examples</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Minimal Style</h2>
          <MinimalProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Modern Style</h2>
          <ModernProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Luxury Style</h2>
          <LuxuryProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Compact Style</h2>
          <CompactProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Detailed Style</h2>
          <DetailedProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Gallery Style</h2>
          <GalleryProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Hover Effect Style</h2>
          <HoverEffectProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Variants Style</h2>
          <VariantsProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Simple Style</h2>
          <SimpleProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Featured Style</h2>
          <FeaturedProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Interactive Style</h2>
          <InteractiveProductCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Minimalist Interactive</h2>
          <MinimalistInteractiveCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Elegant Interactive</h2>
          <ElegantInteractiveCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Modern Interactive</h2>
          <ModernInteractiveCard />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Simple Interactive</h2>
          <SimpleInteractiveCard />
        </div>
      </div>
    </div>
  )
}

export default ProductCards