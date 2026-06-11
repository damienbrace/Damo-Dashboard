import { BriefcaseBusiness } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function BusinessPage() {
  return (
    <ModulePage
      title="Business"
      subtitle="Track leads, quotes, jobs, and follow-ups."
      icon={BriefcaseBusiness}
      focus="Keep small business opportunities moving."
      items={["Leads", "Quotes", "Jobs", "Follow-ups"]}
    />
  );
}
