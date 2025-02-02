import { Star, BarChart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const RatingReview = () => {
  const ratings = [
    { stars: 5, count: 1250, percentage: 75 },
    { stars: 4, count: 280, percentage: 18 },
    { stars: 3, count: 54, percentage: 4 },
    { stars: 2, count: 29, percentage: 2 },
    { stars: 1, count: 15, percentage: 1 },
  ]

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">4.8</h3>
        <div className="flex justify-center text-yellow-400 mb-2">
          {Array(5).fill(null).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Based on 1,628 reviews</p>
      </div>
      
      <div className="space-y-3">
        {ratings.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-4">
            <div className="flex items-center gap-1 w-20">
              <span className="text-sm">{rating.stars}</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <Progress value={rating.percentage} className="flex-1" />
            <span className="text-sm text-muted-foreground w-16 text-right">
              {rating.count}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <BarChart className="w-4 h-4" />
            Review distribution
          </span>
          <span>Last 30 days</span>
        </div>
      </div>
    </Card>
  )
}