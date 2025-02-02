export const techProductPage = `import { useState } from "react"
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
  const [selectedStorage, setSelectedStorage] = useState("256GB")
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&q=80",
    "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&q=80",
    "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&q=80",
  ]

  const storageOptions = [
    { size: "128GB", price: 999 },
    { size: "256GB", price: 1099 },
    { size: "512GB", price: 1299 },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="sticky top-8 space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
            <img
              src={images[mainImage]}
              alt="Product main"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`overflow-hidden rounded-xl ${
                  mainImage === i ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${i + 1}`}
                  className="aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="secondary">New Release</Badge>
                <h1 className="mt-2 text-4xl font-bold">
                  Pro Drone with 4K Camera
                </h1>
                <p className="mt-1 text-xl text-muted-foreground">
                  Professional Series
                </p>
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
                4.9 (2,389 reviews)
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-xl bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-sm">2-year warranty included</p>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <p className="text-sm">Free shipping & 30-day returns</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary" />
              <p className="text-sm">In stock - ships within 24 hours</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Storage Capacity</h3>
            <div className="grid gap-3">
              {storageOptions.map((option) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedStorage(option.size)}
                  className={`flex items-center justify-between rounded-lg border p-4 ${
                    selectedStorage === option.size
                      ? "border-primary bg-primary/5"
                      : "border-input hover:bg-accent"
                  }`}
                >
                  <span className="font-medium">{option.size}</span>
                  <span>${option.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Quantity</h3>
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

          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-2xl font-bold">
                  $
                  {
                    storageOptions.find(
                      (option) => option.size === selectedStorage
                    )?.price
                  }
                </p>
                <p className="text-sm text-muted-foreground">
                  Free shipping included
                </p>
              </div>
              <Button size="lg" className="px-8">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>

          <Separator />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Experience aerial photography like never before with our
                  professional-grade drone. Equipped with a 4K camera and advanced
                  stabilization technology, capture stunning footage from new
                  heights.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="specifications">
              <AccordionTrigger>Technical Specifications</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>4K Camera with 3-axis gimbal</li>
                  <li>30 minutes flight time</li>
                  <li>10km transmission range</li>
                  <li>Obstacle avoidance system</li>
                  <li>GPS positioning</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping Information</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Free express shipping on all orders. Estimated delivery: 2-3
                  business days.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}`
