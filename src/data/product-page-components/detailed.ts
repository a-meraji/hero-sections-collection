export const detailedProductPage = `
import { useState } from "react"
import { Heart, ShoppingCart, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const DetailedProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
  ]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={images[mainImage]}
              alt="Product main"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={\`overflow-hidden \${
                  mainImage === i ? "ring-2 ring-primary" : ""
                }\`}
              >
                <img
                  src={image}
                  alt={\`Product view \${i + 1}\`}
                  className="aspect-[3/4] object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <Badge variant="secondary" className="mb-4">
              Limited Edition
            </Badge>
            <h1 className="font-serif text-4xl">Luxury Watch Collection</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Premium Series 2024
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-light">$1,299.00</p>
            <p className="text-sm text-muted-foreground">
              Including complimentary shipping & returns
            </p>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 rounded-full" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? "fill-primary" : ""}`}
              />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="mt-2 text-muted-foreground">
                Crafted with precision and elegance, our luxury timepiece
                collection represents the pinnacle of watchmaking artistry.
                Featuring Swiss-made movement and premium materials, each piece is
                a testament to timeless sophistication.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Details</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Swiss-made automatic movement</li>
                <li>Sapphire crystal glass</li>
                <li>Water-resistant to 100m</li>
                <li>Premium leather strap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`