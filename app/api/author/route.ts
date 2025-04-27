import { createClient } from "@/utils/supabase/server";

export async function GET(req: Request) {
    const supabase = await createClient();
    
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
  
    if (!userId) {
      return new Response(JSON.stringify({ error: 'Missing userId' }), { status: 400 });
    }
  
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("author", userId)
      .order("created_at", { ascending: false });
  
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  }
  