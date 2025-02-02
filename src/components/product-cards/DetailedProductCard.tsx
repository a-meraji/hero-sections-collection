import { Heart, ShoppingCart, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const DetailedProductCard = () => {
  return (
    <div className="rounded-xl border bg-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
        <Badge className="absolute left-3 top-3" variant="destructive">Sale</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Gourmet Brand</p>
            <Badge variant="secondary">In Stock</Badge>
          </div>
          <h3 className="font-semibold">Premium Food Collection</h3>
          <div className="flex gap-2">
            <Badge variant="outline">Organic</Badge>
            <Badge variant="outline">Vegan</Badge>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">$89</p>
            <p className="text-sm text-muted-foreground line-through">$129</p>
            <Badge variant="secondary">-30%</Badge>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4" /> Free shipping
            </div>
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}