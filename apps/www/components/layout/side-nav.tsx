import {
  BadgeDollarSign,
  BarChart,
  Briefcase,
  Building,
  CreditCard,
  DollarSign,
  HelpCircle,
  Layers,
  LayoutDashboard,
  PiggyBank,
  Repeat2,
  Settings,
  Sparkle,
  Sprout,
  Tag,
  Wallet,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Nav } from "./side-nav-wrapper";

export const SideNav = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: LayoutDashboard,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Transactions",
            label: "9",
            icon: Layers,
            variant: "ghost",
            link: "/dashboard/transactions",
          },
          {
            title: "Accounts",
            label: "3",
            icon: CreditCard,
            variant: "ghost",
            link: "/dashboard/accounts",
          },
          {
            title: "Investments",
            label: "",
            icon: BarChart,
            variant: "ghost",
            link: "/dashboard/investments",
          },
          {
            title: "Categories",
            label: "",
            icon: Tag,
            variant: "ghost",
            link: "/dashboard/categories",
          },
          {
            title: "Recurring",
            label: "",
            icon: Repeat2,
            variant: "ghost",
            link: "/dashboard/recurring",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Ai Magic",
            label: "",
            icon: Sparkle,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Save Money",
            label: "",
            icon: Wallet,
            variant: "ghost",
            link: "/dashboard/savemoney",
          },
          {
            title: "Grow Assets",
            label: "",
            icon: Sprout,
            variant: "ghost",
            link: "/dashboard/",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Credit Card",
            label: "972",
            icon: CreditCard,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Credit Card",
            label: "342",
            icon: CreditCard,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Checking",
            label: "128",
            icon: DollarSign,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Savings",
            label: "8",
            icon: PiggyBank,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Banking",
            label: "21",
            icon: Building,
            variant: "ghost",
            link: "/dashboard/",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Funds",
            label: "483",
            icon: Briefcase,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Coinbase",
            label: "145",
            icon: BadgeDollarSign,
            variant: "ghost",
            link: "/dashboard/",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Get help",
            label: "",
            icon: HelpCircle,
            variant: "ghost",
            link: "/dashboard/",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            link: "/dashboard/",
          },
        ]}
      />
    </>
  );
};
