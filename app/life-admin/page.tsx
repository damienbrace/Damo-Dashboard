import { CalendarDays } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function LifeAdminPage() {
  return (
    <ModulePage
      title="Life Admin"
      subtitle="Bills, renewals, rego, tax, and important due dates."
      icon={CalendarDays}
      focus="Stop important dates slipping past."
      items={["Due reminders", "Renewals", "Maintenance", "Linked documents"]}
    />
  );
}
