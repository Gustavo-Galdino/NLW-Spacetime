'use client'

import { api } from '@/lib/api'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ButtonDeleteProps {
  id: string
  token: string | undefined
}

export function ButtonDelete({ id, token }: ButtonDeleteProps) {
  const router = useRouter()

  async function handleDeleteMemory(id: string) {
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.push('/')
  }

  return (
    <button
      onClick={() => handleDeleteMemory(id)}
      className="text-gray-400 hover:text-red-400"
    >
      <X />
    </button>
  )
}
