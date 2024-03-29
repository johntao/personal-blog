import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString()
    
    if (req.method === 'POST') {
      const upsert = await prisma.views.upsert({
        where: { slug },
        create: { slug, },
        update: {
          count: { increment: 1, },
        },
      })

      return res.status(200).json({ total: upsert.count.toString(), })
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: { slug, },
      })

      return res.status(200).json({ total: views?.count?.toString?.() || 0 })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
