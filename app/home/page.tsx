import {
  Bell,
  BookOpenText,
  CalendarDays,
  CalendarClock,
  Check,
  Clock,
  Dumbbell,
  FileText,
  ForkKnife,
  Phone,
  Plus,
  ReceiptText,
  Shield,
  Sunrise,
  WalletCards
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { DashboardCard } from "@/components/dashboard-card";

const habitStats = [
  { value: "7", label: "Workout", icon: Check },
  { value: "5", label: "Read", icon: BookOpenText },
  { value: "3", label: "Journal", icon: FileText },
  { value: "6", label: "No Alcohol", icon: Shield }
];

const reminders = [
  { label: "Car Insurance", date: "25 May" },
  { label: "Domain Renewal", date: "2 Jun" },
  { label: "BAS Due", date: "28 Jun" }
];

const todayItems = [
  { time: "9:00 AM", title: "Project sync", detail: "Google Meet", label: "Work", tone: "work" },
  { time: "12:00 PM", title: "Lunch with Sam", detail: "Personal", label: "Personal", tone: "personal" },
  { time: "3:00 PM", title: "Track expenses", detail: "Finance", label: "Finance", tone: "finance" },
  { time: "5:00 PM", title: "Review goals", detail: "Plans", label: "Personal", tone: "personal" },
  { time: "7:00 PM", title: "Read", detail: "Habit", label: "Habit", tone: "habit" }
];

const tomorrowItems = [
  { time: "6:00 AM", title: "Gym", detail: "Habit", label: "Health", tone: "health", icon: Dumbbell },
  { time: "10:00 AM", title: "Call electrician", detail: "Home", label: "Life Admin", tone: "admin", icon: Phone },
  { time: "1:00 PM", title: "Lunch", detail: "Personal", label: "Personal", tone: "personal", icon: ForkKnife },
  { time: "4:00 PM", title: "Deliver report", detail: "Work", label: "Work", tone: "work", icon: FileText }
];

export default function HomePage() {
  return (
    <AppShell
      title="Good evening, Damien"
      subtitle="Focus on what matters."
      actionLabel="Quick Add"
    >
      <div className="home-dashboard">
        <DashboardCard title="Today's Focus" className="focus-card">
          <div className="focus-title">Build LifeOS MVP</div>
          <div className="progress-copy">2/3 tasks completed</div>
          <div className="progress-row">
            <div className="progress-track">
              <div className="progress-fill" />
            </div>
            <span>67%</span>
          </div>
        </DashboardCard>

        <DashboardCard title="Tasks Today" className="tasks-card">
          <div className="mini-plus">+3</div>
          <div className="task-counts">
            <div>
              <strong>4</strong>
              <span>pending</span>
            </div>
            <div>
              <strong>2</strong>
              <span>done</span>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Habit Streaks" className="habits-card">
          <div className="habit-row">
            {habitStats.map((habit) => {
              const Icon = habit.icon;
              return (
                <div className="habit-pill" key={habit.label}>
                  <span className="habit-icon">
                    <Icon className="h-4 w-4" />
                  </span>
                  <strong>{habit.value}</strong>
                  <span>{habit.label}</span>
                </div>
              );
            })}
          </div>
        </DashboardCard>

        <DashboardCard title="This Week's Spending" className="spending-card">
          <div className="money-total">$342.52</div>
          <p>of $600 budget</p>
          <div className="line-chart" aria-hidden="true">
            <svg viewBox="0 0 360 120" role="img">
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.28)" />
                  <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0 100 C22 52 38 116 62 76 C84 38 105 33 126 72 C144 98 168 48 190 66 C216 88 232 52 252 34 C278 0 292 55 320 30 C338 15 348 24 360 18 L360 120 L0 120 Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0 100 C22 52 38 116 62 76 C84 38 105 33 126 72 C144 98 168 48 190 66 C216 88 232 52 252 34 C278 0 292 55 320 30 C338 15 348 24 360 18"
                fill="none"
                stroke="#22d3ee"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="trend">+ 12% vs last week</div>
        </DashboardCard>

        <DashboardCard title="Upcoming Reminders" className="reminders-card">
          <div className="reminder-list">
            {reminders.map((reminder) => (
              <div className="reminder-item" key={reminder.label}>
                <CalendarClock className="h-4 w-4" />
                <span>{reminder.label}</span>
                <time>{reminder.date}</time>
              </div>
            ))}
            <button className="view-link" type="button">View all</button>
          </div>
        </DashboardCard>

        <section className="upcoming-card">
          <header className="upcoming-card-header">
            <div className="upcoming-title-block">
              <span className="upcoming-icon-box">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div>
                <h2>Upcoming</h2>
                <p>Your day at a glance</p>
              </div>
            </div>
            <button type="button">
              View Calendar
              <span>→</span>
            </button>
          </header>

          <div className="upcoming-columns">
            <UpcomingList
              actionLabel="Add Task"
              count={5}
              date="Tue, 20 May"
              icon="sun"
              items={todayItems}
              title="Today"
            />
            <UpcomingList
              actionLabel="Add Event"
              count={4}
              date="Wed, 21 May"
              icon="sunrise"
              items={tomorrowItems}
              title="Tomorrow"
            />
          </div>

          <div className="upcoming-stats">
            <UpcomingStat icon={Check} main="3" label="Tasks due today" detail="2 completed" />
            <UpcomingStat icon={CalendarDays} main="5" label="Events today" detail="1 all-day" />
            <UpcomingStat icon={Clock} main="2h 30m" label="Focus time" detail="Scheduled" />
          </div>
        </section>

        <DashboardCard title="Quick Add" className="quick-card">
          <div className="quick-grid">
            <QuickAdd icon={ReceiptText} label="Task" />
            <QuickAdd icon={Bell} label="Reminder" />
            <QuickAdd icon={FileText} label="Note" />
            <QuickAdd icon={WalletCards} label="Expense" />
          </div>
        </DashboardCard>

        <DashboardCard title="Brain Dump" className="brain-card">
          <div className="brain-entry">
            <span>Dump anything here...</span>
            <button type="button" title="Add brain dump item">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </DashboardCard>
      </div>
    </AppShell>
  );
}

