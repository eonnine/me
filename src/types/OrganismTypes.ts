export interface HeaderProps {
  content: JSX.Element;
}

export interface ArticleContent {
  key: number;
  title: string;
  icon: string;
  section: JSX.Element;
}
export interface ArticleProps {
  title: string;
  sections: Array<ArticleContent>;
}
