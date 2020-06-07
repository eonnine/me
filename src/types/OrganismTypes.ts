export interface HeaderProps {
  content: JSX.Element;
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
