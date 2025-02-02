import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const BorderlessProductCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-xl"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square bg-muted">
        <img
          src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <Badge className="absolute right-3 top-3" variant="secondary">Eco-friendly</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm">
            <Button 
              size="sm"
              variant="secondary"
              className="rounded-full"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </Button>
            <Button 
              size="sm"
              className="rounded-full"
              onClick={handleButtonClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Purchase
            </Button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-muted-foreground">Nature Collection</p>
        <h3 className="mt-1 font-medium">Forest Light Print</h3>
        <p className="mt-1 font-semibold">$159</p>
      </div>
    </div>
  )
}