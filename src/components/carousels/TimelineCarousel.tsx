import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Our journey began with a simple idea"
  },
  {
    year: "2021",
    title: "First Major Release",
    description: "Launched our flagship product"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in 3 new countries"
  },
  {
    year: "2023",
    title: "Award Winner",
    description: "Recognized as industry leader"
  }
]

export const TimelineCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto px-4 md:px-0">
      <CarouselContent>
        {timelineEvents.map((event, index) => (
          <CarouselItem key={index} className="basis-full">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold">{event.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-center">{event.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}