import { ProfileProps } from "./MoleculeTypes";
import { organismTypes } from "types";

interface DashboardContent {
  title: string;
  data: Array<organismTypes.ArticleContent>;
}
export interface DashboardProps {
  header: ProfileProps;
  history: DashboardContent;
  introduce: DashboardContent;
  style: DashboardContent;
}

export interface Skill {
  key: string;
  label: string;
  img: string;
}

export interface SkillValues {
  key: string;
  title: string;
  items: Array<Skill>;
}

export interface ContactValues {
  key: string;
  icon: string;
  content: string;
}
