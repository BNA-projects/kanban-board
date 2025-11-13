import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtvhliurdhiyuzswixrk.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dmhsaXVyZGhpeXV6c3dpeHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODAyMTYsImV4cCI6MjA3ODU1NjIxNn0.u7V_acmKPKVObCP8XLQ8ikNVgfx9BHEF3VcDg4g8yvw"; 

export const supabase = createClient(supabaseUrl, supabaseKey);
