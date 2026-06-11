import {
  BookOpenText,
  Check,
  Dumbbell,
  Footprints,
  GlassWater,
  ListChecks,
  Moon,
  PencilLine,
  Plus,
  Sparkles,
  Trophy
} from "lucide-react";
import { AppShell } from "@/components/app-shell";

const metrics = [
  { label: "Overall Score", value: "86%", detail: "Great job!" },
  { label: "Best Streak", value: "7 days", detail: "Workout" },
  { label: "Completed Today", value: "6 / 8", detail: "habits" },
  { label: "Current Streak", value: "12 days", detail: "Average" }
];

const habits = [
  { name: "Workout", streak: "7 day streak", icon: Dumbbell, days: [true, true, true, true, true, false, false] },
  { name: "Read", streak: "5 day streak", icon: BookOpenText, days: [true, true, "missed", false, true, false, false] },
  { name: "Journal", streak: "3 day streak", icon: PencilLine, days: [true, true, "missed", false, false, false, false] },
  { name: "No Alcohol", streak: "6 day streak", icon: GlassWater, days: [true, true, true, true, true, true, false] },
  { name: "Meditate", streak: "2 day streak", icon: Sparkles, days: [false, false, false, "missed", false, false, false] },
  { name: "Walk", streak: "4 day streak", icon: Footprints, days: [false, false, "missed", "missed", false, false, false] },
  { name: "Morning Routine", streak: "6 day streak", icon: Trophy, days: [true, true, false, true, true, false, false] },
  { name: "No Screens After 9pm", streak: "3 day streak", icon: Moon, days: [true, false, false, false, false, false, false] }
];

export default function HabitsPage() {
  return (
    <AppShell title="Habits" subtitle="" actionLabel="New Habit">
      <div className="habits-page">
        <div className="habits-toolbar">
          <div className="habits-tabs">
            <button className="habits-tab habits-tab-active" type="button">Overview</button>
            <button className="habits-tab" type="button">All Habits</button>
            <button className="habits-tab" type="button">Stats</button>
          </div>
          <button className="habits-add-button" type="button">
            <Plus className="h-4 w-4" />
            New Habit
          </button>
        </div>

        <div className="habits-metrics">
          {metrics.map((metric) => (
            <section className="habit-metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </section>
          ))}
        </div>

        <section className="habit-matrix-card">
          <div className="habit-week-header">
            <span />
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <strong key={`${day}-${index}`}>{day}</strong>
            ))}
          </div>

          <div className="habit-matrix">
            {habits.map((habit) => {
              const Icon = habit.icon;
              return (
                <div className="habit-matrix-row" key={habit.name}>
                  <div className="habit-name-cell">
                    <span>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <strong>{habit.name}</strong>
                      <p>{habit.streak}</p>
                    </div>
                  </div>
                  {habit.days.map((state, index) => (
                    <span
                      className={[
                        "habit-check",
                        state === true ? "habit-check-done" : "",
                        state === "missed" ? "habit-check-missed" : ""
                      ].join(" ")}
                      key={index}
                    >
                      {state ? <Check className="h-3.5 w-3.5" /> : null}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
