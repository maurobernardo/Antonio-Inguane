import { Compass, Database, Users, Sprout, type LucideIcon } from "lucide-react";

export type ApproachStep = {
  number: string;
  key: string;
  icon: LucideIcon;
};

export const approachSteps: ApproachStep[] = [
  { number: "01", key: "step1", icon: Compass },
  { number: "02", key: "step2", icon: Database },
  { number: "03", key: "step3", icon: Users },
  { number: "04", key: "step4", icon: Sprout },
];
