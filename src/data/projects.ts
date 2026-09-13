import { Folder, type LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  { id: "project-1", icon: Folder },
  { id: "project-2", icon: Folder },
  { id: "project-3", icon: Folder },
];
