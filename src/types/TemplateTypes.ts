import { AvatarProps } from "./AtomTypes";
import { organismTypes } from "types";

interface DashboardContent {
  title: string;
  data: Array<organismTypes.ArticleContent>;
}
export interface DashboardProps {
  sider: AvatarProps;
  history: DashboardContent;
  introduce: DashboardContent;
  style: DashboardContent;
}

export interface Skill {
  key: string;
  label: string;
  img: string;
}

export interface SectionValues {
  key: string;
  title: string;
  items: Array<Skill>;
}
