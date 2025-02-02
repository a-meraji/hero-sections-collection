import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const GlassProductCard = () => {
  const [showButtons, setShowButtons] = useState(false)

  const handleButtonClick = () => {
    setShowButtons(false)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
      onClick={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      tabIndex={0}
    >
      <div className="relative aspect-square">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Badge className="absolute left-3 top-3 bg-white/10 backdrop-blur-md border-white/20">Glass Effect</Badge>
        {showButtons && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md">
            <Button 
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30"
              onClick={handleButtonClick}
            >
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button 
              className="bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
              onClick={handleButtonClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white/90">Glass Collection</h3>
        <p className="mt-1 text-sm text-white/70">$399</p>
      </div>
    </div>
  )
}