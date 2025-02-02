import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    title: "Autumn Collection",
    subtitle: "2024"
  },
  {
    bg: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Summer Elegance",
    subtitle: "2024"
  },
  {
    bg: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    title: "Winter Luxe",
    subtitle: "2024"
  }
];

const LuxuryFashionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex h-full items-center justify-center text-white">
            <div className="text-center">
              <h1 className="mb-4 text-6xl font-bold tracking-tight">{slide.title}</h1>
              <p className="text-2xl font-light">{slide.subtitle}</p>
              <button className="mt-8 border border-white px-8 py-3 text-lg transition-colors hover:bg-white hover:text-black">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LuxuryFashionHero;