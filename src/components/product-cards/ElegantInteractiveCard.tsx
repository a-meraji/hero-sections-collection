import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const ElegantInteractiveCard = () => {
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
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3" variant="secondary">Limited</Badge>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-muted-foreground">Luxury Collection</p>
        <h3 className="mt-1 font-serif text-lg">Designer Watch</h3>
        <div className="mt-2">
          <p className="text-lg font-bold">$899</p>
        </div>
        {showButtons && (
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-white/95 p-4">
            <Button 
              variant="outline"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
            <Button 
              onClick={handleButtonClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Purchase Now
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}