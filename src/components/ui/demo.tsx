import RoundedTooltipDemo from "@/components/ui/rounded-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DemoOne() {
  return (
    <TooltipProvider>
      <RoundedTooltipDemo />
    </TooltipProvider>
  );
}
