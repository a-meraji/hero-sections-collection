import { Badge } from "@/components/ui/badge"

export const CompactProductCard = () => {
  return (
    <div className="group relative rounded-lg border p-2">
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&q=80"
          alt="Product"
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-4 top-4" variant="secondary">New</Badge>
      </div>
      <div className="mt-2">
        <h3 className="truncate text-sm font-medium">Compact Item Name</h3>
        <p className="text-sm text-muted-foreground">$49</p>
      </div>
    </div>
  )
}