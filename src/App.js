/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Navbar from "./Navbar";
import Home from "./Home";

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
      <div css={styles.content}>
        <Home />
      </div>
    </div>
  );
}

export default App;
