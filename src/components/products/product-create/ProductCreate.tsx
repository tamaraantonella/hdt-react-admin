import {
  BooleanInput,
  Create,
  NumberInput,
  SimpleForm,
  TextInput
} from "react-admin";

export const ProductCreate = (props: any) => {
  return (
    <Create title="Crear un producto" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="saleUnit" />
        <NumberInput source="price" />
        <BooleanInput source="stock" />
        <TextInput source="categoryId" />
      </SimpleForm>
    </Create>
  );
};
