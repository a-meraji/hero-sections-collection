import { Heart, ShoppingCart } from "lucide-react"
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
                alt={`Product view ${i + 1}`}
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
}