import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const LuxuryProductCard = () => {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <Badge className="absolute left-3 top-3" variant="secondary">Limited Edition</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <div className="space-y-1">
          <h3 className="font-serif text-xl">Luxury Watch Collection</h3>
          <p className="text-sm text-muted-foreground">Premium Series 2024</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold">$1,299</p>
            <p className="text-sm text-muted-foreground">Free shipping</p>
          </div>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Purchase
          </Button>
        </div>
      </div>
    </div>
  )
}