export const signUpFormElements = (handleBackButtonClick) => {
  return [
    {
      id: 'first_name',
      label: '',
      name: 'first_name',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter your first name',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'First Name',
      },
      validation: {
        required: {
          value: true,
          message: 'First Name is required',
        },
      },
    },
    {
      id: 'last_name',
      label: '',
      name: 'last_name',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter your last name',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Last Name',
      },
      validation: {
        required: {
          value: true,
          message: 'Last Name is required',
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
      id: 'phone',
      label: '',
      name: 'phone',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter your phone number',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Phone Number',
      },
      validation: {
        required: {
          value: true,
          message: 'Phone number is required',
        },
        pattern: {
          value: /^[0-9]+$/,
          message: 'Please enter a valid phone number',
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
        pattern: {
          value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
          message:
            'Password must contain at least one uppercase letter, one number, and one special character',
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
      id: 'date_of_birth',
      label: '',
      name: 'date_of_birth',
      eType: 'date',
      dType: 'string',
      placeholder: 'Select your date of birth',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Date of Birth',
      },
      validation: {
        required: {
          value: true,
          message: 'Date of birth is required',
        },
      },
    },
    {
      id: 'gender',
      label: '',
      name: 'gender',
      eType: 'text',
      dType: 'string',

      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        options: [
          { text: 'Male', value: 'male' },
          { text: 'Female', value: 'female' },
        ],
        select: true,
        custom_label: 'Gender',
      },
      validation: {
        required: {
          value: true,
          message: 'Gender is required',
        },
      },
    },
    {
      id: 'marital_status',
      label: '',
      name: 'marital_status',
      eType: 'text',
      dType: 'string',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        select: true,
        options: [
          { text: 'Single', value: 'single' },
          { text: 'Married', value: 'married' },
        ],
        custom_label: 'Marital Status',
      },
      validation: {
        required: {
          value: true,
          message: 'Marital status is required',
        },
      },
    },
    {
      id: 'address',
      label: '',
      name: 'address',
      eType: 'text',
      dType: 'string',
      placeholder: 'Enter your address',
      mData: {
        variant: 'outlined',
        label_style: {
          marginBottom: '10px',
          fontSize: '12px',
          color: 'gray',
        },
        custom_label: 'Address',
      },
      validation: {
        required: {
          value: true,
          message: 'Address is required',
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
