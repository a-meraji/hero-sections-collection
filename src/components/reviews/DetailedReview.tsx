import { Star, Check, Calendar, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const DetailedReview = () => {
  const pros = [
    "Excellent build quality",
    "Intuitive interface",
    "Great value for money",
    "Fast shipping",
  ]

  const cons = [
    "Learning curve for advanced features",
    "Limited color options",
  ]

  return (
    <Card className="max-w-[320px] sm:max-w-xl md:max-w-2xl mx-auto">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Comprehensive Review</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-400">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">5.0 / 5.0</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              March 15, 2024
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              San Francisco, CA
            </div>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground mb-6">
          "After using this product for three months, I can confidently say it's
          one of the best investments I've made. The attention to detail and
          quality of construction is immediately apparent."
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3">Pros</h4>
            <ul className="space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span className="text-xs sm:text-sm">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3">Cons</h4>
            <ul className="space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 text-red-500">-</span>
                  <span className="text-xs sm:text-sm">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop"
            alt="Reviewer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm sm:text-base font-semibold">David Wilson</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Tech Enthusiast</p>
          </div>
        </div>
      </div>
    </Card>
  )
}