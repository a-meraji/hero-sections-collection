import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const ModernProductCard = () => {
  return (
    <div className="group relative rounded-xl border p-3 hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-5 top-5 bg-red-500">-20%</Badge>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Tech Brand</p>
            <h3 className="font-semibold">Smart Robot Assistant</h3>
          </div>
          <Button size="icon" variant="ghost">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm line-through text-muted-foreground">$999</p>
            <p className="text-lg font-bold">$799</p>
          </div>
          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
