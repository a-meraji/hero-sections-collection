export const techProductPage = `
import { useState } from "react"
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Check,
  Shield,
  Truck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const TechProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
  ]

  const features = [
    "High-resolution display",
    "Long-lasting battery life",
    "Fast charging",
    "Lightweight design",
  ]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={images[mainImage]}
              alt="Product main"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={\`overflow-hidden \${
                  mainImage === i ? "ring-2 ring-primary" : ""
                }\`}
              >
                <img
                  src={image}
                  alt={\`Product view \${i + 1}\`}
                  className="aspect-[3/4] object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-4xl">Tech Gadget 2024</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              The latest in technology
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-light">$999.00</p>
            <p className="text-sm text-muted-foreground">
              Including complimentary shipping & returns
            </p>
          </div>

          <Separator className="bg-muted/50" />

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium">Features</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 rounded-full" size="lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={\`h-4 w-4 \${isFavorite ? "fill-primary" : ""}\`}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`
