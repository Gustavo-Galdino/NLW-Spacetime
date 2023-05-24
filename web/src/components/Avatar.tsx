'use client'

import { api } from '@/lib/api'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface AvatarProps {
  id: string
  name: string
  avatarUrl: string
}

export function Avatar() {
  const [userAvatar, setUserAvatar] = useState<AvatarProps[]>([])
  const params = useParams()

  async function getUserMemory() {
    const response = await api.get(`/user/${params}`)

    setUserAvatar(response.data)
  }

  useEffect(() => {
    getUserMemory()
  }, [])

  return (
    <div className="flex items-center gap-3 text-left max-sm:w-full">
      {userAvatar.map((avatar) => (
        <>
          <Image
            key={avatar.id}
            src={avatar.avatarUrl}
            width={40}
            height={40}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <p className="max-w-[140px] text-sm leading-snug">{avatar.name}</p>
        </>
      ))}
    </div>
  )
}
