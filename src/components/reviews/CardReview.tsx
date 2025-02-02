import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const CardReview = () => {
  return (
    <Card className="p-4 sm:p-6 max-w-[320px] sm:max-w-md mx-auto bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Reviewer"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Verified Purchase</p>
            </div>
          </div>
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            ))}
          </div>
        </div>
        
        <p className="text-xs sm:text-sm">
          "I've been using this for a month now and I'm incredibly impressed.
          The attention to detail is remarkable and it has greatly improved my workflow."
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t gap-3 sm:gap-0">
          <div className="flex gap-2 sm:gap-4">
            <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-4">
              <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm">Helpful (24)</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-4">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm">Reply</span>
            </Button>
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">2 days ago</span>
        </div>
      </div>
    </Card>
  )
}