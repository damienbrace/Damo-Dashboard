import { Target } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function GoalsPage() {
  return (
    <ModulePage
      title="Goals"
      subtitle="Connect bigger life direction to daily actions."
      icon={Target}
      focus="Turn goals into visible next steps."
      items={["Yearly goals", "Quarterly goals", "Milestones", "Linked tasks"]}
    />
  );
}
