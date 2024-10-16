
"use client";
import { Card } from '@/components/ui/card';
import {cn} from '@/lib/utils';
import { UserButton } from '@clerk/nextjs'
import { MessageSquare } from 'lucide-react'
import React from 'react'



const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  }
]

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">

      <h2 className="text-2xl md:text 4-xl font-bold text-center">

      <h2 className="text-2xl md:text 4-xl font-bold">

        Explore the Power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm
      md:text-lg text-center">
        Chat with the smartest AI - Experience the power of AI
      </p>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tools) => (
          <Card 
          key={tools.href}
          className="p-4 border-black/5 flex items-center
          justify-between hover:shadow-md transition 
          cursor-pointer">
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit")}>

            </div>
          </div>
          </Card>
        ))}
      </div>
      </div>
     
    </div>
  )
}

export default DashboardPage
