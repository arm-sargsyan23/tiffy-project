import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DiscountPage,
  ForWomenPage,
  ForMenPage,
  NewProductsPage,
  ProductPage,
  SearchPage,
  ContactsPage,
  CategoryPage
} from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/for_women" element={<ForWomenPage />} />
          <Route path="/for_men" element={<ForMenPage />} />
          <Route path="/new_products" element={<NewProductsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
