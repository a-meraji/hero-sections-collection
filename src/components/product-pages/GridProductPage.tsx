import { useState } from "react"
import { Heart, ShoppingCart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const GridProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("black")
  const [isFavorite, setIsFavorite] = useState(false)

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Gray", value: "gray" },
    { name: "Navy", value: "navy" },
  ]

  const features = [
    "Premium Materials",
    "Handcrafted Design",
    "Lifetime Warranty",
    "Free Shipping",
  ]

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80"
                alt={`Product view ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Premium Sneakers</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Signature Collection
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold sm:text-3xl">$199.00</p>
            <p className="text-sm text-muted-foreground">
              Or 4 interest-free payments of $49.75
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium">Color</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`group relative h-12 w-12 overflow-hidden rounded-full border-2 ${
                    selectedColor === color.value
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.value && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                  )}
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4"
              >
                <Check className="h-4 w-4 text-primary" />
                <p className="mt-2 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>

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
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary" : ""}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}