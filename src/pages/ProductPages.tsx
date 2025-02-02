import { CodeExampleBlock } from "@/components/carousels/CodeExampleBlock"
import { DetailedProductPage } from "@/components/product-pages/DetailedProductPage"
import { LuxuryProductPage } from "@/components/product-pages/LuxuryProductPage"
import { MinimalProductPage } from "@/components/product-pages/MinimalProductPage"
import { ModernProductPage } from "@/components/product-pages/ModernProductPage"
import { TechProductPage } from "@/components/product-pages/TechProductPage"
import { MinimalistProductPage } from "@/components/product-pages/MinimalistProductPage"
import { GalleryProductPage } from "@/components/product-pages/GalleryProductPage"
import { GridProductPage } from "@/components/product-pages/GridProductPage"
import { CompactProductPage } from "@/components/product-pages/CompactProductPage"
import { FullscreenProductPage } from "@/components/product-pages/FullscreenProductPage"

export default function ProductPages() {
  return (
    <div className="container py-8 space-y-12">
      <h1 className="text-3xl font-bold">Product Pages</h1>
      <p className="text-muted-foreground">
        A collection of product page examples with different layouts and features.
      </p>

      <div className="space-y-24">
        <section>
          <CodeExampleBlock
            title="Minimal Product Page"
            description="A clean and minimal product page layout focusing on essential information."
            component={<MinimalProductPage />}
            code="MinimalProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Modern Product Page"
            description="A modern product page with advanced features and interactive elements."
            component={<ModernProductPage />}
            code="ModernProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Luxury Product Page"
            description="An elegant product page design for luxury items."
            component={<LuxuryProductPage />}
            code="LuxuryProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Tech Product Page"
            description="A feature-rich product page for tech products with detailed specifications."
            component={<TechProductPage />}
            code="TechProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Detailed Product Page"
            description="A comprehensive product page with structured information and multiple sections."
            component={<DetailedProductPage />}
            code="DetailedProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Minimalist Product Page"
            description="A clean and focused design emphasizing simplicity and white space."
            component={<MinimalistProductPage />}
            code="MinimalistProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Gallery Product Page"
            description="A gallery-focused layout with large images and detailed product information."
            component={<GalleryProductPage />}
            code="GalleryProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Grid Product Page"
            description="A grid-based layout showcasing multiple product images and features."
            component={<GridProductPage />}
            code="GridProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Compact Product Page"
            description="A condensed layout perfect for smaller products and quick purchases."
            component={<CompactProductPage />}
            code="CompactProductPage.tsx"
          />
        </section>

        <section>
          <CodeExampleBlock
            title="Fullscreen Product Page"
            description="An immersive fullscreen experience with dramatic product presentation."
            component={<FullscreenProductPage />}
            code="FullscreenProductPage.tsx"
          />
        </section>
      </div>
    </div>
  )
}
