export const RegulatoryComplianceForm = () => {
  return [
    {
      id: 'certifcation_number',
      label: '',
      name: 'certification',
      eType: 'text',
      dType: 'string',
      placeholder: 'Maximum current the meter can handle.',
      mData: {
        width: 48,
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '14px',
          className: 'font-h-black',
          color: '#B9B8B8',
        },
        custom_label: 'Certification Number',
      },
      validation: {
        required: {
          value: true,
          message: 'Certification Numbers required',
        },
      },
    },
    {
      id: 'standard_compliance',
      label: '',
      name: 'compliance',
      eType: 'file',
      dType: 'string',
      placeholder: 'Maximum current the meter can handle.',
      mData: {
        width: 48,
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '14px',
          className: 'font-h-black',
          color: '#B9B8B8',
        },
        custom_label: 'Standard Compliance',
      },
      validation: {
        required: {
          value: true,
          message: 'Standard compliance document is required',
        },
      },
    },
    {
      id: 'utility',
      label: '',
      name: 'utility_approval',
      eType: 'file',
      dType: 'string',
      placeholder: 'Upload document',
      mData: {
        width: 48,
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '14px',
          className: 'font-h-black',
          color: '#B9B8B8',
        },
        custom_label: 'Utility Company Approval',
      },
      validation: {
        required: {
          value: true,
          message: 'Certification Numbers required',
        },
      },
    },
  ];
};
