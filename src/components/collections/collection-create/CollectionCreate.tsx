import {
  Create,
  SimpleForm,
  TextInput
} from "react-admin";

export const CollectionCreate = (props: any) => {
  return (
    <Create title="Crear una collección" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="color" />
      </SimpleForm>
    </Create>
  );
};
