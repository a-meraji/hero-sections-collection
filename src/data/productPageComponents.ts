export const productPageComponents = {
  "MinimalProductPage.tsx": `import { useState } from "react"
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const MinimalProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavorite, setIsFavorite] = useState(false)

  const sizes = ["XS", "S", "M", "L", "XL"]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
              alt="Product main"
              className="h-[500px] w-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <img
                key={i}
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
                alt={\`Product view \${i + 1}\`}
                className="aspect-square rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-medium">Minimal Product Title</h1>
            <p className="mt-2 text-lg text-muted-foreground">Brand Name</p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold">$99.00</span>
            <Badge>Free Shipping</Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={\`h-10 w-10 rounded-full border \${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input hover:bg-accent"
                    }\`}
                  >
                    {size}
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
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">
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

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Description</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  "ModernProductPage.tsx": `import { useState } from "react"
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const ModernProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  ]

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Gray", value: "gray" },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
            <img
              src={images[mainImage]}
              alt="Product main"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={\`h-4 w-4 \${isFavorite ? "fill-primary" : ""}\`}
              />
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={\`overflow-hidden rounded-lg border-2 \${
                  mainImage === i ? "border-primary" : "border-transparent"
                }\`}
              >
                <img
                  src={image}
                  alt={\`Product view \${i + 1}\`}
                  className="aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tech Brand
                </p>
                <h1 className="mt-1 text-3xl font-bold">Modern Headphones</h1>
              </div>
              <Badge variant="secondary" className="text-lg">-20%</Badge>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold">$299.00</span>
            <span className="text-lg text-muted-foreground line-through">
              $399.00
            </span>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={\`h-8 w-8 rounded-full border-2 \${
                      selectedColor === color.value
                        ? "border-primary"
                        : "border-transparent"
                    }\`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
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
          </div>

          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex-1">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">
                Experience premium sound quality with our latest wireless
                headphones. Featuring advanced noise cancellation technology and
                premium materials for ultimate comfort during long listening
                sessions.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>Bluetooth 5.0</li>
                <li>Active Noise Cancellation</li>
                <li>40mm Dynamic Drivers</li>
                <li>Up to 30 Hours Battery Life</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <p className="text-muted-foreground">
                Free shipping on orders over $50. Estimated delivery time: 3-5
                business days.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}`,
  "LuxuryProductPage.tsx": `import { useState } from "react"
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const LuxuryProductPage = () => {
  const [mainImage, setMainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80",
  ]

  const sizes = ["S", "M", "L"]

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid gap-12 lg:grid-cols-2">
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
            <Badge variant="secondary" className="mb-4">
              Limited Edition
            </Badge>
            <h1 className="font-serif text-4xl">Luxury Watch Collection</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Premium Series 2024
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-light">$1,299.00</p>
            <p className="text-sm text-muted-foreground">
              Including complimentary shipping & returns
            </p>
          </div>

          <Separator className="bg-muted/50" />

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium">Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={\`h-12 w-12 rounded-full border \${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input hover:bg-accent"
                    }\`}
                  >
                    {size}
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
                <span className="w-12 text-center font-light">{quantity}</span>
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

          <div className="flex gap-4">
            <Button className="flex-1 rounded-full" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={\`h-4 w-4 \${isFavorite ? "fill-primary" : ""}\`}
              />
            </Button>
          </div>

          <Separator className="bg-muted/50" />

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="mt-2 text-muted-foreground">
                Crafted with precision and elegance, our luxury timepiece
                collection represents the pinnacle of watchmaking artistry.
                Featuring Swiss-made movement and premium materials, each piece is
                a testament to timeless sophistication.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Details</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Swiss-made automatic movement</li>
                <li>Sapphire crystal glass</li>
                <li>Water-resistant to 100m</li>
                <li>Premium leather strap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  "TechProductPage.tsx": `import { useState } from "react"
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
                className={\`overflow-hidden rounded-xl \${
                  mainImage === i ? "ring-2 ring-primary" : ""
                }\`}
              >
                <img
                  src={image}
                  alt={\`Product view \${i + 1}\`}
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
                  className={\`h-4 w-4 \${isFavorite ? "fill-primary" : ""}\`}
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
                  className={\`flex items-center justify-between rounded-lg border p-4 \${
                    selectedStorage === option.size
                      ? "border-primary bg-primary/5"
                      : "border-input hover:bg-accent"
                  }\`}
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
}`,
  "DetailedProductPage.tsx": `import { Heart, ShoppingCart, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const DetailedProductPage = () => {
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
}