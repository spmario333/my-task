"use client"

import { Profile } from '@/types/profile'
import { Crown, Search, Bell, LogOut, Key } from 'lucide-react'
import { DropdownMenu,DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '../ui/dropdown-menu'


export const DashboardHeader = ({ profile }: { profile: Profile | null }) => {

  const email = profile?.email
  const nombre = email?.split('@')[0]

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-lg z-40">
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full px-4 py-1.5 w-96">
        <Search className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="search" />
        <input className="bg-transparent border-none focus:ring-0 text-body-sm w-full ml-2" placeholder="Search tasks or files..." type="text" />
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>

            <div className=" w-[1px] bg-outline-variant mx-1"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-surface-container-low p-1.5 rounded-lg transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-label-md font-label-md text-on-surface">{nombre}</p>
                <p className="text-label-sm text-on-surface-variant">{profile?.role}</p>
              </div>
              <Crown className="w-8 h-8 rounded-full border border-outline-variant object-cover" />
            </div>

          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Password
                <DropdownMenuShortcut>
                    <Key/>
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Log Out
                <DropdownMenuShortcut>
                    <LogOut/>
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>

        </DropdownMenu>
      </div>
    </header>


  )
}
