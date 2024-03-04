import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const ProductEdit = (props: any) => {
  return (
    <Edit title="Edit collection" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="saleUnit" />
        <NumberInput source="price" />
        <BooleanInput source="stock" />
        <TextInput source="categoryId" />
      </SimpleForm>
    </Edit>
  );
};
