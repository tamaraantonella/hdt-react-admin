import { Edit, SimpleForm, TextInput } from "react-admin";

export const CollectionEdit = (props: any) => {
  return (
    <Edit title="Edit collection" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="color" />
      </SimpleForm>
    </Edit>
  );
};
