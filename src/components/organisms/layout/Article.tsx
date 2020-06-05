import React from "react";
import { Title } from "components/atoms/entry";
import { Section } from "components/molecules/display";
import { organismTypes } from "types";

import "styles/components/organisms/layout/Article.scss";

function Article(props: organismTypes.ArticleProps) {
  const { title, sections } = props;

  const content = sections.map((item) => {
    const { key, title, icon, section } = item;
    return <Section key={key} title={title} icon={icon} content={section} />;
  });

  return (
    <article className="article-container">
      <Title value={title} />
      {content}
    </article>
  );
}

export default Article;
