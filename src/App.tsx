import "./Angular/A-css/Angularcss.css";
import "./React/R-css/R-css.css";
import "./App.css";
import "./index.css";
import Layout from "./screen/Layout";
import { ThemeProvider } from "./Theme/ThemeContext"; // Ensure ThemeProvider is imported

function App() {
  return (
    <ThemeProvider>
      <div>
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
