import { Star, Check, ThumbsUp, ThumbsDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const ProductReview = () => {
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="p-6">
        <div className="flex items-start gap-6">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Premium Wireless Headphones</h3>
                <p className="text-sm text-muted-foreground">Reviewed by Emma Davis</p>
              </div>
              <div className="flex text-yellow-400">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">Verified Purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">Used for 3+ months</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <p>
            "These headphones are absolutely amazing! The sound quality is crystal clear,
            and the noise cancellation works perfectly. Battery life is impressive,
            lasting well over 20 hours on a single charge."
          </p>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful (156)
            </Button>
            <Button variant="outline" size="sm">
              <ThumbsDown className="w-4 h-4 mr-1" />
              Not Helpful (3)
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}