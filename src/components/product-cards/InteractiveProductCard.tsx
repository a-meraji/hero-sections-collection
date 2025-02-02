import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const InteractiveProductCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative rounded-xl border bg-card"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-3 top-3" variant="secondary">New</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex gap-2 items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
            <Button 
              className="flex-1" 
              variant="outline"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button 
              className="flex-1"
              onClick={handleButtonClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground">Audio Brand</p>
        <h3 className="font-semibold">Wireless Headphones</h3>
        <div className="mt-2 flex items-center gap-2">
          <p className="text-lg font-bold">$199</p>
          <p className="text-sm text-muted-foreground line-through">$249</p>
        </div>
      </div>
    </div>
  )
}