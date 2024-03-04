import {
  Create,
  SimpleForm,
  TextInput
} from "react-admin";

export const CategoryCreate = (props: any) => {
  return (
    <Create title="Crear una categoría" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="color" />
      </SimpleForm>
    </Create>
  );
};
