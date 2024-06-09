import { connectDB } from "@/db/client";
import User from "@/models/user";

// gets user
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  console.log(request.url);
  await connectDB();

  console.log("id " + slug);
  const user = await User.findById(slug);
  console.log(user);
  return Response.json(user);
}
