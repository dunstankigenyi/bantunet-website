import {
  BadgeCheck,
  Banknote,
  CreditCard,
  FileText,
  Globe2,
  HandCoins,
  LifeBuoy,
  LockKeyhole,
  MapPin,
  MapPinned,
  Network,
  RadioTower,
  Route,
  ScanSearch,
  Settings,
  ShieldCheck,
  Smartphone,
  Trash2,
  UserCheck,
  UserPlus,
  Users,
  Wifi,
  type LucideIcon
} from "lucide-react";
import type { IconName } from "@/content/siteContent";

const icons: Record<IconName, LucideIcon> = {
  badgeCheck: BadgeCheck,
  banknote: Banknote,
  creditCard: CreditCard,
  fileText: FileText,
  globe2: Globe2,
  handCoins: HandCoins,
  lifeBuoy: LifeBuoy,
  lockKeyhole: LockKeyhole,
  mapPin: MapPin,
  mapPinned: MapPinned,
  network: Network,
  radioTower: RadioTower,
  route: Route,
  scanSearch: ScanSearch,
  settings: Settings,
  shieldCheck: ShieldCheck,
  smartphone: Smartphone,
  trash2: Trash2,
  userCheck: UserCheck,
  userPlus: UserPlus,
  users: Users,
  wifi: Wifi
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const Component = icons[name];

  return <Component aria-hidden="true" className={className} strokeWidth={1.9} />;
}
