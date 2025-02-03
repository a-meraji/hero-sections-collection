import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

const products = [
  {
    title: "پوشک کودک مولفیکس مدل",
    price: "۲۰۷,۰۰۰",
    discount: "10%",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "مایع لباسشویی احیا کننده",
    price: "۹۳,۲۰۰",
    discount: "25%",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "کیسه فریزر آرتی پلاست",
    price: "۹۶,۰۰۰",
    discount: "30%",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
]

export const RTLProductCarousel = () => {
  const isMobile = useIsMobile()
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="bg-[#FF1744] p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4 text-white">
        <div>
          <h2 className="text-xl font-bold">پیشنهاد شگفت انگیز</h2>
          <div className="flex gap-2 mt-2 text-sm">
            <span>{String(timeLeft.hours).padStart(2, '0')}:</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}:</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
        <button className="text-sm">مشاهده همه</button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: "rtl",
          slidesToScroll: isMobile ? 1 : 3,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {products.map((product, index) => (
            <CarouselItem key={index} className={isMobile ? "pl-1 basis-full" : "pl-1 basis-1/3"}>
              <Card className="border-0">
                <CardContent className="p-2">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Badge 
                      className="absolute top-2 right-2 bg-red-500 text-white"
                      variant="secondary"
                    >
                      {product.discount}
                    </Badge>
                  </div>
                  <div className="mt-2 text-right">
                    <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                    <p className="text-lg font-bold mt-1">{product.price} تومان</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}