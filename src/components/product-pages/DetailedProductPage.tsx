import { useState } from "react"
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Check,
  Info,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

export const DetailedProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Natural")
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80",
  ]

  const colors = [
    { name: "Natural", value: "#E5D3B3" },
    { name: "Walnut", value: "#795548" },
    { name: "Ebony", value: "#3E2723" },
  ]

  const features = [
    "Handcrafted from solid wood",
    "Traditional joinery techniques",
    "Natural oil finish",
    "Adjustable height",
  ]

  const specifications = [
    { label: "Material", value: "Solid Oak" },
    { label: "Dimensions", value: "W80 x D60 x H75 cm" },
    { label: "Weight", value: "25 kg" },
    { label: "Assembly", value: "Required" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="sticky top-8 space-y-6">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src={images[mainImage]}
                alt="Product main"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-125"
              />
            </div>
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-4">
                {images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(i)}
                    className={`shrink-0 overflow-hidden rounded-lg ${
                      mainImage === i ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product view ${i + 1}`}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Artisan Collection
                </p>
                <h1 className="mt-1 text-4xl font-bold">
                  Handcrafted Dining Table
                </h1>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-4 w-4 ${isFavorite ? "fill-primary" : ""}`}
                />
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                4.8 (156 reviews)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-bold">$1,299.00</p>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $1000
                </p>
              </div>
              <Badge variant="secondary">In Stock</Badge>
            </div>

            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <p className="text-sm">Usually ships within 2-3 weeks</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <h3 className="font-medium">Wood Finish</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Colors may vary slightly due to natural wood grain</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative h-12 w-12 overflow-hidden rounded-full ${
                      selectedColor === color.name
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    }`}
                  >
                    <div
                      className="h-full w-full"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs text-white">{color.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Quantity</h3>
              <div className="flex w-32 items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>

          <Separator />

          <div className="grid gap-8">
            <div>
              <h3 className="mb-3 font-medium">Key Features</h3>
              <ul className="grid gap-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Specifications</h3>
              <div className="grid gap-4">
                {specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}