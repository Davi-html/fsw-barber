"use client"

import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Davi</h2>
        <p>Segnda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner01.png"
            alt="Banner 01"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
