create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) <= 160),
  priority text check (priority in ('High', 'Medium', 'Low')),
  due_label text not null default 'Today',
  due_date date,
  status text not null default 'open' check (status in ('open', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.tasks enable row level security;

drop policy if exists "Allow MVP task reads" on public.tasks;
drop policy if exists "Allow MVP task inserts" on public.tasks;
drop policy if exists "Allow MVP task updates" on public.tasks;

create policy "Allow MVP task reads"
on public.tasks
for select
to anon
using (true);

create policy "Allow MVP task inserts"
on public.tasks
for insert
to anon
with check (true);

create policy "Allow MVP task updates"
on public.tasks
for update
to anon
using (true)
with check (true);

create index if not exists tasks_status_created_at_idx
on public.tasks (status, created_at);

insert into public.tasks (title, priority, due_label, status)
values
  ('Finish dashboard', 'High', 'Today', 'open'),
  ('Add authentication', 'High', 'Today', 'open'),
  ('Write README', 'Medium', 'Today', 'open'),
  ('Gym', 'Low', 'Today', 'open'),
  ('Call electrician', null, 'Tomorrow', 'open'),
  ('Plan Japan trip', null, 'Sat, 24 May', 'open'),
  ('Buy domain', null, 'Mon, 26 May', 'open')
on conflict do nothing;
