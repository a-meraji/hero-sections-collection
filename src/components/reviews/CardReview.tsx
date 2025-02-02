import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const CardReview = () => {
  return (
    <Card className="p-6 max-w-md mx-auto bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Reviewer"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Verified Purchase</p>
            </div>
          </div>
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        
        <p className="text-sm">
          "I've been using this for a month now and I'm incredibly impressed.
          The attention to detail is remarkable and it has greatly improved my workflow."
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful (24)
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="w-4 h-4 mr-1" />
              Reply
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">2 days ago</span>
        </div>
      </div>
    </Card>
  )
}