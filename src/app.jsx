import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
