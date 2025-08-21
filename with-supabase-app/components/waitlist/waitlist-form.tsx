'use client'

import { toast } from 'sonner'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implementar integração com banco de dados
      toast.success('Email adicionado com sucesso!')
      setEmail('')
    } catch (error) {
      toast.error('Erro ao adicionar email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" loading={loading}>
        Entrar
      </Button>
    </form>
  )
}
