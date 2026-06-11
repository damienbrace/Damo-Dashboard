import { FileText } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function DocumentsPage() {
  return (
    <ModulePage
      title="Documents"
      subtitle="Store receipts, paperwork, and renewal files."
      icon={FileText}
      focus="Make important files easy to find."
      items={["Uploads", "Categories", "Expiry dates", "Linked records"]}
    />
  );
}
