import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1") || 1;
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10") || 10;
  const searchString = req.nextUrl.searchParams.get("searchString")

  const skip = (page - 1) * limit
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .range(skip, skip + limit - 1)
    .ilike("title", `%${searchString || ''}%`)
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const { title, body, category, thumbnail } = await req.json();

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  if (!title || !body || !category || !thumbnail) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const { data, error } = await supabase
    .from('blogs')
    .insert({
      title,
      body,
      category,
      thumbnail,
      author: user.id,
    })
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
