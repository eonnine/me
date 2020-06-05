export const historyValues = {
  title: "History",
};

export const introduceValues = {
  title: "About me",
  data: [
    {
      key: "introduce",
      title: "Introduce",
      icon: require("assets/imgs/introduce.png"),
    },
    {
      key: "skill",
      title: "Skill",
      icon: require("assets/imgs/skill.png"),
      list: [
        {
          key: "frontend",
          title: "Front-End",
          items: [
            {
              key: "html",
              label: "HTML",
              img: require("assets/imgs/html5.png"),
            },
            { key: "css", label: "CSS", img: require("assets/imgs/css3.png") },
            {
              key: "js",
              label: "Javascript",
              img: require("assets/imgs/js.png"),
            },
            {
              key: "react",
              label: "React",
              img: require("assets/imgs/react.png"),
            },
            { key: "vue", label: "Vue", img: require("assets/imgs/vue.png") },
            {
              key: "apollo",
              label: "Apollo",
              img: require("assets/imgs/apollo.png"),
            },
            {
              key: "jq",
              label: "jQuery",
              img: require("assets/imgs/jQuery.png"),
            },
            {
              key: "webpack",
              label: "Webpack",
              img: require("assets/imgs/webpack.png"),
            },
          ],
        },
        {
          key: "backend",
          title: "Back-End",
          items: [
            {
              key: "java",
              label: "Java",
              img: require("assets/imgs/java.png"),
            },
            {
              key: "spring",
              label: "Spring",
              img: require("assets/imgs/spring.png"),
            },
            {
              key: "node",
              label: "Node",
              img: require("assets/imgs/node.png"),
            },
            {
              key: "ts",
              label: "Typescript",
              img: require("assets/imgs/typescript.png"),
            },
            {
              key: "gq",
              label: "GraphQL",
              img: require("assets/imgs/graphql.png"),
            },
            {
              key: "oracle",
              label: "Oracle",
              img: require("assets/imgs/oracle.png"),
            },
            {
              key: "mysql",
              label: "Mysql",
              img: require("assets/imgs/mysql.png"),
            },
          ],
        },
        {
          key: "etc",
          title: "Dev Tool",
          items: [
            { key: "git", label: "Git", img: require("assets/imgs/git.png") },
            {
              key: "docker",
              label: "Docker",
              img: require("assets/imgs/docker.png"),
            },
            {
              key: "kube",
              label: "Kubernetes",
              img: require("assets/imgs/kubernetes.png"),
            },
            { key: "gcp", label: "GCP", img: require("assets/imgs/gcp.png") },
            { key: "svn", label: "Svn", img: require("assets/imgs/svn.png") },
          ],
        },
      ],
    },
    {
      key: "contact",
      title: "Contact",
      icon: require("assets/imgs/contact.png"),
    },
  ],
};
