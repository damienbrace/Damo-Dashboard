import { ChevronDown, Circle, Filter, SlidersHorizontal } from "lucide-react";
import { AppShell } from "@/components/app-shell";

const todayTasks = [
  { title: "Finish dashboard", priority: "High", date: "Today" },
  { title: "Add authentication", priority: "High", date: "Today" },
  { title: "Write README", priority: "Medium", date: "Today" },
  { title: "Gym", priority: "Low", date: "Today" }
];

const upcomingTasks = [
  { title: "Call electrician", date: "Tomorrow" },
  { title: "Plan Japan trip", date: "Sat, 24 May" },
  { title: "Buy domain", date: "Mon, 26 May" }
];

export default function TasksPage() {
  return (
    <AppShell title="Tasks" subtitle="" actionLabel="New Task">
      <div className="tasks-workspace">
        <div className="tasks-toolbar">
          <div className="task-tabs" aria-label="Task views">
            <button className="task-tab task-tab-active" type="button">My Tasks</button>
            <button className="task-tab" type="button">Projects</button>
            <button className="task-tab" type="button">Completed</button>
          </div>
        </div>

        <div className="tasks-filter-row">
          <div className="task-chip-group">
            <button className="task-chip task-chip-active" type="button">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Today
            </button>
            <button className="task-chip" type="button">Upcoming</button>
            <button className="task-chip" type="button">All</button>
          </div>
          <button className="filter-button" type="button">
            <Filter className="h-3.5 w-3.5" />
            Filter
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>

        <TaskGroup title="Today" count={4}>
          {todayTasks.map((task) => (
            <TaskRow
              key={task.title}
              title={task.title}
              priority={task.priority}
              date={task.date}
            />
          ))}
        </TaskGroup>

        <TaskGroup title="Upcoming" count={3}>
          {upcomingTasks.map((task) => (
            <TaskRow key={task.title} title={task.title} date={task.date} />
          ))}
        </TaskGroup>

        <div className="completed-summary">
          <button type="button">
            <span>Completed</span>
            <strong>12</strong>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </AppShell>
  );
}

function TaskGroup({
  title,
  count,
  children
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <section className="task-group">
      <header>
        <h2>{title}</h2>
        <span>{count}</span>
      </header>
      <div className="task-list">{children}</div>
    </section>
  );
}

function TaskRow({
  title,
  priority,
  date
}: {
  title: string;
  priority?: string;
  date: string;
}) {
  return (
    <div className="task-row">
      <Circle className="task-check h-4 w-4" />
      <span className="task-name">{title}</span>
      {priority ? <span className={`priority-pill priority-${priority.toLowerCase()}`}>{priority}</span> : null}
      <time>{date}</time>
      <ChevronDown className="task-chevron h-4 w-4" />
    </div>
  );
}
