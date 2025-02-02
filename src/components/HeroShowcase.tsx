import { toast } from "sonner";
import { ClipboardCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroShowcaseProps {
  components: Array<{
    component: React.ReactNode;
    name: string;
    file: string;
  }>;
  onCopyCode: (fileName: string) => void;
}

const HeroShowcase = ({ components, onCopyCode }: HeroShowcaseProps) => {
  return (
    <div className="container mx-auto space-y-32">
      {components.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -top-16 left-4 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500">{item.name}</span>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onCopyCode(item.file)}
            >
              <ClipboardCopy className="w-4 h-4" />
              Copy Code
            </Button>
          </div>
          {item.component}
        </div>
      ))}
    </div>
  );
};

export default HeroShowcase;