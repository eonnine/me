import { ProfileProps } from "./MoleculeTypes";

export interface HeaderProps {
  data: ProfileProps;
}

export interface ArticleContent {
  key: string;
  title?: string;
  icon?: string;
  section?: JSX.Element;
  [key: string]: any;
}
export interface ArticleProps {
  title: string;
  sections: Array<ArticleContent>;
}
