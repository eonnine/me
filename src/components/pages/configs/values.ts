export const ProfileValues = {
  name: "정언구",
  position: "Junior FullStack Developer",
  img: require("assets/imgs/profile.jpg"),
  navigations: [
    {
      key: "phone",
      icon: require("assets/imgs/phone.svg"),
      alt: "Phone number",
      value: "010-8280-2966",
    },
    {
      key: "mail",
      icon: require("assets/imgs/email.svg"),
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
          { label: "node", color: "cyan" },
          { label: "nest", color: "cyan" },
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
          { label: "Firebase", color: "volcano" },
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
          { label: "zeplin", color: "purple" },
        ],
        content: `- 다국어 처리, 공통 컴포넌트, 차트를 포함한 프론트엔드 업무 수행`,
      },
    },
    {
      key: "5",
      project: {
        label: "2019",
        title: "사내 IAM 관리자 서비스",
        link: "https://github.com/eonnine/Modular",
        tags: [
          { label: "Product", color: "gold" },
          { label: "node", color: "cyan" },
          { label: "molecular", color: "cyan" },
          { label: "vue", color: "cyan" },
          { label: "REST", color: "cyan" },
          { label: "docker", color: "volcano" },
          { label: "kubernetes", color: "volcano" },
          { label: "GCP", color: "volcano" },
          { label: "Firebase", color: "volcano" },
        ],
        content: `- 사내 IAM 관리자용 대시보드 개발`,
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
      icon: require("assets/imgs/introduce.svg"),
      content: `경력 약 3년의 주니어 개발자입니다.
새로운 기술을 습득하는데 전혀 거부감이 없으며 습득력이 빠르다는 말을 많이 듣습니다.
제 개발 방식에 대해 항상 의문점을 갖고 더 나은 방향을 고민하며, 코딩 리뷰에 열린 자세를 가지고 있습니다.

최근 관심 기술은 React Native, Svelte이며 요새 들어 프론트엔드에 끌리는 편이지만 인프라, 백엔드, 프론트엔드 등 영역을 가리지 않고 개발을 좋아합니다.
`,
    },
    {
      key: "skill",
      title: "Skill",
      icon: require("assets/imgs/skill.svg"),
      list: [
        {
          key: "frontend",
          title: "Front-End",
          items: [
            {
              key: "html",
              label: "HTML",
              img: require("assets/imgs/html5.svg"),
            },
            { key: "css", label: "CSS", img: require("assets/imgs/css3.svg") },
            {
              key: "js",
              label: "Javascript",
              img: require("assets/imgs/js.svg"),
            },
            {
              key: "react",
              label: "React",
              img: require("assets/imgs/react.svg"),
            },
            { key: "vue", label: "Vue", img: require("assets/imgs/vue.svg") },
            {
              key: "apollo",
              label: "Apollo",
              img: require("assets/imgs/apollo.svg"),
            },
            {
              key: "jq",
              label: "jQuery",
              img: require("assets/imgs/jQuery.svg"),
            },
            {
              key: "webpack",
              label: "Webpack",
              img: require("assets/imgs/webpack.svg"),
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
              img: require("assets/imgs/java.svg"),
            },
            {
              key: "spring",
              label: "Spring",
              img: require("assets/imgs/spring.svg"),
            },
            {
              key: "node",
              label: "Node",
              img: require("assets/imgs/node.svg"),
            },
            {
              key: "ts",
              label: "Typescript",
              img: require("assets/imgs/typescript.svg"),
            },
            {
              key: "gq",
              label: "GraphQL",
              img: require("assets/imgs/graphql.svg"),
            },
            {
              key: "oracle",
              label: "Oracle",
              img: require("assets/imgs/oracle.svg"),
            },
            {
              key: "mysql",
              label: "Mysql",
              img: require("assets/imgs/mysql.svg"),
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
              img: require("assets/imgs/git.svg"),
            },
            {
              key: "svn",
              label: "Svn",
              img: require("assets/imgs/svn.svg"),
            },
            {
              key: "docker",
              label: "Docker",
              img: require("assets/imgs/docker.svg"),
            },
            {
              key: "kube",
              label: "Kubernetes",
              img: require("assets/imgs/kubernetes.svg"),
            },
            { key: "gcp", label: "GCP", img: require("assets/imgs/gcp.svg") },
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
