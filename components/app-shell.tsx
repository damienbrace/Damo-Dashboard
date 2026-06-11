"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Plus, SlidersHorizontal } from "lucide-react";
import { headerActions, navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type AppShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  actionLabel?: string;
  headerActionsSlot?: React.ReactNode;
};

export function AppShell({
  title,
  subtitle,
  children,
  actionLabel = "Quick Add",
  headerActionsSlot
}: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="lifeos-page">
      <div className="lifeos-frame">
        <aside className="lifeos-sidebar">
          <Link href="/home" className="lifeos-brand">
            <span className="lifeos-logo">
              <SparkMark />
            </span>
            <span>LifeOS</span>
          </Link>

          <nav className="lifeos-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const TrailingIcon = item.trailingIcon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("lifeos-nav-item", active && "lifeos-nav-item-active")}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {TrailingIcon ? <TrailingIcon className="ml-auto h-3 w-3 opacity-70" /> : null}
                </Link>
              );
            })}
          </nav>

          <div className="lifeos-profile">
            <div className="profile-avatar">D</div>
            <div className="min-w-0">
              <p>Damien</p>
              <span>View profile</span>
            </div>
            <ChevronDown className="ml-auto h-3 w-3 text-slate-400" />
          </div>
        </aside>

        <main className="lifeos-main">
          <header className="lifeos-header">
            <div>
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  className="grid h-9 w-9 place-items-center rounded-md border border-slate-800 text-slate-300"
                  title="Open navigation"
                  type="button"
                >
                  <Menu className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-white">LifeOS</span>
              </div>
              <h1>{title}</h1>
              {subtitle ? <p>{subtitle}</p> : null}
            </div>

            {headerActionsSlot ? (
              headerActionsSlot
            ) : (
              <div className="lifeos-header-actions">
                <span className="hidden text-xs text-slate-300 md:inline">Friday, 23 May 2025</span>
                {headerActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button key={action.label} className="icon-button" title={action.label} type="button">
                      <Icon className="h-4 w-4" />
                    </button>
                  );
                })}
                <button className="add-button" type="button">
                  <Plus className="h-4 w-4" />
                  <span>{actionLabel}</span>
                </button>
                <button className="icon-button" title="Display settings" type="button">
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>
            )}
          </header>

          <div className="lifeos-content">{children}</div>
        </main>
      </div>
    </div>
  );
}

function SparkMark() {
  return (
    <span className="relative block h-5 w-5 rounded-full border-[3px] border-cyan-300 border-r-blue-600">
      <span className="absolute -right-0.5 top-1 h-1.5 w-1.5 rounded-full bg-cyan-100" />
    </span>
  );
}
