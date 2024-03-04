import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const ProductList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="saleUnit" />
        <NumberField source="price" />
        <BooleanField source="stock" />
        <TextField source="categoryId" />
        <DateField source="createdAt" />
        <DateField source="modifiedAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
