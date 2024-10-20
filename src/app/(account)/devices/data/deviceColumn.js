import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export const deviceColumn = () => {
  return [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'serial_number',
      headerName: 'Serial No.',
    },
    {
      field: 'model',
      headerName: 'Mode Name',
      flex: 1,
    },
    {
      field: 'subscription_type',
      headerName: 'Meter Type',
      flex: 1,
      valueGetter: (params) =>
        `${capitalizeFirstLetter(params.subscription_type)}`,
    },
    {
      field: 'phase',
      headerName: 'Phase Type',
      flex: 1,
      valueGetter: (params) => `${capitalizeFirstLetter(params.phase)}`,
    },
    {
      field: 'max_power',
      headerName: 'Power Rating (W)',
      flex: 1,
    },
    {
      field: 'voltage',
      headerName: 'Voltage (V)',
      flex: 1,
    },
    {
      field: 'active',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <span
          style={{
            backgroundColor:
              params?.value === 'Online'
                ? '#D6eee2'
                : params?.value === 'null'
                ? '#ffd0d0'
                : '#f6e9d6',
            color:
              params?.value === 'online'
                ? '#009d48'
                : params?.value === 'offline'
                ? '#d60000'
                : '#d68000',
            padding: '5px 10px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          {params?.value || 'Not registered'}
        </span>
      ),
    },
  ];
};
