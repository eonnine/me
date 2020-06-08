import React from "react";
import { Title } from "components/atoms/display";
import { Section } from "components/molecules/display";
import { organismTypes } from "types";

import "styles/components/organisms/layout/Article.scss";

function Article(props: organismTypes.ArticleProps) {
  const { title, sections } = props;

  const content = sections.map((item) => {
    const { key, title: sesctionTitle, icon, section } = item;
    return (
      <Section
        key={key}
        title={sesctionTitle}
        icon={icon}
        content={section}
        h={3}
      />
    );
  });

  return (
    <article className="article-container">
      <Title h={2} value={title} />
      {content}
    </article>
  );
}

export default Article;
