import { Star, Check, ThumbsUp, ThumbsDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const ProductReview = () => {
  return (
    <Card className="max-w-[320px] sm:max-w-xl mx-auto">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
            alt="Product"
            className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Premium Wireless Headphones</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Reviewed by Emma Davis</p>
              </div>
              <div className="flex text-yellow-400">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm">Verified Purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm">Used for 3+ months</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-4 sm:my-6" />
        
        <div className="space-y-4">
          <p className="text-xs sm:text-sm">
            "These headphones are absolutely amazing! The sound quality is crystal clear,
            and the noise cancellation works perfectly. Battery life is impressive,
            lasting well over 20 hours on a single charge."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Helpful (156)
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Not Helpful (3)
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}