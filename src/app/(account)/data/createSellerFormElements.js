export const createSellerFormElements = (handleBackButtonClick) => {
  return [
    {
      id: 'avatar',
      label: '',
      name: 'avatar',
      eType: 'upload',
      dType: 'upload',
      placeholder: 'Upload your avatar',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Avatar (required)',
      },
      validation: {
        required: {
          value: true,
          message: 'Avatar is required',
        },
      },
    },
    {
      id: 'company_name',
      label: '',
      name: 'company_name',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter company name',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Company Name (required)',
      },
      validation: {
        required: {
          value: true,
          message: 'Company name is required',
        },
      },
    },
    {
      id: 'company_address',
      label: '',
      name: 'company_address',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter company address',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Company Address (required)',
      },
      validation: {
        required: {
          value: true,
          message: 'Company address is required',
        },
      },
    },
    {
      id: 'cac_number',
      label: '',
      name: 'cac_number',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter CAC number',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'CAC Number (required)',
      },
      validation: {
        required: {
          value: true,
          message: 'CAC number is required',
        },
      },
    },
    {
      id: 'tax_number',
      label: '',
      name: 'tax_number',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter Tax number',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Tax Number (required)',
      },
      validation: {
        required: {
          value: true,
          message: 'Tax number is required',
        },
      },
    },
    {
      id: 'button',
      label: 'Back',
      name: '',
      eType: 'button',
      dType: 'button',
      mData: {
        align: 'left',
        variant: 'outlined',
        width: 45,
        label_style: {
          display: 'none',
        },
        onClick: () => handleBackButtonClick(),
      },
    },
    {
      id: 'button',
      label: 'Create Seller',
      name: '',
      eType: 'button',
      dType: 'submit',
      mData: {
        align: 'right',
        variant: 'contained',
        width: 45,
        label_style: {
          display: 'none',
        },
      },
    },
  ];
};
