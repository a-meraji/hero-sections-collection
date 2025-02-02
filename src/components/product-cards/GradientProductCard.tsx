import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const GradientProductCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square">
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-white/80 text-black">Premium</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm">
            <Button 
              variant="secondary"
              className="bg-white/80 hover:bg-white"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button 
              className="bg-black/80 hover:bg-black"
              onClick={handleButtonClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Gradient Collection
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">$299</p>
      </div>
    </div>
  )
}