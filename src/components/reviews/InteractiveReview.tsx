import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, MessageSquare, Flag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export const InteractiveReview = () => {
  const [isReplying, setIsReplying] = useState(false)
  const [helpfulCount, setHelpfulCount] = useState(42)
  const [unhelpfulCount, setUnhelpfulCount] = useState(3)
  const [hasVoted, setHasVoted] = useState(false)

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(prev => prev + 1)
      setHasVoted(true)
    }
  }

  const handleUnhelpful = () => {
    if (!hasVoted) {
      setUnhelpfulCount(prev => prev + 1)
      setHasVoted(true)
    }
  }

  return (
    <Card className="max-w-[320px] sm:max-w-xl mx-auto">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            alt="Reviewer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Sophie Anderson</h3>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">3 days ago</span>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="p-1">
                <Flag className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              "I've tried many similar products, but this one stands out.
              The quality is exceptional and the customer support team was
              incredibly helpful when I had questions. Highly recommend!"
            </p>
            
            <div className="mt-4 flex flex-wrap items-start gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleHelpful}
                disabled={hasVoted}
                className="h-8 px-2 sm:px-4"
              >
                <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${hasVoted ? 'fill-primary' : ''}`} />
                <span className="text-xs sm:text-sm">Helpful ({helpfulCount})</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleUnhelpful}
                disabled={hasVoted}
                className="h-8 px-2 sm:px-4"
              >
                <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="text-xs sm:text-sm">Not Helpful ({unhelpfulCount})</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsReplying(!isReplying)}
                className="h-8 px-2 sm:px-4"
              >
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="text-xs sm:text-sm">Reply</span>
              </Button>
            </div>
            
            {isReplying && (
              <div className="mt-4 space-y-4">
                <Textarea
                  placeholder="Write your reply..."
                  className="w-full text-sm"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsReplying(false)}
                    className="text-xs sm:text-sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}