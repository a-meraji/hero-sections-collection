import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

export const ProductCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <div className="rounded-xl overflow-hidden">
                  <div className="bg-secondary aspect-square sm:aspect-[4/3]" />
                  <div className="p-4">
                    <h3 className="font-semibold">Product {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">${(99.99 * (index + 1)).toFixed(2)}</p>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}