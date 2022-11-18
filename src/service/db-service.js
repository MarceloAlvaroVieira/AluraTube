import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://ukmauxhzhtffevapiuik.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbWF1eGh6aHRmZmV2YXBpdWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MzU5NTksImV4cCI6MTk4NDMxMTk1OX0.Y9D3YCBL7-TiJUIXBMc9qmTyDtbIAfERgEAtucPtVMY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase.from("Video");