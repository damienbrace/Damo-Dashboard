"use client";

import { useState } from "react";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Copy,
  DollarSign,
  Download,
  Dumbbell,
  Edit3,
  FileText,
  Filter,
  Plus,
  Search,
  Settings,
  Trash2,
  Utensils,
  Video,
  X
} from "lucide-react";
import { AppShell } from "@/components/app-shell";

type CalendarView = "month" | "week" | "day";

const timeLabels = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM"];

const dayEvents = [
  { time: "6:00 AM - 7:00 AM", title: "Yoga", tone: "cyan", top: 80, height: 64 },
  { time: "9:00 AM - 10:00 AM", title: "Project sync", tone: "blue", top: 198, height: 66, icon: Video, selected: true },
  { time: "12:00 PM - 1:00 PM", title: "Lunch with Sam", tone: "blue", top: 340, height: 66, icon: Utensils },
  { time: "3:00 PM - 4:00 PM", title: "Track expenses", tone: "green", top: 512, height: 66, icon: DollarSign },
  { time: "5:00 PM - 6:00 PM", title: "Review goals", tone: "blue", top: 640, height: 66, icon: Check },
  { time: "7:00 PM - 8:00 PM", title: "Read", tone: "purple", top: 766, height: 66, icon: FileText }
];

const weekDays = [
  { label: "MON", date: 18 },
  { label: "TUE", date: 19 },
  { label: "WED", date: 20, active: true },
  { label: "THU", date: 21 },
  { label: "FRI", date: 22 },
  { label: "SAT", date: 23, ring: true },
  { label: "SUN", date: 24, ring: true }
];

const weekEvents = [
  { day: 0, title: "Gym", time: "6:00 AM", top: 72, height: 48, tone: "cyan" },
  { day: 0, title: "Team standup", time: "9:00 AM", top: 180, height: 48, tone: "blue" },
  { day: 0, title: "Review goals", time: "11:00 AM", top: 258, height: 48, tone: "blue" },
  { day: 0, title: "Call electrician", time: "6:00 PM", top: 622, height: 48, tone: "blue" },
  { day: 1, title: "Yoga", time: "6:00 AM", top: 72, height: 48, tone: "cyan" },
  { day: 1, title: "Project sync", time: "9:00 AM", top: 180, height: 48, tone: "blue" },
  { day: 1, title: "Lunch with Sam", time: "12:00 PM", top: 336, height: 48, tone: "blue" },
  { day: 1, title: "Track expenses", time: "3:00 PM", top: 492, height: 48, tone: "green" },
  { day: 1, title: "Read", time: "7:00 PM", top: 674, height: 48, tone: "purple" },
  { day: 2, title: "Focus work", time: "8:00 AM", top: 128, height: 48, tone: "green", selected: true },
  { day: 2, title: "Write README", time: "10:00 AM", top: 232, height: 48, tone: "blue" },
  { day: 2, title: "Website feedback", time: "11:00 AM", top: 284, height: 48, tone: "blue" },
  { day: 2, title: "Content planning", time: "2:00 PM", top: 440, height: 48, tone: "blue" },
  { day: 2, title: "Read", time: "7:00 PM", top: 674, height: 48, tone: "purple" },
  { day: 3, title: "Gym", time: "6:00 AM", top: 72, height: 48, tone: "cyan" },
  { day: 3, title: "Deliver report", time: "9:00 AM", top: 180, height: 48, tone: "green" },
  { day: 3, title: "Dentist appointment", time: "12:00 PM", top: 336, height: 48, tone: "amber" },
  { day: 4, title: "Yoga", time: "6:00 AM", top: 72, height: 48, tone: "cyan" },
  { day: 4, title: "Coffee with Alex", time: "9:00 AM", top: 180, height: 48, tone: "blue" },
  { day: 4, title: "Plan the week", time: "1:00 PM", top: 388, height: 48, tone: "blue" },
  { day: 5, title: "Soccer", time: "11:00 AM", top: 284, height: 48, tone: "blue" },
  { day: 5, title: "Meal prep", time: "5:00 PM", top: 570, height: 48, tone: "blue" },
  { day: 6, title: "Brunch", time: "2:00 PM", top: 440, height: 48, tone: "purple" }
];

