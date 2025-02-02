import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const MinimalReview = () => {
  return (
    <Card className="p-4 sm:p-6 max-w-[320px] sm:max-w-md mx-auto bg-white dark:bg-gray-950">
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">1 week ago</span>
        </div>
        
        <blockquote className="text-sm sm:text-lg font-light leading-relaxed">
          "Minimalist design meets maximum functionality. This product has
          simplified my daily routine in ways I never expected."
        </blockquote>
        
        <Separator />
        
        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-medium text-primary">RT</span>
            </div>
            <span className="text-sm sm:text-base font-medium">Rachel Thompson</span>
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">Product Designer</span>
        </footer>
      </div>
    </Card>
  )
}