import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "photo-1509316975850-ff9c5deb0cd9",
  "photo-1482938289607-e9573fc25ebb",
  "photo-1500375592092-40eb2168fd21"
]

export const FullWidthCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((imageId, index) => (
          <CarouselItem key={index}>
            <img 
              src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1200&h=500`}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}