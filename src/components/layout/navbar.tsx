import { 
  Home,
  LayoutDashboard,
  FolderClosed,
  Settings,
  User,
  Shield,
  Grid,
  Mail,
  HelpCircle,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../themeButton';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const navIcons = [
  {
    icon: LayoutDashboard,
    href: '/dashboard',
    variant: 'orange',
  },
  {
    icon: Home,
    href: '/',
  },
  {
    icon: Mail,
    href: '/messages',
  },
  {
    icon: FolderClosed,
    href: '/projects',
  },
  {
    icon: Grid,
    href: '/tasks',
  },
  {
    icon: Shield,
    href: '/settings/security',
  },
  {
    icon: Bell,
    href: '/settings/integrations',
  }
];

const bottomIcons = [
  {
    icon: HelpCircle,
    href: '/settings/details',
  },
  {
    icon: Settings,
    href: '/settings/profile',
  }
];

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn(
      "flex md:w-[68px] md:flex-col items-center justify-between bg-white px-4 md:px-2 py-2 md:py-4 dark:bg-neutral-900",
      className
    )}>
      <div className="flex md:flex-col items-center gap-4">
        {navIcons.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800",
              index === 0 && "text-orange-500"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-5 w-5" />
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex md:flex-col items-center gap-4">
        {bottomIcons.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-5 w-5" />
            </Link>
          </Button>
        ))}
        <Link
          className="rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          href="/profile"
        >
          <img 
            src="/vercel.svg"
            alt="Profile" 
            className="h-7 w-7 rounded-full object-cover"
          />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}