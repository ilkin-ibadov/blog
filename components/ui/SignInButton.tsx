'use client'

import Link from 'next/link'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export function SignInButton() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        window.location.reload()  // 🔥 sadece giriş veya çıkış olunca reload
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <Link
      href={user ? '/Profile' : '/sign-in'}
      className={`px-4 py-2 text-sm font-normal rounded-[5px] hover:opacity-90 inline-block ${current.signInBtnBg} ${current.signInBtnText}`}
    >
      {user ? 'Profile' : 'Sign in'}
    </Link>
  )
}