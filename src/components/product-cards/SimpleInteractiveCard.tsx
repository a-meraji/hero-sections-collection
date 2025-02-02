import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const SimpleInteractiveCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative rounded-lg border bg-card"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-2 top-2" variant="secondary">Trending</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-white/60 p-3 backdrop-blur-sm">
            <Button 
              size="sm"
              variant="ghost"
              onClick={handleButtonClick}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              size="sm"
              onClick={handleButtonClick}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium">Minimal Desk Lamp</h3>
        <p className="mt-1 text-sm text-muted-foreground">$59</p>
      </div>
    </div>
  )
}
