import { createClient } from "@supabase/supabase-js";
const URL = "https://ewifbhreuzbyzywuwsqp.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3aWZiaHJldXpieXp5d3V3c3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MjE2NzUsImV4cCI6MjAyODQ5NzY3NX0.hLfvFe2T8FXY52lt1euYOfwnhKqfRHgeFkinYe-qNEc";
export const supabase = createClient(URL, API_KEY);
