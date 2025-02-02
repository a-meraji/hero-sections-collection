import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const MinimalProductCard = () => {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-2 top-2" variant="secondary">New</Badge>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium">Minimal Desk Setup</h3>
          <p className="text-sm text-muted-foreground">$299</p>
        </div>
        <Button size="icon" variant="ghost">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}