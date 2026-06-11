import { Settings } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function SettingsPage() {
  return (
    <ModulePage
      title="Settings"
      subtitle="Preferences, categories, budgets, and future AI controls."
      icon={Settings}
      focus="Keep configuration simple."
      items={["Profile", "Categories", "Budget targets", "AI preferences"]}
    />
  );
}
