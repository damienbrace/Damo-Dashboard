"use client";

import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./config";

export function createSupabaseBrowserClient() {
  const { anonKey, isConfigured, url } = getSupabaseConfig();

  if (!isConfigured) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createClient(url, anonKey);
}
