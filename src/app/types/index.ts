export interface NavItem {
    title: string;
    href: string;
    icon: React.ElementType;
    subitems?: NavItem[];
  }