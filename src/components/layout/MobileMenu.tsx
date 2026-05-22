// 'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { X, ChevronDown, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, COMPANY } from '@/lib/constants'

type NavItem = {
  label: string
  href: string
  children?: readonly { label: string; href: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      {hasChildren ? (
        <>
          <div className="flex items-center">
            <Link
              href={item.href}
              onClick={onClose}
              className="flex-1 py-4 text-lg font-medium text-primary font-heading"
            >
              {item.label}
            </Link>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-4 text-primary-600 hover:text-primary transition-colors"
              aria-expanded={expanded}
              aria-label={`Toggle ${item.label} submenu`}
            >
              <ChevronDown
                className={cn(
                  'h-5 w-5 transition-transform duration-200',
                  expanded && 'rotate-180'
                )}
              />
            </button>
          </div>

          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="pb-4 pl-4 space-y-1">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2.5 px-4 text-sm text-primary-600 hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors duration-150"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="block py-4 text-lg font-medium text-primary font-heading"
        >
          {item.label}
        </Link>
      )}
    </div>
  )
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary-900/50 backdrop-blur-sm" />
        </TransitionChild>

        {/* Panel */}
        <div className="fixed inset-0 flex justify-end">
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="relative w-full max-w-sm bg-white shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
                  <div className="flex items-center">
                    <Image
                      src="/images/CTS Logo Long(Blue).png"
                      alt="CTS Offshore & Marine"
                      width={180}
                      height={26}
                      className="h-9 w-auto"
                    />
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 -mr-2 text-primary-600 hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Nav Items */}
                <div className="flex-1 overflow-y-auto px-6 py-2">
                  {(NAV_ITEMS as readonly NavItem[]).map((item) => (
                    <MobileNavItem key={item.label} item={item} onClose={onClose} />
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-neutral-200 px-6 py-6 space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="flex items-center gap-3 text-sm text-primary-600 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {COMPANY.phone}
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 text-sm text-primary-600 hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {COMPANY.email}
                    </a>
                  </div>

                  {/* CTA Button */}
                  {/* <button
                    onClick={() => {
                      onClose()
                      window.dispatchEvent(new Event('open-emergency-chat'))
                    }}
                    className="flex w-full items-center justify-center gap-2 py-3 px-6 text-center font-heading font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    <Phone className="h-4 w-4" />
                    Emergency Response
                  </button> */}
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
