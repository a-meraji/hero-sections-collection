import { useState } from "react"
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const MinimalistProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="grid gap-16 md:grid-cols-2">
        <div className="aspect-square bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-light">Minimalist Watch</h1>
            <p className="mt-2 text-sm text-muted-foreground">Series One</p>
          </div>

          <p className="text-3xl">$299.00</p>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Quantity</h3>
              <div className="mt-2 flex w-32 items-center gap-2">
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
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-primary" : ""}`} />
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium">Description</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A timepiece that embodies simplicity and elegance. Crafted with
              precision and designed for those who appreciate minimalist aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}