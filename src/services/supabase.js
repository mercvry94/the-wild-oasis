import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yrumzjcfstwmqrcchqyy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydW16amNmc3R3bXFyY2NocXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTk3NTEsImV4cCI6MjA0NzU5NTc1MX0.jO22_GYE9KuydPWcEtKTJOxcjUY3hi5FmxChmN3hXDA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
