import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const CompactProductPage = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="aspect-[4/3] bg-muted">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4 p-4 sm:space-y-6 sm:p-6">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold sm:text-2xl">Wireless Headphones</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Premium Audio Series
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary" : ""}`} />
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(42 reviews)</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <p className="text-xl font-bold sm:text-2xl">$299.00</p>
              <p className="text-sm text-muted-foreground">In Stock</p>
            </div>
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h3 className="font-medium">Key Features</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Active Noise Cancellation</li>
              <li>40mm Dynamic Drivers</li>
              <li>30-Hour Battery Life</li>
              <li>Quick Charge Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}