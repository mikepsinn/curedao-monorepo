import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"
import { getUserVariables } from '@/lib/fdaiUserVariablesService';
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }
        // Parse the URL and query parameters from the request
    const url = new URL(req.url, `https://${req.headers.get('host')}`);
    const queryParams = Object.fromEntries(url.searchParams);
    const userVariables = await getUserVariables(session.user.id, queryParams);

    return new Response(JSON.stringify(userVariables))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
