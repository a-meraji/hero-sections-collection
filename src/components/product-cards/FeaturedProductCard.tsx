import { Heart, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const FeaturedProductCard = () => {
  return (
    <div className="group relative rounded-xl border bg-card shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3" variant="destructive">-15% OFF</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Featured</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm">4.9</span>
            </div>
          </div>
          <h3 className="font-semibold">Premium Featured Product</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold">$169</p>
            <p className="text-sm text-muted-foreground line-through">$199</p>
          </div>
        </div>
        <Button className="mt-4 w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}