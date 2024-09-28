export const subTableColumn = () => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) => `${params?.name || "N/A"}`,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },

    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
  ];
};
