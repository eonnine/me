export const ProfileValues = {
  name: "정언구",
  position: "Junior FullStack Developer",
  img: require("assets/imgs/profile.png"),
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
      key: "watch-clone",
      project: {
        label: "2020",
        title: "CURI - 교육 앱 어플리케이션",
        tags: [
          { label: "Product", color: "gold" },
          { label: "Vue", color: "cyan" },
          { label: "Vuetify", color: "cyan" },
          { label: "Bootstrap-vue", color: "cyan" },
          { label: "SASS", color: "cyan" },
          { label: "webpack", color: "green" },
          { label: "git", color: "blue" },
          { label: "slack", color: "purple" },
          { label: "jira", color: "purple" },
        ],
        content: `- 하이브리드 웹앱 CURI의 웹뷰를 개발
- 해당 서비스를 관리하는 백오피스 시스템의 프론트엔드를 담당하여 Vue의 개발 환경 구성, 아토믹 디자인 패턴을 
  적용한 프로젝트 구조 설계, 공통 컴포넌트를 작성
`,
      },
    },
    {
      key: "pao",
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
          { label: "SASS", color: "cyan" },
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
      key: "psc",
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
      key: "hw",
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
      key: "ak",
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
      content: `안녕하세요. 개발을 게임처럼 즐기는 경력 약 3년의 주니어 개발자입니다.
저는 새로운 기술을 습득하는데 적극적이며 습득력이 빠르다는 평가를 자주 듣습니다.
또한, 제 개발 방식에 대해 항상 개선 의식을 갖고 더 나은 방향을 고민하며, 코딩 리뷰에 열린 자세를 가지고 있습니다.
      
최근 관심 기술은 Svelte이며 웹 접근성, 웹 표준, 반응형 웹, 크로스 브라우징 등 실력있는 프론트엔드 개발자로서 성장하는 꿈을 향해 노력하고 있습니다.

감사합니다.
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
          img: require("assets/imgs/skill.svg"),
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
          img: require("assets/imgs/skill.svg"),
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
              key: "gq",
              label: "GraphQL",
              img: require("assets/imgs/graphql.svg"),
            },
            {
              key: "oracle",
              label: "Oracle",
              img: require("assets/imgs/oracle.svg"),
            },
          ],
        },
        {
          key: "etc",
          title: "Dev-Tool",
          img: require("assets/imgs/skill.svg"),
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
