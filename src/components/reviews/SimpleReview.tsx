import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export const SimpleReview = () => {
  return (
    <Card className="p-4 sm:p-6 max-w-[320px] sm:max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
          alt="Reviewer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">
        "Amazing product! Exactly what I was looking for. The quality is outstanding
        and the customer service was excellent."
      </p>
    </Card>
  )
}