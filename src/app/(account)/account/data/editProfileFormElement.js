export const editProfileFormElement = () => {
    return [
      {
        id: "company_name",
        label: "",
        name: "company_name",
        eType: "text",
        dType: "string",
        placeholder: "Company Name",
        mData: {
          variant: "outlined",
          width: 48,
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "Company Name",
        },
        validation: {
          required: {
            value: true,
            message: "Company name is required",
          },
        },
      },
      {
        id: "email",
        label: "",
        name: "email",
        eType: "email",
        dType: "string",
        placeholder: "Email Address",
        mData: {
          width: 48,
          variant: "outlined",
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "Email Address",
        },
        validation: {
          required: {
            value: true,
            message: "Email address is required",
          },
        },
      },
      {
        id: "company_address",
        label: "",
        name: "company_address",
        eType: "text",
        dType: "string",
        placeholder: "Company Address",
        mData: {
          width: 48,
          variant: "outlined",
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "Company Address",
        },
        validation: {
          required: {
            value: true,
            message: "Company address must be provided",
          },
        },
      },
      {
        id: "phone_number",
        label: "",
        name: "phone_number",
        eType: "text",
        dType: "string",
        placeholder: "Phone Number",
        mData: {
          width: 48,
          variant: "outlined",
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "Phone Number",
        },
        validation: {
          required: {
            value: true,
            message: "Phone number is required",
          },
        },
      },
      {
        id: "tin",
        label: "",
        name: "tin",
        eType: "text",
        dType: "string",
        placeholder: "Tax Identification Number (TIN)",
        mData: {
          width: 48,
          variant: "outlined",
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "Tax Identification Number (TIN)",
        },
        validation: {
          required: {
            value: true,
            message: "TIN is required",
          },
        },
      },
      {
        id: "cac_registration_number",
        label: "",
        name: "cac_registration_number",
        eType: "text",
        dType: "string",
        placeholder: "CAC Registration Number",
        mData: {
          width: 48,
          variant: "outlined",
          label_style: {
            marginBottom: "10px",
            fontSize: "14px",
            color: "#B9B8B8",
          },
          custom_label: "CAC Registration Number",
        },
        validation: {
          required: {
            value: true,
            message: "CAC registration number is required",
          },
        },
      },
    ];
  };
  