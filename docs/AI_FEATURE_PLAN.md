# LifeOS AI Feature Plan

## AI Principle

AI should assist, not take over.

The app should never make financial decisions, purchases, or important life changes without user approval.

AI should be used to:

- Summarise
- Suggest
- Organise
- Detect patterns
- Reduce manual thinking
- Create draft plans

## Safe AI Rules

- Do not auto-purchase groceries.
- Do not auto-send messages without approval.
- Do not modify financial records without confirmation.
- Do not make medical, legal, or financial claims as certainty.
- Always show the source data used for important insights.
- Let the user approve AI-generated actions.

## AI Features by Module

## Home

### Possible AI Actions

- Suggest tomorrow’s focus
- Summarise today
- Warn about upcoming pressure points
- Highlight what needs attention

Example:

> You have 3 overdue tasks, spending is higher than usual, and your weekly review is due Sunday.

## Tasks

### Possible AI Actions

- Turn brain dump into tasks
- Break big projects into steps
- Suggest next action
- Detect neglected projects

Example:

> “Build Henty Lodge website” can be broken into design, copy, booking form, SEO, and launch tasks.

## Finance

### Possible AI Actions

- Find spending increases
- Suggest savings
- Summarise weekly spending
- Detect subscriptions
- Explain where money went
- Compare personal vs business spending

Example:

> Eating out is down this week, but groceries and hardware purchases are up. Your personal overspend is only $42 because some purchases were business-related.

## Journal

### Possible AI Actions

- Summarise the week
- Find repeated themes
- Detect mood and energy patterns
- Suggest next week’s focus

Example:

> You seem more productive on days when you train early and avoid late screen time.

## Habits

### Possible AI Actions

- Detect slipping habits
- Suggest habit adjustments
- Connect habits with journal and finance patterns

Example:

> Journal and workout habits are strong, but reading drops off on weekends.

## Life Admin

### Possible AI Actions

- Summarise upcoming due dates
- Suggest what to do this week
- Convert reminders into tasks

Example:

> Rego is due in 12 days. Add a task to renew it this week.

## Groceries

### Possible AI Actions

- Create weekly grocery list
- Plan meals under budget
- Use pantry items
- Suggest cheaper swaps
- Reduce takeaway risk

Example:

> I planned 5 dinners under $180 and used rice, pasta, and frozen mince already in your pantry.

## Business

### Possible AI Actions

- Suggest follow-ups
- Summarise quote pipeline
- Draft website copy
- Turn business ideas into project plans

Example:

> You have 2 quotes waiting for follow-up and 1 website task overdue.

## AI Build Order

1. Brain dump to tasks
2. Weekly finance summary
3. Journal weekly summary
4. Grocery list planner
5. Daily focus suggestion
6. Business follow-up assistant
7. Cross-module pattern detection

## Prompting Pattern

For each AI feature, pass structured data rather than raw database dumps.

Example input:

```json
{
  "weekly_spend": 387,
  "last_week_spend": 452,
  "top_categories": [
    {"name": "Groceries", "amount": 132},
    {"name": "Eating out", "amount": 98}
  ],
  "budget": 600
}
```

Expected output:

```json
{
  "summary": "You spent $65 less than last week and are under budget.",
  "insights": [
    "Eating out is still your second largest category.",
    "Groceries are steady compared with normal spending."
  ],
  "suggested_actions": [
    "Set a $70 eating-out target next week.",
    "Plan two easy dinners to avoid takeaway."
  ]
}
```
