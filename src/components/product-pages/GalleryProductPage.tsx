import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const GalleryProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  ]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-7">
          <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={images[mainImage]}
              alt="Product main"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`overflow-hidden rounded-lg border-2 ${
                  mainImage === i ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`View ${i + 1}`}
                  className="aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          <div className="sticky top-8 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  (128 reviews)
                </span>
              </div>
              <h1 className="mt-2 text-3xl font-bold">Sport Sneakers</h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Limited Edition
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl font-bold">$129.00</p>
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over $50
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-primary" : ""}`}
                  />
                </Button>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">Product Features</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Breathable mesh upper</li>
                  <li>Cushioned midsole</li>
                  <li>Durable rubber outsole</li>
                  <li>Available in multiple sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}