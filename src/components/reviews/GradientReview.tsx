import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

export const GradientReview = () => {
  return (
    <Card className="max-w-[320px] sm:max-w-md mx-auto overflow-hidden">
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        
        <div className="relative z-10">
          <div className="flex text-yellow-300 mb-4">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-base sm:text-xl font-medium mb-6">
            "This product has transformed how I work. The design is stunning
            and the functionality is unmatched. Absolutely worth every penny!"
          </blockquote>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-base sm:text-lg font-semibold">JD</span>
            </div>
            <div>
              <cite className="text-sm sm:text-base font-medium block not-italic">Jessica Davis</cite>
              <span className="text-xs sm:text-sm opacity-80">Creative Director</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full transform translate-x-16 translate-y-16 blur-2xl" />
      </div>
    </Card>
  )
}