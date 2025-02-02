import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const ModernInteractiveCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border bg-card"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <Badge className="absolute right-2 top-2" variant="destructive">Sale</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/20 p-4 backdrop-blur-sm">
            <Button 
              className="flex-1" 
              variant="secondary"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button 
              className="flex-1"
              onClick={handleButtonClick}
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Tech Accessories</p>
          <h3 className="font-medium">Smart Watch Pro</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold">$299</p>
            <p className="text-sm text-muted-foreground line-through">$399</p>
          </div>
        </div>
      </div>
    </div>
  )
}