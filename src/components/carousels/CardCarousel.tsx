import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cards = [
  {
    title: "Premium Plan",
    price: "$99/mo",
    features: ["Unlimited access", "24/7 support", "Custom branding"]
  },
  {
    title: "Team Plan",
    price: "$199/mo",
    features: ["Everything in Premium", "Team collaboration", "Advanced analytics"]
  },
  {
    title: "Enterprise Plan",
    price: "Custom",
    features: ["Everything in Team", "Custom integration", "Dedicated support"]
  }
]

export const CardCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="basis-full md:basis-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{card.price}</div>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}