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
