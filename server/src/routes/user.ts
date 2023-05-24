import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function userRoutes(app: FastifyInstance) {
  app.get('/user/:id', async (request) => {
    const bodySchema = z.object({
      id: z.string(),
      login: z.any(),
      name: z.any(),
      avatarUrl: z.any(),
      memories: z.any(),
    })

    const { login } = bodySchema.parse(request.params)

    const users = await prisma.user.findMany({
      where: {
        login,
      },
      include: {
        memories: true,
      },
    })

    return users.map((user) => {
      return {
        id: user.id,
        login: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
        memories: user.memories,
      }
    })
  })
}
