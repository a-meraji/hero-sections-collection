import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export const SimpleReview = () => {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
          alt="Reviewer"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">
        "Amazing product! Exactly what I was looking for. The quality is outstanding
        and the customer service was excellent."
      </p>
    </Card>
  )
}