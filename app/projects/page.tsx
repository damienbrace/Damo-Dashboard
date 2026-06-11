import { BarChart3 } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function ProjectsPage() {
  return (
    <ModulePage
      title="Projects"
      subtitle="Track bigger efforts that tasks roll up into."
      icon={BarChart3}
      focus="Keep the next action visible."
      items={["Project list", "Progress", "Due dates", "Linked tasks"]}
    />
  );
}
