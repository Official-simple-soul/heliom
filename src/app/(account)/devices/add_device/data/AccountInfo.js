export const AccountInfoForm = () => {
  return [
    {
      id: "accountNo",
      label: "",
      name: "accountNo",
      eType: "number",
      dType: "string",
      placeholder: "Buyer’s acc no. with the utility company",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Customer Account Number",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "tarrif",
      label: "",
      name: "tarrif",
      eType: "text",
      dType: "string",
      placeholder: "Rate plan associated with the meter",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Tarrif",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "billing",
      label: "",
      name: "billing",
      eType: "text",
      dType: "string",
      placeholder: "Select seller",
      mData: {
        variant: "outlined",
        width: 48,
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Billing Information",
        select: true,
        options: [
          { text: "VISA", value: "visa" },
          { text: "MASTERCARD", value: "mastercard" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Select seller",
        },
      },
    },
    {
      id: "cardNo",
      label: "",
      name: "cardNo",
      eType: "password",
      dType: "string",
      placeholder: "**** **** **** ****",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Card Number",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "experationDate",
      label: "",
      name: "experationDate",
      eType: "date",
      dType: "string",
      placeholder: "9/25",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Expiration Date",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "cvv",
      label: "",
      name: "cvv",
      eType: "password",
      dType: "string",
      placeholder: "***",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "CVV",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "paymentSchedule",
      label: "",
      name: "paymentSchedule",
      eType: "date",
      dType: "string",
      placeholder: "9/25",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Payment Schedule",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
  ];
};
