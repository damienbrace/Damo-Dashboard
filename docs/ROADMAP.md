# LifeOS Roadmap

## Phase 1: Foundation

Build the basic app shell.

### Tasks

- Create Next.js app
- Add TypeScript
- Add Tailwind CSS
- Add shadcn/ui
- Set up Supabase
- Add authentication
- Create protected app layout
- Create sidebar navigation
- Create empty pages for main modules
- Deploy to Vercel

### Pages

- `/home`
- `/tasks`
- `/habits`
- `/journal`
- `/finance`
- `/life-admin`
- `/settings`

## Phase 2: Home Dashboard

Create the main command centre.

### Features

- Today’s focus card
- Today’s tasks card
- Weekly spending card
- Habit streaks card
- Coming up reminders
- Quick access tiles

### Goal

The home page should answer:

> What do I need to know today?

## Phase 3: Tasks & Projects

Make the app useful every day.

### Features

- Add task
- Complete task
- Due dates
- Category tags
- Priorities
- Project list
- Brain dump inbox
- Convert brain dump item into task, project, note, or reminder

### Tables

- `tasks`
- `projects`
- `brain_dump_items`

## Phase 4: Habits

Track consistency.

### Features

- Create habit
- Daily check-in
- Current streak
- Best streak
- Weekly habit overview
- Missed habit tracking

### Tables

- `habits`
- `habit_logs`

## Phase 5: Journal & Weekly Review

Add reflection and pattern tracking.

### Features

- Daily journal entry
- Mood rating
- Energy rating
- Tags
- Weekly review template
- Recent entries

### Tables

- `journal_entries`
- `weekly_reviews`

## Phase 6: Money Monitor MVP

Track spending without bank integrations first.

### Features

- Manual transaction entry
- Categories
- Weekly spending
- Monthly spending
- Category breakdown
- Recent transactions
- Budget target
- Personal/business toggle

### Tables

- `accounts`
- `transactions`
- `categories`
- `budgets`

## Phase 7: Money Insights

Make finance useful.

### Features

- Week vs last week comparison
- Category increases
- Subscription tracker
- Upcoming bills
- Smart saving suggestions
- Spending alerts

### Tables

- `recurring_expenses`
- `saving_suggestions`

## Phase 8: Life Admin

Stop forgetting important things.

### Features

- Bills due
- Rego due
- Insurance renewals
- BAS/tax reminders
- Domain renewals
- Warranty expiry
- Home maintenance checklist

### Tables

- `life_reminders`
- `maintenance_items`

## Phase 9: Vehicle Tracker

Track real vehicle costs.

### Features

- Vehicle profile
- Rego due
- Insurance due
- Service due
- Kilometres
- Repairs
- Fuel costs
- Receipt upload

### Tables

- `vehicles`
- `vehicle_expenses`
- `vehicle_services`

## Phase 10: Documents & Receipts

Organise important files.

### Features

- Upload document
- Tag document
- Link document to transaction, bill, vehicle, or business item
- Search documents
- Document expiry dates

### Tables

- `documents`

## Phase 11: Grocery Planner

Simplify shopping and reduce takeaway.

### Features

- Pantry list
- Favourite grocery items
- Weekly grocery list
- Budget target
- Meal plan notes
- AI grocery suggestions
- Woolworths search links

### Tables

- `grocery_lists`
- `grocery_list_items`
- `pantry_items`
- `meal_plans`
- `grocery_preferences`

## Phase 12: AI Assistant Layer

Add AI after enough user data exists.

### Features

- Weekly life summary
- Finance insights
- Journal summaries
- Habit pattern detection
- Grocery planning
- Brain dump sorting
- Tomorrow focus suggestion
- Business follow-up suggestions