const weekAllDay = [
  { day: 0, title: "Budget review", tone: "green" },
  { day: 3, title: "Pay bills", tone: "amber" },
  { day: 5, title: "Weekend away", tone: "purple" },
  { day: 6, title: "Family dinner", tone: "purple" }
];

const monthDays = [
  { day: 28, muted: true, items: [{ type: "habit", text: "9:00 Gym" }, { type: "habit", text: "10:00 Team standup" }] },
  { day: 29, muted: true, items: [{ type: "event", text: "12:00 Lunch with Sam" }] },
  { day: 30, muted: true, chips: [{ type: "event", text: "Write README" }] },
  { day: 1, items: [{ type: "habit", text: "8:00 Yoga" }], chips: [{ type: "personal", text: "Publish blog post" }] },
  { day: 2, chips: [{ type: "task", text: "Focus work" }] },
  { day: 3, items: [{ type: "event", text: "1:00 PM Soccer" }] },
  { day: 4, chips: [{ type: "personal", text: "Family dinner" }], items: [{ type: "habit", text: "7:00 Plan the week" }] },
  { day: 5, chips: [{ type: "task", text: "Budget review" }], items: [{ type: "habit", text: "9:00 Gym" }] },
  { day: 6, items: [{ type: "habit", text: "10:00 Project sync" }] },
  { day: 7, chips: [{ type: "reminder", text: "Dentist appointment" }], items: [{ type: "event", text: "7:00 PM Read" }] },
  { day: 8, items: [{ type: "habit", text: "8:00 Yoga" }], chips: [{ type: "event", text: "Call electrician" }] },
  { day: 9, chips: [{ type: "task", text: "Deliver report" }] },
  { day: 10, items: [{ type: "event", text: "10:00 Coffee with Alex" }] },
  { day: 11, chips: [{ type: "personal", text: "Mother's Day" }] },
  { day: 12, items: [{ type: "habit", text: "9:00 Gym" }], chips: [{ type: "event", text: "Review goals" }] },
  { day: 13, items: [{ type: "habit", text: "12:00 Lunch with Sam" }], chips: [{ type: "task", text: "Track expenses" }] },
  { day: 14, chips: [{ type: "event", text: "Website feedback" }], items: [{ type: "event", text: "7:00 PM Read" }] },
  { day: 15, selected: true, items: [{ type: "habit", text: "8:00 Yoga" }], chips: [{ type: "task", text: "Focus work" }], more: "3 more..." },
  { day: 16, chips: [{ type: "reminder", text: "Pay bills" }, { type: "task", text: "Deliver report" }] },
  { day: 17, items: [{ type: "event", text: "1:00 PM Soccer" }] },
  { day: 18, chips: [{ type: "event", text: "Meal prep" }], items: [{ type: "habit", text: "7:00 Plan the week" }] },
  { day: 19, chips: [{ type: "task", text: "Budget review" }], items: [{ type: "habit", text: "9:00 Gym" }] },
  { day: 20, items: [{ type: "habit", text: "10:00 Project sync" }] },
  { day: 21, chips: [{ type: "event", text: "Content planning" }], items: [{ type: "event", text: "7:00 PM Read" }] },
  { day: 22, items: [{ type: "habit", text: "8:00 Yoga" }], chips: [{ type: "reminder", text: "Domain renewal" }] },
  { day: 23, chips: [{ type: "task", text: "Focus work" }] },
  { day: 24, chips: [{ type: "personal", text: "Weekend away" }], note: "All day" },
  { day: 25, chips: [{ type: "personal", text: "Weekend away" }], note: "All day" },
  { day: 26, items: [{ type: "habit", text: "9:00 Gym" }], chips: [{ type: "event", text: "Review goals" }] },
  { day: 27, items: [{ type: "habit", text: "12:00 Lunch with Sam" }] },
  { day: 28, chips: [{ type: "event", text: "Write newsletter" }], items: [{ type: "event", text: "7:00 PM Read" }] },
  { day: 29, items: [{ type: "habit", text: "8:00 Yoga" }], chips: [{ type: "event", text: "Meeting with Sarah" }] },
  { day: 30, chips: [{ type: "task", text: "End of month review" }] },
  { day: 31, items: [{ type: "event", text: "1:00 PM Soccer" }] },
  { day: 1, muted: true, chips: [{ type: "personal", text: "Family dinner" }] }
];

