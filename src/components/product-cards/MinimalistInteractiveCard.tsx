import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const MinimalistInteractiveCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="aspect-square bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-2 top-2" variant="destructive">-20%</Badge>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium">Sport Sneakers</h3>
        <p className="mt-1 text-sm text-muted-foreground">$129</p>
      </div>
      {showButtons && (
        <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-white/90 p-3">
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
  )
}