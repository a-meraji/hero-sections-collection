import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const VariantsProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("black")
  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Gray", value: "gray" },
  ]

  return (
    <div className="rounded-xl border bg-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
        <Badge className="absolute left-3 top-3" variant="secondary">Premium</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Premium Collection</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold">$199</p>
            <Badge variant="secondary">Free Shipping</Badge>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-muted-foreground">Select Color:</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`h-6 w-6 rounded-full border-2 ${
                  selectedColor === color.value ? "border-primary" : "border-transparent"
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
          <Button className="mt-4 w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}