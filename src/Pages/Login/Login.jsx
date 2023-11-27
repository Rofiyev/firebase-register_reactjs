import { Button, Container } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import { MyContext } from "../..";

const Login = () => {
  const { auth, firebase } = useContext(MyContext);

  const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  const loginGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <Container
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        height: "90vh",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{ textTransform: "capitalize" }}
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={loginGoogle}
      >
        Sign in Google Account
      </Button>
      <Button
        sx={{
          textTransform: "capitalize",
          bgcolor: "#505050",
          "&:hover": { background: "#3d3d3d" },
        }}
        variant="contained"
        startIcon={<GitHubIcon />}
        onClick={loginGitHub}
      >
        Sign in GitHub Account
      </Button>
    </Container>
  );
};

export default Login;
