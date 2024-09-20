export const buyerMeterColumn = () => {
  return [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: '',
      headerName: 'Name',
      width: 60,
      renderCell: () => (
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span
            style={{
              backgroundColor: 'lightgray',
              color: 'greenyellow',
              // padding: '5px 10px',
              height: '77%',
              width: '100%',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {'A'}
          </span>
        </div>
      ),
    },
    {
      field: 'name',
      headerName: '',
      flex: 1,
      valueGetter: (params) => `${params?.name || 'N/A'}`,
    },
    {
      field: 'power_factor',
      headerName: 'Power Factor',
      flex: 1,
    },
    {
      field: 'power_capacity',
      headerName: 'Power Capacity (W)',
      flex: 1,
    },
    {
      field: 'seller_name',
      headerName: 'Seller Name',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      // width: 100,
      renderCell: (params) => (
        <span
          style={{
            backgroundColor: params?.value === 'Active' ? '#D6eee2' : '#ffd0d0',
            color: params?.value === 'Active' ? '#009d48' : '#d60000',
            padding: '5px 10px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          {params?.value}
        </span>
      ),
    },
  ];
};
