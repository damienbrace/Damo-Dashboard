import { ShoppingCart } from "lucide-react";
import { ModulePage } from "@/components/module-page";

export default function GroceriesPage() {
  return (
    <ModulePage
      title="Groceries"
      subtitle="Plan shops, reduce takeaway, and keep pantry notes."
      icon={ShoppingCart}
      focus="Make the weekly shop easier."
      items={["Grocery list", "Pantry items", "Meal notes", "Budget target"]}
    />
  );
}
