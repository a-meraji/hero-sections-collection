import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

export const TestimonialReview = () => {
  return (
    <Card className="relative p-8 max-w-md mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
        <div className="absolute inset-0 bg-primary/10 rounded-full" />
      </div>
      
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      
      <blockquote className="relative z-10">
        <p className="text-lg font-medium mb-4">
          "This exceeded all my expectations. The quality and attention to detail
          are unmatched. I couldn't be happier with my purchase."
        </p>
        
        <footer className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Reviewer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <cite className="font-semibold block not-italic">Michael Chen</cite>
            <span className="text-sm text-muted-foreground">Product Designer</span>
          </div>
        </footer>
      </blockquote>
    </Card>
  )
}