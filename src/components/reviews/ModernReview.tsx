import { Star, ThumbsUp, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const ModernReview = () => {
  return (
    <Card className="max-w-md mx-auto overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Featured Review</h3>
          <div className="flex text-yellow-300">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        
        <blockquote className="text-lg font-medium">
          "A game-changing product that revolutionized my workflow!"
        </blockquote>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            alt="Reviewer"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600"
          />
          <div>
            <h4 className="font-semibold">Alex Thompson</h4>
            <p className="text-sm text-muted-foreground">Senior Developer</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">
          "The attention to detail and the user experience is outstanding.
          I've been using it daily for the past month and can't imagine
          going back to my old workflow."
        </p>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm">
            <ThumbsUp className="w-4 h-4 mr-1" />
            Helpful (89)
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  )
}