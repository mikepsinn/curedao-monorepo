import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { userNameSchema } from "@/lib/validations/user"
import {handleError} from "@/lib/errorHandler";

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

interface DatabaseError extends Error {
  code: string;
  meta?: {
    target?: string[];
  };
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context)
    const session = await getServerSession(authOptions)

    if (!session?.user || params.userId !== session?.user.id) {
      return new Response(null, { status: 403 })
    }

    // Edit username based on input
    const body = await req.json()
    const payload = userNameSchema.parse(body)

    try {
      await db.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          username: payload.username,
          updatedAt: new Date(),
        },
      })
    } catch (error) {
      const dbError = error as DatabaseError;
      if (dbError.code === 'P2002' && dbError.meta?.target?.includes('username')) {
        return new Response(JSON.stringify({ message: "Username is already taken" }), { status: 409, headers: { 'Content-Type': 'application/json' } })
      }
      throw error;
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
