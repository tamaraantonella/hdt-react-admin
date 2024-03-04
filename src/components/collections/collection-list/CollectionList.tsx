import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const CollectionList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid style={{ width : '100%'}}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="color" />
        <DateField source="createdAt" />
        <DateField source="modifiedAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
