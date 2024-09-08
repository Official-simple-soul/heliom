export const signUpFormElements = (handleBackButtonClick) => {
  return [
    {
      id: 'fullname',
      label: '',
      name: 'fullname',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter your full name',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Full Name',
      },
      validation: {
        required: {
          value: true,
          message: 'Full Name is required',
        },
      },
    },
    {
      id: 'email',
      label: '',
      name: 'email',
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
          message: 'Email is required',
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Please enter a valid email address',
        },
      },
    },
    {
      id: 'password',
      label: '',
      name: 'password',
      eType: 'password',
      dType: 'string',
      placeholder: 'Enter a password',
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
          message: 'Password is required',
        },
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters',
        },
      },
    },
    {
      id: 'confirm_password',
      label: '',
      name: 'confirm_password',
      eType: 'password',
      dType: 'string',
      placeholder: 'Confirm your password',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Confirm Password',
      },
      validation: {
        required: {
          value: true,
          message: 'Please confirm your password',
        },
        validate: {
          matchesPassword: (value, context) =>
            value === context.password || 'Passwords do not match',
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
      label: 'Sign Up',
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
