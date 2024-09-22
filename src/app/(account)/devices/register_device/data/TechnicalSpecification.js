export const TechnicalSpecificationForm = () => {
  return [
    {
      id: "specification",
      label: "",
      name: "specification",
      eType: "text",
      dType: "string",
      placeholder: "Maximum current the meter can handle",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Current Rating",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "firm_ware",
      label: "",
      name: "firm_ware",
      eType: "text",
      dType: "string",
      placeholder: "Version of the software running on the meter",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Firmware Version",
      },
      validation: {
        required: {
          value: true,
          message: "Required",
        },
      },
    },
    {
      id: "communication",
      label: "",
      name: "communication",
      eType: "text",
      dType: "string",
      placeholder: "E.g, GSM, RF, PLC",
      mData: {
        variant: "outlined",
        width: 48,
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Communication Method",
        select: true,
        options: [
          { text: "GSM", value: "gsm" },
          { text: "RF", value: "rf" },
          { text: "PLC", value: "plc" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Select Billing Option",
        },
      },
    },
  ];
};
