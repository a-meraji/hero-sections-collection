import { useState } from "react"
import { Heart, ShoppingCart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const FullscreenProductPage = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative min-h-[50vh] md:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80"
            alt="Product"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative flex items-center bg-black p-4 text-white sm:p-6 md:p-8">
          <div className="mx-auto max-w-xl space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Limited Edition</h1>
              <p className="mt-4 text-base text-gray-400 sm:text-lg">
                Experience the future of footwear with our latest innovation in
                comfort and style.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-light sm:text-4xl">$299.00</p>
              <p className="text-sm text-gray-400">
                Limited time offer - Free shipping worldwide
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-white text-black hover:bg-gray-100"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 border-white text-white hover:bg-white/20"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-white" : ""}`}
                  />
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full justify-between text-white hover:bg-white/20"
              >
                View Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-2 sm:gap-8 sm:pt-8">
              <div>
                <h3 className="font-medium">Materials</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Premium leather upper with breathable mesh lining
                </p>
              </div>
              <div>
                <h3 className="font-medium">Shipping</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Free worldwide shipping and returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}