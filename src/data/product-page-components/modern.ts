export const modernProductPage = `import { useState } from "react"
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
}`