function UpcomingList({
  actionLabel,
  count,
  date,
  icon,
  items,
  title
}: {
  actionLabel: string;
  count: number;
  date: string;
  icon: "sun" | "sunrise";
  items: Array<{
    time: string;
    title: string;
    detail: string;
    label: string;
    tone: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  title: string;
}) {
  const HeaderIcon = icon === "sunrise" ? Sunrise : CalendarClock;

  return (
    <article className="upcoming-list-card">
      <header>
        <div>
          <HeaderIcon className="h-6 w-6" />
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
        <p><b>{count}</b> items</p>
      </header>
      <div className="upcoming-list">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div className="upcoming-row" key={`${item.time}-${item.title}`}>
              <time>{item.time}</time>
              <span className="upcoming-row-dot" />
              <div className="upcoming-row-main">
                {Icon ? <Icon className="h-5 w-5" /> : null}
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
              <em className={`upcoming-badge upcoming-badge-${item.tone}`}>{item.label}</em>
            </div>
          );
        })}
      </div>
      <button className="upcoming-add" type="button">
        <Plus className="h-5 w-5" />
        {actionLabel}
      </button>
    </article>
  );
}

function UpcomingStat({
  icon: Icon,
  main,
  label,
  detail
}: {
  icon: React.ComponentType<{ className?: string }>;
  main: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="upcoming-stat">
      <span>
        <Icon className="h-4 w-4" />
      </span>
      <strong>{main}</strong>
      <p>{label}<br />{detail}</p>
    </div>
  );
}

function QuickAdd({
  icon: Icon,
  label
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="quick-action" type="button">
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
}
