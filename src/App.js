/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Navbar from "./Navbar";
import Home from "./Home";
import InputText from "./InputText";

const styles = {
  content: css`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `,
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}></div>

      <InputText />
      <Home />
    </div>
  );
}

export default App;
