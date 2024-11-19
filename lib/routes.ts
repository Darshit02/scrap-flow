import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon,  LucideIcon } from "lucide-react";

interface Route {
  href: string;
  label: string;
  icon: LucideIcon; 
}

export const routes: Route[] = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "/credentials", 
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export default routes;
