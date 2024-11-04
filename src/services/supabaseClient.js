import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://rguntbanyapxzzwpisxd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJndW50YmFueWFweHp6d3Bpc3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDkwNDMsImV4cCI6MjA0MzkyNTA0M30.qdG6yE6qdrJGEUzIEN5XkxcIDNH3_B_STf2g-YehyTg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