const miniDays = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1];
const focusTasks = ["Project sync", "Project sync", "Track expenses", "Content planning"];
const habits = [
  { name: "Workout", done: [true, true, true, true, false, false, false] },
  { name: "Read", done: [true, true, true, false, false, false, false] },
  { name: "Meditate", done: [true, true, true, true, false, false, false] }
];

const tasks = [
  { title: "Project sync", time: "9:00 AM", priority: "High" },
  { title: "Track expenses", time: "3:00 PM", priority: "Medium" },
  { title: "Content planning", time: "5:30 PM", priority: "Medium" },
  { title: "Write newsletter", time: "Tomorrow", priority: "Low" },
  { title: "Call electrician", time: "Tomorrow", priority: "Low" }
];

export default function CalendarPage() {
  const [view, setView] = useState<CalendarView>("month");
  const dateLabel = view === "week" ? "18 - 24 May 2025" : view === "day" ? "Tuesday, 20 May 2025" : "May 2025";

  return (
    <AppShell
      title="Calendar"
      subtitle="Plan your days. Stay on track."
      actionLabel="New Event"
      headerActionsSlot={<CalendarHeaderActions />}
    >
      <div className="calendar-day-page">
        <div className="calendar-controls">
          <button className="calendar-control-button" type="button">Today</button>
          <div className="calendar-arrow-group">
            <button className="calendar-control-icon" type="button" title="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="calendar-control-icon" type="button" title="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <button className="calendar-date-button" type="button">
            {view === "day" ? <CalendarDays className="h-4 w-4" /> : null}
            {dateLabel}
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="calendar-view-toggle">
            {(["month", "week", "day"] as CalendarView[]).map((item) => (
              <button
                className={view === item ? "active" : ""}
                key={item}
                onClick={() => setView(item)}
                type="button"
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <button className="calendar-filter-button" type="button">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="calendar-control-icon" type="button" title="Calendar settings">
            <Settings className="h-4 w-4" />
          </button>
        </div>

        {view === "week" ? <WeekView /> : null}
        {view === "day" ? <DayView /> : null}
        {view === "month" ? <MonthPreview /> : null}
      </div>
    </AppShell>
  );
}

function WeekView() {
  return (
    <div className="calendar-week-layout">
      <section className="week-calendar-card">
        <div className="week-grid-header">
          <span />
          {weekDays.map((day) => (
            <div className="week-day-heading" key={day.date}>
              <span>{day.label}</span>
              <strong className={day.active ? "active" : day.ring ? "ring" : ""}>{day.date}</strong>
            </div>
          ))}
        </div>
        <div className="week-all-day-row">
          <span>All day</span>
          {weekDays.map((day, index) => {
            const event = weekAllDay.find((item) => item.day === index);
            return (
              <div className="week-all-day-cell" key={day.date}>
                {event ? <div className={`week-allday-event week-event-${event.tone}`}>{event.title}</div> : null}
              </div>
            );
          })}
        </div>
        <div className="week-grid-body">
          <div className="week-time-rail">
            {["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"].map((time) => (
              <span key={time}>{time}</span>
            ))}
          </div>
          <div className="week-stage">
            {weekDays.map((day, index) => (
              <div className="week-day-column" key={day.date} style={{ gridColumn: index + 1 }} />
            ))}
            {weekEvents.map((event) => (
              <div
                className={`week-event week-event-${event.tone} ${event.selected ? "week-event-selected" : ""}`}
                key={`${event.day}-${event.title}-${event.time}`}
                style={{
                  left: `calc(${event.day} * 100% / 7 + 6px)`,
                  width: "calc(100% / 7 - 12px)",
                  top: event.top,
                  height: event.height
                }}
              >
                <span>{event.time}</span>
                <strong>{event.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="calendar-right-rail week-rail">
        <MiniCalendar activeDays={[20, 23, 24]} />
        <UpcomingWeekCard />
        <WeekQuickAdd />
      </aside>
    </div>
  );
}

function DayView() {
  return (
    <>
      <div className="calendar-day-grid">
        <section className="day-timeline-card">
          <div className="timeline-all-day">
            <span>All day</span>
            <div className="all-day-event">
              <DollarSign className="h-3.5 w-3.5" />
              Pay bills
            </div>
          </div>
          <div className="timeline-body">
            <div className="time-rail">
              {timeLabels.map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
            <div className="timeline-stage">
              <div className="current-time-line">
                <span>10:45 AM</span>
              </div>
              {dayEvents.map((event) => {
                const Icon = event.icon;
                return (
                  <div
                    className={`day-event day-event-${event.tone} ${event.selected ? "day-event-selected" : ""}`}
                    key={event.title}
                    style={{ top: event.top, height: event.height }}
                  >
                    <span>{event.time}</span>
                    <strong>{event.title}</strong>
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <EventDetailCard />

        <aside className="calendar-right-rail">
          <MiniCalendar activeDays={[20]} />
          <FocusCard />
          <HabitsCard />
          <QuickNotes />
          <DaySummary />
        </aside>
      </div>

      <TasksForDay />
    </>
  );
}

function MonthPreview() {
  return (
    <div className="calendar-month-layout">
      <section className="month-calendar-card">
        <div className="month-grid">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((weekday) => (
            <div className="month-weekday" key={weekday}>{weekday}</div>
          ))}
          {monthDays.map((date, index) => (
            <div
              className={[
                "month-day-cell",
                date.muted ? "month-day-muted" : "",
                date.selected ? "month-day-selected" : ""
              ].join(" ")}
              key={`${date.day}-${index}`}
            >
              <strong>{date.day}</strong>
              <div className="month-cell-items">
                {date.items?.map((item) => (
                  <div className="month-dot-item" key={item.text}>
                    <span className={`month-dot month-dot-${item.type}`} />
                    {item.text}
                  </div>
                ))}
                {date.chips?.map((chip) => (
                  <div className={`month-chip month-chip-${chip.type}`} key={chip.text}>
                    {chip.text}
                  </div>
                ))}
                {date.more ? <button className="month-more" type="button">{date.more}</button> : null}
                {date.note ? <span className="month-note">{date.note}</span> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="month-legend">
          {[
            ["task", "Task"],
            ["event", "Event"],
            ["habit", "Habit"],
            ["reminder", "Reminder"],
            ["personal", "Personal"]
          ].map(([type, label]) => (
            <span key={type}>
              <i className={`month-dot month-dot-${type}`} />
              {label}
            </span>
          ))}
        </div>
      </section>

      <aside className="calendar-right-rail month-rail">
        <MiniCalendar activeDays={[15]} />
        <MonthUpcomingCard />
        <TasksDueCard />
        <button className="month-new-event-button" type="button">
          <Plus className="h-5 w-5" />
          New Event
        </button>
      </aside>
    </div>
  );
}

function MonthUpcomingCard() {
  const upcoming = [
    ["Tomorrow", "Yoga", "8:00 AM"],
    ["Tomorrow", "Call electrician", "10:00 AM"],
    ["Friday, 16 May", "Pay bills", "All day"],
    ["Saturday, 17 May", "Soccer", "1:00 PM"],
    ["Sunday, 18 May", "Meal prep", "All day"]
  ];

  return (
    <section className="rail-card month-upcoming-card">
      <header>
        <h2>Upcoming <span>(Next 7 days)</span></h2>
        <button type="button">View all</button>
      </header>
      <div>
        {upcoming.map(([day, title, time], index) => (
          <div className="upcoming-week-row" key={title}>
            <span className={`upcoming-icon upcoming-icon-${index}`} />
            <div>
              <small>{day}</small>
              <strong>{title}</strong>
            </div>
            <time>{time}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function TasksDueCard() {
  const due = [
    ["Write README", "Wed, 30 May"],
    ["Publish blog post", "Thu, 1 May"],
    ["Deliver report", "Fri, 16 May"],
    ["Content planning", "Wed, 21 May"],
    ["End of month review", "Fri, 30 May"]
  ];

  return (
    <section className="rail-card tasks-due-card">
      <header>
        <h2>Tasks Due</h2>
        <button type="button">View all</button>
      </header>
      <div>
        {due.map(([task, date]) => (
          <div className="tasks-due-row" key={task}>
            <Circle className="h-4 w-4" />
            <strong>{task}</strong>
            <time>{date}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventDetailCard() {
  return (
    <section className="event-detail-card">
      <header className="event-detail-header">
        <div>
          <span className="event-dot" />
          <h2>Project sync</h2>
        </div>
        <div className="event-tools">
          <button type="button" title="Edit"><Edit3 className="h-4 w-4" /></button>
          <button type="button" title="Duplicate"><Copy className="h-4 w-4" /></button>
          <button type="button" title="Delete"><Trash2 className="h-4 w-4" /></button>
          <button type="button" title="Close"><X className="h-4 w-4" /></button>
        </div>
      </header>

      <div className="event-meta-list">
        <EventMeta icon={Video} title="Google Meet" detail="meet.google.com/abc-defg-hij" link />
        <EventMeta icon={Clock} title="Tuesday, 20 May 2025" detail="9:00 AM - 10:00 AM (1h)" />
        <EventMeta icon={Bell} title="10 minutes before" />
      </div>

      <div className="attendees">
        <h3>4 attendees</h3>
        {[
          ["You (Jackson)", "Organiser"],
          ["Sarah Johnson", "Accepted"],
          ["Michael Chen", "Accepted"],
          ["Emily Davis", "Pending"]
        ].map(([name, status], index) => (
          <div className="attendee-row" key={name}>
            <span className="attendee-avatar">{["Y", "S", "M", "E"][index]}</span>
            <strong>{name}</strong>
            <em>{status}</em>
          </div>
        ))}
        <button type="button">+ Add attendee</button>
      </div>

      <div className="event-section">
        <h3>Description</h3>
        <p>Weekly project sync with the team.</p>
        <p>Review progress, blockers and next steps.</p>
        <p>Come prepared with updates.</p>
      </div>

      <div className="event-section">
        <h3>Files</h3>
        <div className="file-pill">
          <FileText className="h-5 w-5" />
          <div>
            <strong>Project-Update-May.pdf</strong>
            <span>2.4 MB</span>
          </div>
          <Download className="h-4 w-4" />
        </div>
      </div>

      <div className="event-section">
        <h3>Notes</h3>
        <div className="notes-box">Add any notes for this event...</div>
      </div>
    </section>
  );
}

function TasksForDay() {
  return (
    <section className="tasks-for-day-card">
      <header>
        <h2>Tasks for Tuesday</h2>
        <button type="button">+ Add Task</button>
      </header>
      <div className="day-task-list">
        {tasks.map((task) => (
          <div className="day-task-row" key={task.title}>
            <Circle className="h-4 w-4" />
            <span>{task.title}</span>
            <time>{task.time}</time>
            <em className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function CalendarHeaderActions() {
  return (
    <div className="calendar-header-actions">
      <label className="calendar-search">
        <span>Search events, tasks...</span>
        <Search className="h-4 w-4" />
      </label>
      <button className="icon-button" type="button" title="Notifications">
        <Bell className="h-4 w-4" />
      </button>
      <button className="calendar-plus-button" type="button" title="New event">
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
}

function EventMeta({
  icon: Icon,
  title,
  detail,
  link
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail?: string;
  link?: boolean;
}) {
  return (
    <div className="event-meta-row">
      <Icon className="h-4 w-4" />
      <div>
        <strong>{title}</strong>
        {detail ? <span className={link ? "link-text" : ""}>{detail}</span> : null}
      </div>
    </div>
  );
}

function MiniCalendar({ activeDays = [20] }: { activeDays?: number[] }) {
  return (
    <section className="rail-card mini-calendar-card">
      <header>
        <ChevronLeft className="h-4 w-4" />
        <h2>May 2025</h2>
        <ChevronRight className="h-4 w-4" />
      </header>
      <div className="mini-calendar-grid">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span className="mini-weekday" key={`${day}-${index}`}>{day}</span>
        ))}
        {miniDays.map((day, index) => {
          const isCurrentMonthTwenty = day === 20 && index > 10;
          return (
            <span
              className={activeDays.includes(day) && index > 10 ? `mini-day ${isCurrentMonthTwenty ? "active" : "ring"}` : "mini-day"}
              key={`${day}-${index}`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </section>
  );
}

function UpcomingWeekCard() {
  const upcoming = [
    ["Tomorrow", "Yoga", "6:00 AM"],
    ["Tomorrow", "Call electrician", "10:00 AM"],
    ["Thu, 22 May", "Deliver report", "9:00 AM"],
    ["Fri, 23 May", "Soccer", "11:00 AM"],
    ["Sat, 24 May", "Weekend away", "All day"]
  ];

  return (
    <section className="rail-card upcoming-week-card">
      <header>
        <h2>Upcoming <span>(Next 7 days)</span></h2>
        <button type="button">View all</button>
      </header>
      <div>
        {upcoming.map(([day, title, time], index) => (
          <div className="upcoming-week-row" key={title}>
            <span className={`upcoming-icon upcoming-icon-${index}`} />
            <div>
              <small>{day}</small>
              <strong>{title}</strong>
            </div>
            <time>{time}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeekQuickAdd() {
  return (
    <section className="rail-card week-quick-add-card">
      <header>
        <h2>Quick Add</h2>
        <button type="button">+</button>
      </header>
      <div>
        {["Event", "Task", "Reminder", "Habit"].map((item) => (
          <button key={item} type="button">{item}</button>
        ))}
      </div>
    </section>
  );
}

function FocusCard() {
  return (
    <section className="rail-card">
      <header>
        <h2>Today's Focus</h2>
        <button type="button">Edit</button>
      </header>
      <div className="focus-check-list">
        {focusTasks.map((task, index) => (
          <div className="focus-check-row" key={`${task}-${index}`}>
            <span className={index < 2 ? "checked" : ""}>{index < 2 ? <Check className="h-3.5 w-3.5" /> : null}</span>
            <strong>{task}</strong>
          </div>
        ))}
      </div>
      <div className="focus-progress">
        <span>1 of 3 tasks completed</span>
        <div><i /></div>
      </div>
    </section>
  );
}

function HabitsCard() {
  return (
    <section className="rail-card">
      <header>
        <h2>Habits</h2>
        <button type="button">Edit</button>
      </header>
      <div className="rail-habits">
        {habits.map((habit) => (
          <div className="rail-habit-row" key={habit.name}>
            <strong>{habit.name}</strong>
            <div>
              {habit.done.map((done, index) => (
                <span className={done ? "done" : ""} key={index}>
                  {done ? <Check className="h-3 w-3" /> : null}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="rail-link" type="button">View all habits {">"}</button>
    </section>
  );
}

function QuickNotes() {
  return (
    <section className="rail-card quick-notes-card">
      <header>
        <h2>Quick Notes</h2>
        <button type="button">+</button>
      </header>
      <p>Email John about the proposal</p>
      <p>Buy groceries after work</p>
      <p>Book dentist appointment</p>
      <span>Updated 9:30 AM</span>
    </section>
  );
}

function DaySummary() {
  return (
    <section className="rail-card day-summary-card">
      <header>
        <h2>Day Summary</h2>
        <button type="button">View report</button>
      </header>
      <SummaryRow icon={CalendarDays} label="Events" value="5" />
      <SummaryRow icon={Check} label="Tasks Completed" value="1 of 3" />
      <SummaryRow icon={Dumbbell} label="Habits Completed" value="4 of 3" success />
      <SummaryRow icon={Clock} label="Focus Time" value="3h 20m" />
      <p>You're making great progress today.</p>
    </section>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
  success
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div className="summary-row">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      <strong className={success ? "success" : ""}>{value}</strong>
    </div>
  );
}
