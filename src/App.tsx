import React from "react";
import linkedinLogo from "./assets/linkedin-logo.png";
import instagramLogo from "./assets/instagram-logo.png";
import githubLogo from "./assets/github-logo.png";
import youtubeLogo from "./assets/youtube-logo.png";

const styles = {
  container: {
    backgroundColor: "#040421",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "collumn",
    gap: "20px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "70px",
    padding: "10px",
    backgroundColor: "#040421",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  linkedinLogo: {
    width: "20px",
    height: "20px",
  },
  instagramLogo: {
    width: "20px",
    height: "20px",
  },
  githubLogo: {
    width: "35px",
    height: "20px",
  },
  youtubeLogo: {
    width: "20px",
    height: "20px",
  },
};

function App() {
  const linkedinLink = "https://www.linkedin.com/in/vitor-santos-6b2727211/";
  const instagramLink = "https://www.instagram.com/vitorsantosic/";
  const githubLink = "https://github.com/vitorsantos100798?tab=repositories";
  const youtubeLink =
    "https://www.youtube.com/channel/UCuAgCSAOAWiI-mv_NzUerXg";

  return (
    <div style={styles.container}>
      <div
        style={{
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.5)",
        }}
      >
        <a
          href={linkedinLink}
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <button style={styles.button}>
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              style={styles.linkedinLogo}
            />
            LinkedIn
          </button>
        </a>
        <a
          href={instagramLink}
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <button style={styles.button}>
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              style={styles.instagramLogo}
            />
            Instagram
          </button>
        </a>
        <a
          href={githubLink}
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <button style={styles.button}>
            <img src={githubLogo} alt="GitHub Logo" style={styles.githubLogo} />
            GitHub
          </button>
        </a>
        <a
          href={youtubeLink}
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <button style={styles.button}>
            <img
              src={youtubeLogo}
              alt="YouTube Logo"
              style={styles.youtubeLogo}
            />
            YouTube
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
