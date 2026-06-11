import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Plus,
  Smile,
  Zap
} from "lucide-react";
import { AppShell } from "@/components/app-shell";

const miniDays = [
  28, 29, 30, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 1
];

const recentEntries = [
  {
    date: "22 May 2025",
    time: "10:45",
    note: "Great day. Finished authentication.",
    mood: "Great",
    energy: "8/10"
  },
  {
    date: "21 May 2025",
    time: "21:08",
    note: "Felt a bit distracted but got important tasks done.",
    mood: "Okay",
    energy: "6/10"
  },
  {
    date: "20 May 2025",
    time: "19:30",
    note: "Long day, but happy with the progress.",
    mood: "Good",
    energy: "7/10"
  }
];

export default function JournalPage() {
  return (
    <AppShell title="Journal" subtitle="" actionLabel="New Entry">
      <div className="journal-page">
        <div className="journal-toolbar">
          <div className="journal-tabs">
            {["Entries", "Mood", "Insights"].map((tab, index) => (
              <button className={`journal-tab ${index === 0 ? "journal-tab-active" : ""}`} key={tab} type="button">
                {tab}
              </button>
            ))}
          </div>

          <button className="journal-more-button" title="More journal actions" type="button">
            <Ellipsis className="h-4 w-4" />
          </button>
        </div>

        <section className="journal-top-grid">
          <div className="journal-panel journal-calendar-card">
            <header>
              <button type="button" title="Previous month">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <strong>May 2025</strong>
              <button type="button" title="Next month">
                <ChevronRight className="h-4 w-4" />
              </button>
            </header>

            <div className="journal-mini-calendar">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <span className="journal-mini-weekday" key={`${day}-${index}`}>{day}</span>
              ))}
              {miniDays.map((day, index) => (
                <span
                  className={`journal-mini-day ${day === 23 && index === 25 ? "journal-mini-day-active" : ""}`}
                  key={`${day}-${index}`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          <article className="journal-panel journal-entry-card">
            <header>
              <div>
                <h2>Today&apos;s Entry</h2>
                <button type="button">Edit</button>
              </div>
              <button className="journal-entry-more" title="Entry options" type="button">
                <Ellipsis className="h-4 w-4" />
              </button>
            </header>

            <div className="journal-score-grid">
              <div className="journal-score-card">
                <span>Mood</span>
                <strong>
                  <Smile className="h-4 w-4" />
                  Good
                </strong>
              </div>
              <div className="journal-score-card">
                <span>Energy</span>
                <strong>
                  <Zap className="h-4 w-4" />
                  7/10
                </strong>
              </div>
            </div>

            <div className="journal-entry-copy">
              <p>Productive day. Made good progress on the dashboard.</p>
              <p>Gym in the morning really set the tone.</p>
              <p>Need to focus more on marketing this weekend.</p>
            </div>
          </article>
        </section>

        <section className="journal-panel journal-recent-card">
          <header>
            <h2>Recent Entries</h2>
            <button type="button">
              <Plus className="h-3.5 w-3.5" />
              New
            </button>
          </header>

          <div className="journal-entry-list">
            {recentEntries.map((entry) => (
              <article className="journal-entry-row" key={entry.date}>
                <div>
                  <div className="journal-entry-date">
                    <strong>{entry.date}</strong>
                    <time>{entry.time}</time>
                  </div>
                  <p>{entry.note}</p>
                </div>

                <span className={`journal-mood-pill journal-mood-${entry.mood.toLowerCase()}`}>
                  <Smile className="h-3.5 w-3.5" />
                  {entry.mood}
                </span>

                <span className="journal-energy-pill">
                  <Zap className="h-3.5 w-3.5" />
                  {entry.energy}
                </span>
              </article>
            ))}
          </div>

          <button className="journal-view-all" type="button">
            View all entries
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </section>
      </div>
    </AppShell>
  );
}
