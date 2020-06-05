import React from "react";
import { Title } from "components/atoms/entry";
import { Icon } from "components/atoms/display";

import "styles/components/organisms/layout/Article.scss";

function Article() {
  return (
    <article className="article-container">
      <Title sub={false} h={1} value="About Me" />
      <Title
        sub={true}
        h={1}
        value="Introduce"
        prefix={<Icon src={require("assets/imgs/introduce.png")} />}
      />
    </article>
  );
}

export default Article;
