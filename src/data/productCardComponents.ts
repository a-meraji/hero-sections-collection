export const productCardComponents = {
  'SimpleProductCard.tsx': `import { Badge } from "@/components/ui/badge"

export const SimpleProductCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent">
      <div className="relative aspect-square">
        <img
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-2 top-2" variant="secondary">New</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-medium">Simple Product Title</h3>
        <p className="mt-1 text-sm text-muted-foreground">$79</p>
      </div>
    </div>
  )
}`,
  'ModernProductCard.tsx': `import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const ModernProductCard = () => {
  return (
    <div className="group relative rounded-xl border p-3 hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-5 top-5 bg-red-500">-20%</Badge>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Tech Brand</p>
            <h3 className="font-semibold">Smart Robot Assistant</h3>
          </div>
          <Button size="icon" variant="ghost">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm line-through text-muted-foreground">$999</p>
            <p className="text-lg font-bold">$799</p>
          </div>
          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}`,
  'LuxuryProductCard.tsx': `import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const LuxuryProductCard = () => {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80"
            alt="Product"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <Badge className="absolute left-3 top-3" variant="secondary">Limited Edition</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <div className="space-y-1">
          <h3 className="font-serif text-xl">Luxury Watch Collection</h3>
          <p className="text-sm text-muted-foreground">Premium Series 2024</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold">$1,299</p>
            <p className="text-sm text-muted-foreground">Free shipping</p>
          </div>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Purchase
          </Button>
        </div>
      </div>
    </div>
  )
}`,

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
  'ElegantInteractiveCard.tsx': `import { useState } from "react"
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
        {showButtons && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30 p-4 backdrop-blur-sm">
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
      <div className="p-4">
        <p className="text-sm font-medium text-muted-foreground">Luxury Collection</p>
        <h3 className="mt-1 font-serif text-lg">Designer Watch</h3>
        <div className="mt-2">
          <p className="text-lg font-bold">$899</p>
        </div>
      </div>
    </div>
  )
}`,
  'FeaturedProductCard.tsx': `import { Heart, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const FeaturedProductCard = () => {
  return (
    <div className="group relative rounded-xl border bg-card shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3" variant="destructive">-15% OFF</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Featured</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm">4.9</span>
            </div>
          </div>
          <h3 className="font-semibold">Premium Featured Product</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold">$169</p>
            <p className="text-sm text-muted-foreground line-through">$199</p>
          </div>
        </div>
        <Button className="mt-4 w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}`,
  'GalleryProductCard.tsx': `import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const GalleryProductCard = () => {
  const images = [
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&q=80",
    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80",
  ]

  return (
    <div className="group rounded-xl border bg-card">
      <div className="relative">
        <div className="grid aspect-square grid-cols-2 overflow-hidden">
          {images.map((image, i) => (
            <div key={i} className={i === 0 ? "col-span-2" : ""}>
              <img
                src={image}
                alt={\`Product view \${i + 1}\`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <Badge className="absolute left-3 top-3">Featured</Badge>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Tech Collection</p>
          <h3 className="font-semibold">Smart Device Bundle</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold">$399</p>
            <p className="text-sm text-muted-foreground line-through">$499</p>
          </div>
        </div>
        <Button className="mt-4 w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}`,
  'GlassProductCard.tsx': `import { useState } from "react"
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
}`,
  'GradientProductCard.tsx': `import { useState } from "react"
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
}`,
  'HoverEffectProductCard.tsx': `import { Heart, ShoppingCart } from "lucide-react"
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
}`,
  'InteractiveProductCard.tsx': `import { useState } from "react"
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
}`

};
