import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./config";

export function createSupabaseServerClient() {
  const { anonKey, isConfigured, url } = getSupabaseConfig();

  if (!isConfigured) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createClient(url, anonKey, {
    auth: {
      persistSession: false
    }
  });
}

export async function checkSupabaseConnection() {
  const { anonKey, isConfigured, url } = getSupabaseConfig();

  if (!isConfigured) {
    return {
      configured: false,
      ok: false,
      status: null
    };
  }

  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/auth/v1/settings`, {
      headers: {
        apikey: anonKey
      },
      method: "GET"
    });

    return {
      configured: true,
      ok: response.ok,
      status: response.status
    };
  } catch {
    return {
      configured: true,
      ok: false,
      status: null
    };
  }
}
