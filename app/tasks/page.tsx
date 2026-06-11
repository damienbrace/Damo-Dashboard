import { Check, ChevronDown, Circle, Database, Filter, Plus, SlidersHorizontal } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { addTask, completeTask } from "./actions";
import { getTasks, splitTasks } from "@/lib/tasks";

export default async function TasksPage() {
  const { source, tasks } = await getTasks();
  const { completed, today, upcoming } = splitTasks(tasks);
  const isConnected = source === "supabase";

  return (
    <AppShell title="Tasks" subtitle="" actionLabel="New Task">
      <div className="tasks-workspace">
        <div className="tasks-toolbar">
          <div className="task-tabs" aria-label="Task views">
            <button className="task-tab task-tab-active" type="button">My Tasks</button>
            <button className="task-tab" type="button">Projects</button>
            <button className="task-tab" type="button">Completed</button>
          </div>
          <span className={isConnected ? "task-source-badge task-source-connected" : "task-source-badge"}>
            <Database className="h-3.5 w-3.5" />
            {isConnected ? "Supabase" : "Demo data"}
          </span>
        </div>

        <form action={addTask} className="task-add-form">
          <input aria-label="Task title" name="title" placeholder="Add a task..." />
          <select aria-label="Task priority" defaultValue="Medium" name="priority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select aria-label="Task due date" defaultValue="Today" name="dueLabel">
            <option>Today</option>
            <option>Tomorrow</option>
            <option>Upcoming</option>
          </select>
          <button type="submit">
            <Plus className="h-4 w-4" />
            Add
          </button>
        </form>

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

        <TaskGroup title="Today" count={today.length}>
          {today.map((task) => (
            <TaskRow
              id={task.id}
              key={task.id}
              title={task.title}
              priority={task.priority ?? undefined}
              date={task.dueLabel}
              canComplete={isConnected}
            />
          ))}
        </TaskGroup>

        <TaskGroup title="Upcoming" count={upcoming.length}>
          {upcoming.map((task) => (
            <TaskRow
              canComplete={isConnected}
              date={task.dueLabel}
              id={task.id}
              key={task.id}
              priority={task.priority ?? undefined}
              title={task.title}
            />
          ))}
        </TaskGroup>

        <div className="completed-summary">
          <button type="button">
            <span>Completed</span>
            <strong>{isConnected ? completed.length : 12}</strong>
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
  id,
  title,
  priority,
  date,
  canComplete
}: {
  id: string;
  title: string;
  priority?: string;
  date: string;
  canComplete: boolean;
}) {
  return (
    <div className="task-row">
      {canComplete ? (
        <form action={completeTask}>
          <input name="id" type="hidden" value={id} />
          <button className="task-complete-button" title={`Complete ${title}`} type="submit">
            <Circle className="task-check h-4 w-4" />
          </button>
        </form>
      ) : (
        <Check className="task-check h-4 w-4" />
      )}
      <span className="task-name">{title}</span>
      {priority ? <span className={`priority-pill priority-${priority.toLowerCase()}`}>{priority}</span> : null}
      <time>{date}</time>
      <ChevronDown className="task-chevron h-4 w-4" />
    </div>
  );
}
