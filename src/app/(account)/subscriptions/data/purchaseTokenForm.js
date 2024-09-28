export const purchaseTokenForm = () => {
  return [
    {
      id: "meter_id",
      label: "",
      name: "meter_id",
      eType: "text",
      dType: "string",
      placeholder: "Select device",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Meter ID",
        select: true,
        options: [
          { text: "PHCN", value: "phcn" },
          { text: "EDC", value: "edc" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Meter ID required",
        },
      },
    },
    {
      id: "meter_no",
      label: "",
      name: "meter_no",
      eType: "text",
      dType: "string",
      placeholder: "Enter amount",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Meter Serial No.",
        select: true,
        options: [
          { text: "PHCN", value: "phcn" },
          { text: "EDC", value: "edc" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Meter serial No required",
        },
      },
    },
    {
      id: "token_quantity",
      label: "",
      name: "token_quantity",
      eType: "text",
      dType: "string",
      placeholder: "Select Option",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Token Quantity",
        select: true,
        options: [
          { text: "PHCN", value: "phcn" },
          { text: "EDC", value: "edc" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Token quantity required",
        },
      },
    },
    {
      id: "amount",
      label: "",
      name: "amount",
      eType: "text",
      dType: "string",
      placeholder: "Enter amount",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Amount",
      },
      validation: {
        required: {
          value: true,
          message: "Amount required",
        },
      },
    },
  ];
};
