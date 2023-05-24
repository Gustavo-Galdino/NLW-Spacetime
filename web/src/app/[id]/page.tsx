'use client'

import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  link: string
  content: string
  createdAt: string
}

interface UserMemory {
  id: string
  name: string
  avatarUrl: string
  memories: Memory[]
}

export default function User() {
  const [userMemory, setUserMemory] = useState<UserMemory[]>([])
  const params = useParams()

  async function getUserMemory() {
    const response = await api.get(`/user/${params}`)

    setUserMemory(response.data)
  }

  useEffect(() => {
    getUserMemory()
  }, [])

  return (
    <div className="flex flex-col gap-10 p-8">
      {userMemory!.map((user) =>
        user.memories.map((memory) => {
          return (
            <div key={memory.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
                  {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
                </time>
              </div>
              <Image
                src={memory.coverUrl}
                alt=""
                width={592}
                height={280}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <p className="text-lg leading-relaxed text-gray-100">
                {memory.content}
              </p>

              {memory.link && (
                <Link
                  href={memory.link}
                  className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
                >
                  Ir para Repositório
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )
        }),
      )}
    </div>
  )
}
