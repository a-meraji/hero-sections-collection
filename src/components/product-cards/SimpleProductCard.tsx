import { Badge } from "@/components/ui/badge"

export const SimpleProductCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent">
      <div className="relative aspect-square">
        <img
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-2 top-2" variant="secondary">New</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-medium">Simple Product Title</h3>
        <p className="mt-1 text-sm text-muted-foreground">$79</p>
      </div>
    </div>
  )
}