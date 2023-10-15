import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iyggrlfeygugnlgwrohk.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Z2dybGZleWd1Z25sZ3dyb2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzcyODUsImV4cCI6MjAxMjkxMzI4NX0.K7Rvo5JW6EbhCAeNLp5v7gXPu8uddZsZa7Zfkmu_8dk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
