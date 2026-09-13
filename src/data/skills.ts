import {
  Scale,
  TreePine,
  MapPinned,
  Leaf,
  Users,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  key: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { key: "politicas", icon: Landmark },
  { key: "recursos", icon: TreePine },
  { key: "land", icon: Scale },
  { key: "gis", icon: MapPinned },
  { key: "ambiente", icon: Leaf },
  { key: "stakeholders", icon: Users },
];
