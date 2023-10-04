import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://liiwiwaremjzzcyctpzh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpaXdpd2FyZW1qenpjeWN0cHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNjk0NzIsImV4cCI6MjAxMTk0NTQ3Mn0.rffi5W5n_wlMTegUSHsTU793w-_JGGhYmD79a0SGwgE';

const supabase = createClient( supabaseUrl, supabaseAnonKey )

export default supabase;