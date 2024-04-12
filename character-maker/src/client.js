import { createClient } from "@supabase/supabase-js";
const URL = "https://cjthtbhkdeemfldymjjj.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdGh0YmhrZGVlbWZsZHltampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTk1MTYsImV4cCI6MjAyODUzNTUxNn0.cV0IzrTl6qRSV_n_U35jdxy3WVBCD_rM3OaTEwMfkWk";
export const supabase = createClient(URL, API_KEY);
