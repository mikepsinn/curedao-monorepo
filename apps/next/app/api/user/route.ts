import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import {handleError} from "@/lib/errorHandler";
import { getOrCreateFdaiUser } from '@/lib/fdaiUserService';
export async function GET(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new Response(null, { status: 403 })
    }
    const fdaiUser = await getOrCreateFdaiUser(session.user.id);
    return new Response(JSON.stringify(fdaiUser), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (error) {
    return handleError(error)
  }
}
