import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const HoverEffectProductCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl border">
      <div className="aspect-square bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute left-3 top-3" variant="secondary">New Arrival</Badge>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-semibold">Modern Workspace Setup</h3>
        <p className="mt-1">$1,299</p>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="secondary" className="flex-1">
            <Heart className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button size="sm" variant="secondary" className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy
          </Button>
        </div>
      </div>
    </div>
  )
}