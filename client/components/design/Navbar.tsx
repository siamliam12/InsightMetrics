import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <>
      <nav className="border-b justify-center items-center border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src={"/logo.png"}
                  alt="InsightMetrics Logo"
                  width={120}
                  height={120}
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  TrackMint
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Docs
                </Link>
                {/* <ModeToggle/> */}
                <SignedOut>
                  <Button variant="default" asChild>
                    <SignInButton mode="modal" />
                  </Button>
                  <Button className="bg-indigo-500" asChild>
                    <SignUpButton mode="modal" />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </>
  )
}

export default Navbar