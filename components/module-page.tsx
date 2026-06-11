import { LucideIcon } from "lucide-react";
import { AppShell } from "@/components/app-shell";

type ModulePageProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  focus: string;
  items: string[];
};

export function ModulePage({ title, subtitle, icon: Icon, focus, items }: ModulePageProps) {
  return (
    <AppShell title={title} subtitle={subtitle} actionLabel="Add">
      <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <section className="soft-panel rounded-lg p-5">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-cyan-300 text-slate-950">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-white">{focus}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            This page is ready for the first real workflow once the app shell and Supabase foundation are in place.
          </p>
        </section>

        <section className="soft-panel rounded-lg p-5">
          <h2 className="text-sm font-semibold text-white">MVP Building Blocks</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="rounded-md border border-slate-700/40 bg-slate-950/45 p-4">
                <p className="text-sm font-medium text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
