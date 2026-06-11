# Damo-Dashboard

## Environment

Copy `.env.example` to `.env.local` and fill in the private values.

Required login variables:
- `LIFEOS_LOGIN_EMAIL`
- `LIFEOS_LOGIN_PASSWORD`
- `LIFEOS_SESSION_SECRET`

Required Supabase variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

After setting Supabase env vars, verify the connection at:

```txt
/api/supabase/health
```

## Supabase Tables

Run `supabase/tasks.sql` in the Supabase SQL Editor to create the MVP tasks table and seed the first task rows.

The initial task policies allow anon read/write because this app currently uses a custom login gate instead of Supabase Auth. Tighten these policies before storing sensitive personal data.
