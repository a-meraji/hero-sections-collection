import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"
import { productPageComponents } from "@/data/productPageComponents"

interface CodeExampleBlockProps {
  title: string;
  description?: string;
  code: string;
  component: React.ReactNode;
  children?: React.ReactNode;
}

export const CodeExampleBlock = ({ title, description, code, component }: CodeExampleBlockProps) => {
  const copyCode = () => {
    // Get the actual component code from our data
    const componentCode = productPageComponents[code as keyof typeof productPageComponents]
    if (componentCode) {
      navigator.clipboard.writeText(componentCode)
      toast.success("Code copied to clipboard!")
    } else {
      toast.error("Could not find component code")
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={copyCode}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Code
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
      {component}
    </section>
  )
}