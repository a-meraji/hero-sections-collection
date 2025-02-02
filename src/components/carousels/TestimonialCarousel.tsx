import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "This product changed my life! I can't imagine going back to my old workflow.",
    author: "Sarah Johnson",
    role: "Product Designer"
  },
  {
    quote: "The attention to detail and user experience is outstanding.",
    author: "Michael Chen",
    role: "Software Engineer"
  },
  {
    quote: "Absolutely love the simplicity and power of this solution.",
    author: "Emma Davis",
    role: "Creative Director"
  }
]

export const TestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card>
              <div className="p-6 text-center">
                <blockquote className="text-lg italic mb-4">{testimonial.quote}</blockquote>
                <footer>
                  <cite className="font-semibold block">{testimonial.author}</cite>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </footer>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}