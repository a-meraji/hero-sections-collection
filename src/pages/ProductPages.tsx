import { CodeExampleBlock } from "@/components/carousels/CodeExampleBlock"
import { DetailedProductPage } from "@/components/product-pages/DetailedProductPage"
import { LuxuryProductPage } from "@/components/product-pages/LuxuryProductPage"
import { MinimalProductPage } from "@/components/product-pages/MinimalProductPage"
import { ModernProductPage } from "@/components/product-pages/ModernProductPage"
import { TechProductPage } from "@/components/product-pages/TechProductPage"

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
            code={`// Minimal Product Page Code`}
          >
            <MinimalProductPage />
          </CodeExampleBlock>
        </section>

        <section>
          <CodeExampleBlock
            title="Modern Product Page"
            description="A modern product page with advanced features and interactive elements."
            component={<ModernProductPage />}
            code={`// Modern Product Page Code`}
          >
            <ModernProductPage />
          </CodeExampleBlock>
        </section>

        <section>
          <CodeExampleBlock
            title="Luxury Product Page"
            description="An elegant product page design for luxury items."
            component={<LuxuryProductPage />}
            code={`// Luxury Product Page Code`}
          >
            <LuxuryProductPage />
          </CodeExampleBlock>
        </section>

        <section>
          <CodeExampleBlock
            title="Tech Product Page"
            description="A feature-rich product page for tech products with detailed specifications."
            component={<TechProductPage />}
            code={`// Tech Product Page Code`}
          >
            <TechProductPage />
          </CodeExampleBlock>
        </section>

        <section>
          <CodeExampleBlock
            title="Detailed Product Page"
            description="A comprehensive product page with structured information and multiple sections."
            component={<DetailedProductPage />}
            code={`// Detailed Product Page Code`}
          >
            <DetailedProductPage />
          </CodeExampleBlock>
        </section>
      </div>
    </div>
  )
}