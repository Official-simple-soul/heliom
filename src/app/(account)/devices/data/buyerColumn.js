export const buyerMeterColumn = () => {
  return [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: '',
      headerName: 'Serial No.',
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
      field: 'meter_type',
      headerName: 'Meter Type',
      flex: 1,
    },
    {
      field: 'phase_type',
      headerName: 'Phase Type',
      flex: 1,
    },
    {
      field: 'power_rating',
      headerName: 'Power Rating (W)',
      flex: 1,
    },
    {
      field: 'voltage',
      headerName: 'Voltage (V)',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <span
          style={{
            backgroundColor: params?.value === 'Online' ? '#D6eee2' : params?.value === 'Offline' ? '#ffd0d0': '#f6e9d6',
            color: params?.value === 'online' ? '#009d48' : params?.value === 'offline'?'#d60000' : '#d68000',
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
