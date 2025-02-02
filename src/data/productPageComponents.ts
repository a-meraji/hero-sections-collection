export const productPageComponents = {
  "MinimalProductPage.tsx": `import { useState } from "react"
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const MinimalProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavorite, setIsFavorite] = useState(false)

  const sizes = ["XS", "S", "M", "L", "XL"]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
              alt="Product main"
              className="h-[500px] w-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <img
                key={i}
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
                alt={\`Product view \${i + 1}\`}
                className="aspect-square rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-medium">Minimal Product Title</h1>
            <p className="mt-2 text-lg text-muted-foreground">Brand Name</p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold">$99.00</span>
            <Badge>Free Shipping</Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={\`h-10 w-10 rounded-full border \${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input hover:bg-accent"
                    }\`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex w-32 items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={\`h-4 w-4 \${isFavorite ? "fill-primary" : ""}\`}
              />
            </Button>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Description</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  "ModernProductPage.tsx": `// ... keep existing code`,
  "LuxuryProductPage.tsx": `// ... keep existing code`,
  "TechProductPage.tsx": `// ... keep existing code`,
  "DetailedProductPage.tsx": `// ... keep existing code`,
}