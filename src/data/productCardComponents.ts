export const productCardComponents = {
  'BorderlessProductCard.tsx': `import { useState } from "react"
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
}`,
  'CompactProductCard.tsx': `import { Badge } from "@/components/ui/badge"

export const CompactProductCard = () => {
  return (
    <div className="group relative rounded-lg border p-2">
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-4 top-4" variant="secondary">New</Badge>
      </div>
      <div className="mt-2">
        <h3 className="truncate text-sm font-medium">Compact Item Name</h3>
        <p className="text-sm text-muted-foreground">$49</p>
      </div>
    </div>
  )
}`,
  'DetailedProductCard.tsx': `import { Heart, ShoppingCart, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const DetailedProductCard = () => {
  return (
    <div className="rounded-xl border bg-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
        <Badge className="absolute left-3 top-3" variant="destructive">Sale</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Gourmet Brand</p>
            <Badge variant="secondary">In Stock</Badge>
          </div>
          <h3 className="font-semibold">Premium Food Collection</h3>
          <div className="flex gap-2">
            <Badge variant="outline">Organic</Badge>
            <Badge variant="outline">Vegan</Badge>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">$89</p>
            <p className="text-sm text-muted-foreground line-through">$129</p>
            <Badge variant="secondary">-30%</Badge>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4" /> Free shipping
            </div>
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}`
  // Add other component strings as needed
};