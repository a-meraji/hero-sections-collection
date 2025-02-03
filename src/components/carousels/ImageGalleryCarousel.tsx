import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"

const images = [
  {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    title: "Pine Forest",
    description: "Majestic pine trees in the wilderness"
  },
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Mountain River",
    description: "Serene river flowing between mountains"
  },
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Ocean Wave",
    description: "Powerful waves crashing on the beach"
  }
]

export const ImageGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  const handleSelect = () => {
    if (!api) return
    setCurrentIndex(api.selectedScrollSnap())
  }

  return (
    <div className="space-y-4">
      <Carousel 
        className="w-full" 
        onSelect={handleSelect}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <Card className="overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-56 sm:h-[400px] object-cover"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="text-center">
        <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
        <p className="text-muted-foreground">{images[currentIndex].description}</p>
      </div>
    </div>
  )
}