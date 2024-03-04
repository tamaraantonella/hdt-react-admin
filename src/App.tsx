import { Admin, Resource } from "react-admin";
import { authProvider } from "./authProvider";
import { CategoryEdit } from "./components/categories/category-edit";
import { CategoryList } from "./components/categories/category-list";
import { CollectionCreate } from "./components/collections/collection-create";
import { CollectionEdit } from "./components/collections/collection-edit";
import { CollectionList } from "./components/collections/collection-list";
import { dataProvider } from "./dataProvider";
import { CategoryCreate } from "./components/categories/category-create";
import { ProductList } from "./components/products/product-list";
import { ProductEdit } from "./components/products/product-edit";
import { ProductCreate } from "./components/products/product-create";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="collections"
      list={CollectionList}
      create={CollectionCreate}
      edit={CollectionEdit}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
  </Admin>
);
