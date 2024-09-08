export const loginFormElements = [
  {
    id: 'username',
    label: '',
    name: 'username',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter your email address',
    mData: {
      variant: 'outlined',
      label_style: {
        marginBottom: '10px',
        fontSize: '12px',
        color: 'gray',
      },
      custom_label: 'Email Address',
    },
    validation: {
      required: {
        value: true,
        message: 'Value is required',
      },
    },
  },
  {
    id: 'password',
    label: '',
    name: 'password',
    eType: 'password',
    dType: 'string',
    placeholder: '********',
    mData: {
      variant: 'outlined',
      label_style: {
        marginBottom: '10px',
        fontSize: '12px',
        color: 'gray',
      },
      custom_label: 'Password',
    },
    validation: {
      required: {
        value: true,
        message: 'Value is required',
      },
    },
  },
  {
    id: 'button',
    label: 'Sign in',
    name: '',
    eType: 'button',
    dType: 'submit',
    mData: {
      align: 'center',
      variant: 'contained',
      label_style: {
        display: 'none',
      },
    },
  },
];
