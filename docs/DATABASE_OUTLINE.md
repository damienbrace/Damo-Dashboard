# LifeOS Database Outline

## Naming Conventions

Use snake_case for tables and columns.

Every user-owned table should include:

- `id`
- `user_id`
- `created_at`
- `updated_at`

Use Supabase Row Level Security so users can only access their own data.

## Core Tables

```text
profiles

tasks
projects
brain_dump_items

habits
habit_logs

journal_entries
weekly_reviews

accounts
transactions
categories
budgets
recurring_expenses
saving_suggestions

life_reminders
documents
maintenance_items

vehicles
vehicle_expenses
vehicle_services

grocery_lists
grocery_list_items
pantry_items
meal_plans
grocery_preferences

business_contacts
business_jobs
business_quotes
```

## Example Table Notes

### tasks

Stores actions the user needs to complete.

Suggested fields:

- `id`
- `user_id`
- `project_id`
- `title`
- `description`
- `status`
- `priority`
- `category`
- `due_date`
- `completed_at`
- `created_at`
- `updated_at`

### projects

Stores larger pieces of work.

Suggested fields:

- `id`
- `user_id`
- `name`
- `description`
- `status`
- `progress`
- `due_date`
- `created_at`
- `updated_at`

### transactions

Stores finance data.

Suggested fields:

- `id`
- `user_id`
- `account_id`
- `category_id`
- `date`
- `merchant`
- `amount`
- `type`
- `is_business`
- `is_tax_deductible`
- `has_gst`
- `notes`
- `receipt_document_id`
- `created_at`
- `updated_at`

### life_reminders

Stores important due dates.

Suggested fields:

- `id`
- `user_id`
- `title`
- `description`
- `category`
- `due_date`
- `repeat_rule`
- `status`
- `linked_document_id`
- `created_at`
- `updated_at`

### documents

Stores metadata for uploaded files.

Suggested fields:

- `id`
- `user_id`
- `title`
- `category`
- `storage_path`
- `linked_type`
- `linked_id`
- `expiry_date`
- `notes`
- `created_at`
- `updated_at`

### grocery_lists

Stores weekly grocery plans.

Suggested fields:

- `id`
- `user_id`
- `week_start`
- `target_budget`
- `estimated_total`
- `status`
- `created_at`
- `updated_at`

### grocery_list_items

Stores grocery list items.

Suggested fields:

- `id`
- `user_id`
- `grocery_list_id`
- `item_name`
- `quantity`
- `category`
- `estimated_price`
- `selected_product`
- `woolworths_url`
- `status`
- `created_at`
- `updated_at`
