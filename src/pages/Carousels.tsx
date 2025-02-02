import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { toast } from "sonner"
import { Copy } from "lucide-react"

const Carousels = () => {
  const copyCode = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      navigator.clipboard.writeText(element.innerText)
      toast.success("Code copied to clipboard!")
    }
  }

  return (
    <div className="container py-10 space-y-20">
      {/* Basic Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Basic Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('basic-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="basic-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel>
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
        </pre>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Full Width Image Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Full Width Image Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('full-width-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="full-width-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel className="w-full">
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
        </pre>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <img 
                  src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&w=1200&h=500`} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Multiple Items Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Multiple Items Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('multiple-items-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="multiple-items-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent className="-ml-1">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
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
        </pre>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Product Showcase Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Product Showcase Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('product-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="product-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel
  opts={{
    align: "start",
  }}
  className="w-full"
>
  <CarouselContent>
    {products.map((product) => (
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="p-0">
              <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        </pre>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden border">
                    <div className="bg-secondary aspect-[4/3]" />
                    <div className="p-4">
                      <h3 className="font-semibold">Product {index + 1}</h3>
                      <p className="text-sm text-muted-foreground">${(99.99 * (index + 1)).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonial Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Testimonial Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('testimonial-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="testimonial-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel
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
        </pre>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="rounded-xl border p-6 text-center">
                    <blockquote className="text-lg italic">"This product changed my life! I can't imagine going back to my old workflow."</blockquote>
                    <footer className="mt-4">
                      <cite className="font-semibold">Customer {index + 1}</cite>
                    </footer>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* API Carousel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">API Reference Carousel</h2>
          <Button variant="outline" size="sm" onClick={() => copyCode('api-carousel')}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
        <pre id="api-carousel" className="bg-muted p-4 rounded-lg">
          {`<Carousel>
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardHeader>
          <CardTitle>Carousel</CardTitle>
        </CardHeader>
        <CardContent>
          <p><code>orientation?: "horizontal" | "vertical"</code></p>
          <p><code>opts?: CarouselOptions</code></p>
          <p><code>plugins?: CarouselPlugin</code></p>
          <p><code>setApi?: (api: CarouselApi) => void</code></p>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
</Carousel>`}
        </pre>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="rounded-xl border">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Carousel</h3>
                    <div className="space-y-2 text-sm">
                      <p><code>orientation?: "horizontal" | "vertical"</code></p>
                      <p><code>opts?: CarouselOptions</code></p>
                      <p><code>plugins?: CarouselPlugin</code></p>
                      <p><code>setApi?: (api: CarouselApi) => void</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

export default Carousels
