export const transTableColumn = () => {
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
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span
          style={{
            backgroundColor:
              params?.value === "Online"
                ? "#D6eee2"
                : params?.value === "Offline"
                ? "#ffd0d0"
                : "#f6e9d6",
            color:
              params?.value === "Successful"
                ? "#009d48"
                : params?.value === "Failed"
                ? "#d60000"
                : "#d68000",
            padding: "5px 10px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {params?.value}
        </span>
      ),
    },
  ];
};
