import {
  BarChart3,
  Bell,
  BookOpenText,
  BriefcaseBusiness,
  Calendar,
  CalendarDays,
  CheckSquare,
  ChevronDown,
  CircleDollarSign,
  FileText,
  Grid3X3,
  House,
  type LucideIcon,
  ListChecks,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Target
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  trailingIcon?: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/home", label: "Home", icon: House },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/habits", label: "Habits", icon: ListChecks },
  { href: "/journal", label: "Journal", icon: BookOpenText },
  { href: "/finance", label: "Finance", icon: CircleDollarSign },
  { href: "/groceries", label: "Groceries", icon: ShoppingCart },
  { href: "/life-admin", label: "Life Admin", icon: CalendarDays },
  { href: "/business", label: "Business", icon: BriefcaseBusiness },
  { href: "/documents", label: "Documents", icon: FileText, trailingIcon: ChevronDown },
  { href: "/projects", label: "Projects", icon: BarChart3 },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/settings", label: "Settings", icon: Settings }
];

export const headerActions = [
  { label: "Search", icon: Search },
  { label: "Focus alerts", icon: ShieldCheck },
  { label: "Notifications", icon: Bell },
  { label: "Menu", icon: Grid3X3 }
];
