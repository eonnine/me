export const ProfileValues = {
  name: "정언구",
  position: "Junior FullStack Developer",
  img: require("assets/imgs/profile.jpg"),
  navigations: [
    {
      key: "phone",
      icon: require("assets/imgs/phone.png"),
      alt: "Phone number",
      value: "010-8280-2966",
    },
    {
      key: "mail",
      icon: require("assets/imgs/email.png"),
      alt: "Email",
      value: "jeg910716@gmail.com",
    },
  ],
};

export const historyValues = {
  title: "History",
  data: [
    {
      key: "1",
      project: {
        label: "2020",
        title: "PAO 공장 에너지 관리 시스템 프론트엔드",
        tags: [
          { label: "Product", color: "gold" },
          { label: "1인", color: "red" },
          { label: "react", color: "cyan" },
          { label: "apollo", color: "cyan" },
          { label: "antd", color: "cyan" },
          { label: "styled components", color: "cyan" },
          { label: "echarts", color: "cyan" },
          { label: "webpack", color: "green" },
          { label: "git", color: "blue" },
          { label: "slack", color: "purple" },
          { label: "jira", color: "purple" },
        ],
        content: `- 실시간 발전소 데이터의 시각화를 포함한 프론트엔드 업무를 수행`,
      },
    },
    {
      key: "2",
      project: {
        label: "2020",
        title: "포스코 에너지 중개 시스템",
        tags: [
          { label: "Product", color: "gold" },
          { label: "nest.js", color: "cyan" },
          { label: "graphql", color: "cyan" },
          { label: "typescript", color: "cyan" },
          { label: "vue", color: "cyan" },
          { label: "vuex", color: "cyan" },
          { label: "apollo", color: "cyan" },
          { label: "antd", color: "cyan" },
          { label: "webpack", color: "green" },
          { label: "git", color: "blue" },
          { label: "docker", color: "volcano" },
          { label: "kubernets", color: "volcano" },
          { label: "GCP", color: "volcano" },
          { label: "slack", color: "purple" },
          { label: "notion", color: "purple" },
        ],
        content: `- Firebase 인증 Nest 모듈 및 사용자 관리 기능을 포함한 백엔드 업무 수행\n- 인증, 대시보드, 사용자 관리를 포함한 프론트엔드 업무 수행`,
      },
    },
    {
      key: "3",
      project: {
        label: "2019",
        title: "한화 에너지 관리 시스템 프론트엔드",
        tags: [
          { label: "Product", color: "gold" },
          { label: "react", color: "cyan" },
          { label: "redux", color: "cyan" },
          { label: "redux-saga", color: "cyan" },
          { label: "antd", color: "cyan" },
          { label: "styled components", color: "cyan" },
          { label: "REST", color: "cyan" },
          { label: "webpack", color: "green" },
          { label: "git", color: "blue" },
          { label: "slack", color: "purple" },
          { label: "notion", color: "purple" },
        ],
        content: `- 다국어 처리, 공통 컴포넌트, 차트를 포함한 프론트엔드 업무 수행`,
      },
    },
    {
      key: "5",
      project: {
        label: "2019",
        title: "AMD Modular",
        link: "https://github.com/eonnine/Modular",
        tags: [
          { label: "Personal", color: "gold" },
          { label: "javascript", color: "cyan" },
          { label: "browserify", color: "green" },
          { label: "git", color: "blue" },
        ],
        content: `- RequireJS같은 AMD를 구현해보고자 개발`,
      },
    },
    {
      key: "4",
      project: {
        label: "2018",
        title: "애경 화학 & 캠텍 LIMS 개발",
        tags: [
          { label: "Product", color: "gold" },
          { label: "java", color: "cyan" },
          { label: "spring", color: "cyan" },
          { label: "jQuery", color: "cyan" },
          { label: "oracle", color: "cyan" },
          { label: "mybatis", color: "cyan" },
          { label: "report designer", color: "cyan" },
          { label: "svn", color: "blue" },
        ],
        content: `- 메인 실험 프로세스, BOM 연계를 포함한 백엔드 업무 수행\n- 메인 실험 프로세스, 파일 업로드 JS 모듈, Modal JS 모듈을 포함한 프론트엔드 업무 수행\n`,
      },
    },
  ],
};

export const introduceValues = {
  title: "About me",
  data: [
    {
      key: "introduce",
      title: "Introduce",
      icon: require("assets/imgs/introduce.png"),
      content: `경력 약 3년의 주니어 개발자입니다.
새로운 기술을 습득하는데 전혀 거부감이 없으며 습득력이 빠르다는 말을 많이 듣습니다.
제 개발 방식에 대해 항상 의문점을 갖고 더 나은 방향을 고민하며, 코딩 리뷰에 열린 자세를 가지고 있습니다.

최근 관심 기술은 React Native, Blazor이며 요새 들어 프론트엔드에 끌리는 편이지만 
인프라, 백엔드, 프론트엔드 등 영역을 가리지 않고 개발을 좋아합니다.
`,
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
          title: "Dev-Tool",
          items: [
            {
              key: "git",
              label: "Git",
              img: require("assets/imgs/git.png"),
            },
            {
              key: "svn",
              label: "Svn",
              img: require("assets/imgs/svn.png"),
            },
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
          ],
        },
      ],
    },
  ],
};

export const styleValues = {
  title: "Style",
  data: [
    {
      key: "1",
      label: "뛰어난 집중력",
      color: "normal",
    },
    {
      key: "2",
      label: "빠른 습득력",
      color: "hard",
    },
    {
      key: "3",
      label: "강한 책임감",
      color: "normal",
    },
    {
      key: "4",
      label: "긍정적인 태도",
      color: "hard",
    },
    {
      key: "5",
      label: "원활한 소통",
      color: "normal",
    },
  ],
};
