import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

export const GradientReview = () => {
  return (
    <Card className="max-w-md mx-auto overflow-hidden">
      <div className="relative p-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-12 h-12" />
        </div>
        
        <div className="relative z-10">
          <div className="flex text-yellow-300 mb-4">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl font-medium mb-6">
            "This product has transformed how I work. The design is stunning
            and the functionality is unmatched. Absolutely worth every penny!"
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-lg font-semibold">JD</span>
            </div>
            <div>
              <cite className="font-medium block not-italic">Jessica Davis</cite>
              <span className="text-sm opacity-80">Creative Director</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 translate-y-20 blur-2xl" />
      </div>
    </Card>
  )
}