import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function DashboardCard({ title, children, className }: DashboardCardProps) {
  return (
    <section className={cn("dashboard-card", className)}>
      <h2>{title}</h2>
      <div className="dashboard-card-body">{children}</div>
    </section>
  );
}
