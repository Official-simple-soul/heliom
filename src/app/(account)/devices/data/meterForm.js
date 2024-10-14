export const meterForm = (options) => {
    return [{
      id: 'meterTopic',
      label: '',
      name: 'meterTopic',
      eType: 'text',
      dType: 'string',
      placeholder: 'Select Meter',
      mData: {
        variant: 'outlined',
        width: 48,
        label_style: {
          marginBottom: '10px',
          fontSize: '14px',
          color: '#B9B8B8',
        },
        custom_label: 'Select a Meter',
        select: true,
        options: options,
      },
    }];
  };