export const createBuyerFormElements = (handleBackButtonClick) => [
  {
    id: 'name',
    label: '',
    name: 'name',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter buyer name',
    mData: {
      variant: 'outlined',
      label_style: {
        marginBottom: '10px',
        fontSize: '12px',
        color: 'gray',
      },
      custom_label: 'Buyer Name',
    },
    validation: {
      required: {
        value: true,
        message: 'Buyer name is required',
      },
    },
  },
  {
    id: 'address',
    label: '',
    name: 'address',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter buyer address',
    mData: {
      variant: 'outlined',
      label_style: {
        marginBottom: '10px',
        fontSize: '12px',
        color: 'gray',
      },
      custom_label: 'Buyer Address',
    },
    validation: {
      required: {
        value: true,
        message: 'Buyer address is required',
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
