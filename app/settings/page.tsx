import { CheckCircle2, Database, KeyRound, Settings, XCircle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { checkSupabaseConnection } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await checkSupabaseConnection();
  const StatusIcon = supabase.ok ? CheckCircle2 : XCircle;

  return (
    <AppShell title="Settings" subtitle="Preferences, services, and future AI controls." actionLabel="Add">
      <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <section className="soft-panel rounded-lg p-5">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-cyan-300 text-slate-950">
            <Settings className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-white">Keep configuration simple.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Manage the app foundation here before connecting deeper workflows.
          </p>
        </section>

        <section className="soft-panel rounded-lg p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-white">Service Connections</h2>
              <p className="mt-2 text-sm text-slate-400">Supabase powers the database and future authentication layer.</p>
            </div>
            <span
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                supabase.ok
                  ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300"
                  : "border-amber-400/35 bg-amber-400/10 text-amber-300"
              ].join(" ")}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {supabase.ok ? "Connected" : supabase.configured ? "Check failed" : "Not configured"}
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-slate-700/40 bg-slate-950/45 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                <Database className="h-4 w-4 text-cyan-300" />
                Supabase URL
              </div>
              <p className="mt-2 text-xs text-slate-400">
                {supabase.configured ? "Environment variable found." : "Add NEXT_PUBLIC_SUPABASE_URL."}
              </p>
            </div>

            <div className="rounded-md border border-slate-700/40 bg-slate-950/45 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                <KeyRound className="h-4 w-4 text-cyan-300" />
                Anon Key
              </div>
              <p className="mt-2 text-xs text-slate-400">
                {supabase.configured ? "Environment variable found." : "Add NEXT_PUBLIC_SUPABASE_ANON_KEY."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
