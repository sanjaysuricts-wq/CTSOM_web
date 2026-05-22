'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'

type NavItem = {
  label: string
  href: string
  children?: readonly { label: string; href: string }[]
}

interface NavigationProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Navigation({ variant = 'dark', className }: NavigationProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-800'
  const hoverColor = variant === 'light' ? 'hover:text-accent' : 'hover:text-primary'
  const dropdownBg = 'bg-white'

  return (
    <nav className={cn('hidden lg:flex items-center gap-1', className)} role="navigation" aria-label="Main navigation">
      {(NAV_ITEMS as readonly NavItem[]).map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <Menu as="div" className="relative" key={item.label}>
              {({ open }) => (
                <>
                  <MenuButton
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                      textColor,
                      hoverColor,
                      open && (variant === 'light' ? 'text-accent' : 'text-primary')
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        open && 'rotate-180'
                      )}
                    />
                  </MenuButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <MenuItems
                      className={cn(
                        'absolute left-0 z-50 mt-2 w-64 origin-top-left rounded-xl shadow-lg ring-1 ring-black/5 focus:outline-none',
                        dropdownBg,
                        'p-2'
                      )}
                    >
                      {/* Parent link */}
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href={item.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm font-semibold text-primary rounded-lg transition-colors duration-150',
                              focus && 'bg-neutral-100'
                            )}
                          >
                            All {item.label}
                          </Link>
                        )}
                      </MenuItem>

                      <div className="my-1 h-px bg-neutral-200" />

                      {item.children!.map((child) => (
                        <MenuItem key={child.href}>
                          {({ focus }) => (
                            <Link
                              href={child.href}
                              className={cn(
                                'block px-4 py-2.5 text-sm text-primary-700 rounded-lg transition-colors duration-150',
                                focus && 'bg-neutral-100 text-primary'
                              )}
                            >
                              {child.label}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
          )
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
              textColor,
              hoverColor
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
