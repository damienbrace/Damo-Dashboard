import { NextResponse } from "next/server";
import { checkSupabaseConnection } from "@/lib/supabase/server";

export async function GET() {
  const result = await checkSupabaseConnection();

  return NextResponse.json({
    configured: result.configured,
    ok: result.ok,
    status: result.status
  });
}
