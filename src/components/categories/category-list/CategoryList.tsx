import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const CategoryList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="color" />
        <TextField source="collectionId" />
        <DateField source="createdAt" />
        <DateField source="modifieddAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
