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
