'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: '/account', label: 'Account' },
  { href: '/app', label: 'App' },
  { href: '/security', label: 'Security' },
  { href: '/catalogs', label: 'Catalogs' },
  { href: '/settings', label: 'Settings' },
]

const Navbar=() =>{
  return (
    <header className="bg-[#000000f0]">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">Qubitz</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className=" text-white hover:text-[#9290C3] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-[#9290C3]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#000000f0]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
              <SheetTitle>Menu</SheetTitle> 
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;