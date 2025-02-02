import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredItems = [
  {
    title: "Summer Collection",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    badge: "New Arrival",
    description: "Explore our latest summer fashion collection"
  },
  {
    title: "Tech Gadgets",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    badge: "Best Seller",
    description: "Discover cutting-edge technology"
  },
  {
    title: "Home Decor",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    badge: "Limited Edition",
    description: "Transform your living space"
  }
]

export const FeaturedCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {featuredItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}