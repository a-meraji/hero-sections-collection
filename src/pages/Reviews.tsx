import { HeroShowcase } from "@/components/HeroShowcase"
import { SimpleReview } from "@/components/reviews/SimpleReview"
import { CardReview } from "@/components/reviews/CardReview"
import { TestimonialReview } from "@/components/reviews/TestimonialReview"
import { ProductReview } from "@/components/reviews/ProductReview"
import { RatingReview } from "@/components/reviews/RatingReview"
import { ModernReview } from "@/components/reviews/ModernReview"
import { MinimalReview } from "@/components/reviews/MinimalReview"
import { DetailedReview } from "@/components/reviews/DetailedReview"
import { GradientReview } from "@/components/reviews/GradientReview"
import { InteractiveReview } from "@/components/reviews/InteractiveReview"
import { toast } from "sonner"

export default function Reviews() {
  const handleCopyCode = async (fileName: string) => {
    try {
      const response = await fetch(`/api/code/${fileName}`)
      const code = await response.text()
      await navigator.clipboard.writeText(code)
      toast.success("Code copied to clipboard!")
    } catch (error) {
      toast.error("Failed to copy code")
    }
  }

  const components = [
    {
      component: <SimpleReview />,
      name: "Simple Review",
      file: "SimpleReview.tsx",
    },
    {
      component: <CardReview />,
      name: "Card Review",
      file: "CardReview.tsx",
    },
    {
      component: <TestimonialReview />,
      name: "Testimonial Review",
      file: "TestimonialReview.tsx",
    },
    {
      component: <ProductReview />,
      name: "Product Review",
      file: "ProductReview.tsx",
    },
    {
      component: <RatingReview />,
      name: "Rating Review",
      file: "RatingReview.tsx",
    },
    {
      component: <ModernReview />,
      name: "Modern Review",
      file: "ModernReview.tsx",
    },
    {
      component: <MinimalReview />,
      name: "Minimal Review",
      file: "MinimalReview.tsx",
    },
    {
      component: <DetailedReview />,
      name: "Detailed Review",
      file: "DetailedReview.tsx",
    },
    {
      component: <GradientReview />,
      name: "Gradient Review",
      file: "GradientReview.tsx",
    },
    {
      component: <InteractiveReview />,
      name: "Interactive Review",
      file: "InteractiveReview.tsx",
    },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Review Components</h1>
        <p className="text-muted-foreground mb-12">
          A collection of beautiful and functional review components for your next project.
        </p>
      </div>
      <HeroShowcase components={components} onCopyCode={handleCopyCode} />
    </div>
  )
}