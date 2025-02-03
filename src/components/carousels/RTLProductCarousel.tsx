import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"

const products = [
  {
    title: "پوشک کودک مولفیکس مدل",
    price: "۲۰۷,۰۰۰",
    discount: "10%",
    image: "/lovable-uploads/e88d7b7b-2c6e-4b4a-87d6-504146fe8de9.png"
  },
  {
    title: "مایع لباسشویی احیا کننده",
    price: "۹۳,۲۰۰",
    discount: "25%",
    image: "/lovable-uploads/e88d7b7b-2c6e-4b4a-87d6-504146fe8de9.png"
  },
  {
    title: "کیسه فریزر آرتی پلاست",
    price: "۹۶,۰۰۰",
    discount: "30%",
    image: "/lovable-uploads/e88d7b7b-2c6e-4b4a-87d6-504146fe8de9.png"
  }
]

export const RTLProductCarousel = () => {
  const isMobile = useIsMobile()
  
  return (
    <div className="bg-[#FF1744] p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4 text-white">
        <h2 className="text-xl font-bold">پیشنهاد شگفت انگیز</h2>
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