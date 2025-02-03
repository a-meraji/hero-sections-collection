import { CodeExampleBlock } from "@/components/carousels/CodeExampleBlock"
import { BasicCarousel } from "@/components/carousels/BasicCarousel"
import { FullWidthCarousel } from "@/components/carousels/FullWidthCarousel"
import { MultipleItemsCarousel } from "@/components/carousels/MultipleItemsCarousel"
import { ProductCarousel } from "@/components/carousels/ProductCarousel"
import { TestimonialCarousel } from "@/components/carousels/TestimonialCarousel"
import { ImageGalleryCarousel } from "@/components/carousels/ImageGalleryCarousel"
import { CardCarousel } from "@/components/carousels/CardCarousel"
import { VerticalCarousel } from "@/components/carousels/VerticalCarousel"
import { TimelineCarousel } from "@/components/carousels/TimelineCarousel"
import { FeaturedCarousel } from "@/components/carousels/FeaturedCarousel"
import { RTLProductCarousel } from "@/components/carousels/RTLProductCarousel"

const Carousels = () => {
  return (
    <div className="container py-10 space-y-20">
      <CodeExampleBlock
        title="RTL Product Carousel"
        component={<RTLProductCarousel />}
        code={`<RTLProductCarousel />`}
      >
        <RTLProductCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Basic Carousel"
        component={<BasicCarousel />}
        code={`<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{item.title}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <BasicCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Full Width Image Carousel"
        component={<FullWidthCarousel />}
        code={`<Carousel className="w-full">
  <CarouselContent>
    {images.map((image) => (
      <CarouselItem key={image.id}>
        <img src={image.url} alt={image.alt} className="w-full h-[500px] object-cover" />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <FullWidthCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Multiple Items Carousel"
        component={<MultipleItemsCarousel />}
        code={`<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent className="-ml-1">
    {items.map((item) => (
      <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-3xl font-semibold">{item.title}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <MultipleItemsCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Product Showcase Carousel"
        component={<ProductCarousel />}
        code={`<Carousel
  opts={{
    align: "start",
  }}
  className="w-full"
>
  <CarouselContent>
    {products.map((product) => (
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <Card>
          <CardContent className="p-0">
            <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.price}</p>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <ProductCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Testimonial Carousel"
        component={<TestimonialCarousel />}
        code={`<Carousel
  opts={{
    align: "center",
  }}
  className="w-full max-w-xl mx-auto"
>
  <CarouselContent>
    {testimonials.map((testimonial) => (
      <CarouselItem>
        <Card>
          <CardContent className="p-6 text-center">
            <blockquote className="text-lg italic">{testimonial.quote}</blockquote>
            <footer className="mt-4">
              <cite className="font-semibold">{testimonial.author}</cite>
            </footer>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <TestimonialCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Image Gallery Carousel"
        component={<ImageGalleryCarousel />}
        code={`<Carousel className="w-full" onSelect={(index) => setCurrentIndex(index)}>
  <CarouselContent>
    {images.map((image) => (
      <CarouselItem>
        <Card className="overflow-hidden">
          <img 
            src={image.url}
            alt={image.title}
            className="w-full h-[400px] object-cover"
          />
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <ImageGalleryCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Card Carousel"
        component={<CardCarousel />}
        code={`<Carousel
  opts={{
    align: "center",
  }}
  className="w-full max-w-sm mx-auto"
>
  <CarouselContent>
    {cards.map((card) => (
      <CarouselItem>
        <Card>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{card.price}</div>
            <ul className="space-y-2">
              {card.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <CardCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Vertical Carousel"
        component={<VerticalCarousel />}
        code={`<Carousel
  opts={{
    align: "start",
  }}
  orientation="vertical"
  className="w-full max-w-xs h-[400px]"
>
  <CarouselContent className="-mt-1 h-[400px]">
    {items.map((item) => (
      <CarouselItem className="pt-1 md:basis-1/2">
        <Card className="flex items-center justify-center h-[150px]">
          <span className="text-3xl font-semibold">{item.title}</span>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <VerticalCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Timeline Carousel"
        component={<TimelineCarousel />}
        code={`<Carousel className="w-full max-w-4xl mx-auto">
  <CarouselContent>
    {timelineEvents.map((event) => (
      <CarouselItem>
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">{event.year}</span>
            </div>
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <TimelineCarousel />
      </CodeExampleBlock>

      <CodeExampleBlock
        title="Featured Carousel"
        component={<FeaturedCarousel />}
        code={`<Carousel className="w-full">
  <CarouselContent>
    {featuredItems.map((item) => (
      <CarouselItem>
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
          <CardContent>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <FeaturedCarousel />
      </CodeExampleBlock>
    </div>
  )
}

export default Carousels
