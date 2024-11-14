'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '../ui/icons';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { NavItem } from '../../app/types/index';

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Icons.home,
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Icons.dashboard,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Icons.projects,
  },
  {
    title: 'Tasks',
    href: '/tasks',
    icon: Icons.tasks,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Icons.settings,
    subitems: [
      {
        title: 'My details',
        href: '/settings/details',
        icon: Icons.profile,
      },
      {
        title: 'My profile',
        href: '/settings/profile',
        icon: Icons.profile,
      },
      {
        title: 'Security',
        href: '/settings/security',
        icon: Icons.security,
      },
      {
        title: 'Integrations',
        href: '/settings/integrations',
        icon: Icons.integrations,
      },
      {
        title: 'Billing',
        href: '/settings/billing',
        icon: Icons.billing,
      },
    ],
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: Icons.messages,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <aside
      className={cn(
        "w-full md:w-64 flex-col bg-white dark:bg-neutral-900 px-3 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2 px-2">
        <div className="h-6 w-6">
          <Icons.dashboard className="h-6 w-6 text-orange-500" />
        </div>
        <h1 className="text-lg font-semibold">Overview</h1>
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-1">
        <div className="mb-4">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900"
          />
        </div>

        <div className="flex items-center justify-between px-2 py-1 text-sm">
          <span>My account</span>
          <span className="text-neutral-500">Shared with me</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isSettings = item.title === 'Settings';
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <div key={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-between px-2 py-2",
                    isActive && "bg-neutral-100 dark:bg-neutral-800"
                  )}
                  asChild
                  onClick={isSettings ? () => setOpenSettings(!openSettings) : undefined}
                >
                  {isSettings ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {isSettings && (
                        <div className="ml-auto">
                          {openSettings ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  )}
                </Button>

                {isSettings && openSettings && item.subitems && (
                  <div className="ml-4 flex flex-col gap-1 border-l pl-2 mt-1">
                    {item.subitems.map((subitem) => {
                      const SubIconComponent = subitem.icon;
                      const isSubActive = pathname === subitem.href;

                      return (
                        <Button
                          key={subitem.href}
                          variant={isSubActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-2 px-2 py-2",
                            isSubActive && "bg-neutral-100 dark:bg-neutral-800"
                          )}
                          asChild
                        >
                          <Link href={subitem.href}>
                            <SubIconComponent className="h-4 w-4" />
                            <span>{subitem.title}</span>
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

      </div>
    </aside>
  );
}