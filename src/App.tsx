import { ExternalLink, Github } from "lucide-react";
import { styled } from "./style";

const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$md",
  alignItems: "center",
  width: "100vw",
  height: "100dvh",
  backgroundColor: "$back",
  color: "$fore",
});

const Title = styled("h1", {
  fontSize: "$xl",
  fontWeight: "bold",
  "@mobile": {
    fontSize: "$lg",
  },
  textAlign: "center",
  lineHeight: 1.2,
});

const Text = styled("span", {
  fontSize: "$md",
  textAlign: "center",
  "@mobile": {
    fontSize: "$base",
  },
});

const ProjectsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$sm",
  alignItems: "center",
  marginTop: "$lg",
  "@mobile": {
    marginTop: "$md",
  },
});

const Project = styled("div", {
  display: "flex",
  borderRadius: "8px",
  width: "50vw",
  backgroundColor: "$gray",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$sm",
  color: "$fore",
  "@mobile": {
    width: "80vw",
  },
  "& > div": {
    display: "flex",
    gap: "$sm",
    alignItems: "center",
    "& > img": {
      width: "$xxl",
      height: "$xxl",
      "@mobile": {
        width: "$xl",
        height: "$xl",
      },
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "& > h3": {
        "@mobile": {
          fontSize: "14px",
        },
      },
      "& > span": {
        "@mobile": {
          fontSize: "12px",
        },
      },
    },
  },
});

const IconContainer = styled("a", {
  padding: "$sm",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $fore",
  borderRadius: "8px",
  backgroundColor: "$gray",
  color: "$fore",
  "@mobile": {
    padding: "4px",
  },
});

function App() {
  return (
    <MainContainer>
      <Title>🛠️ Portfolio under development</Title>
      <Text>You might be interested in one of these projects</Text>
      <ProjectsContainer>
        <Project>
          <div>
            <img src="https://n.yerd.me/favicon.ico" alt="" />
            <div>
              <h3>Notez</h3>
              <span>Zen and minimalistic note taking app</span>
            </div>
          </div>
          <div>
            <IconContainer
              href="https://github.com/ethanhamilthon/notez"
              target="_blank"
            >
              <Github size={24} />
            </IconContainer>
            <IconContainer href="https://n.yerd.me" target="_blank">
              <ExternalLink size={24} />
            </IconContainer>
          </div>
        </Project>
        <Project>
          <div>
            <img src="https://w.yerd.me/favicon.ico" alt="" />
            <div>
              <h3>Sozdik</h3>
              <span>Ai-powered flash card app</span>
            </div>
          </div>
          <div>
            <IconContainer
              href="https://github.com/ethanhamilthon/sozdik"
              target="_blank"
            >
              <Github size={24} />
            </IconContainer>
            <IconContainer href="https://w.yerd.me" target="_blank">
              <ExternalLink size={24} />
            </IconContainer>
          </div>
        </Project>
      </ProjectsContainer>
    </MainContainer>
  );
}

export default App;
