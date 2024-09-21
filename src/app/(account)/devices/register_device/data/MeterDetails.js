export const MeterDetailsForm = () => {
  return [
    {
      id: "seller",
      label: "",
      name: "seller",
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
        custom_label: "Seller",
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
          message: "Select seller",
        },
      },
    },
    {
      id: "meter_id",
      label: "",
      name: "meter_id",
      eType: "text",
      dType: "string",
      placeholder: "Enter Meter ID",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Meter ID",
      },
      validation: {
        required: {
          value: true,
          message: "Meter ID is required",
        },
      },
    },
    {
      id: "serial_number",
      label: "",
      name: "serial_number",
      eType: "text",
      dType: "string",
      placeholder: "Enter serial number",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Serial Number",
      },
      validation: {
        required: {
          value: true,
          message: "Serial Number must be provided",
        },
      },
    },
    {
      id: "phase",
      label: "",
      name: "phase",
      eType: "text",
      dType: "string",
      placeholder: "Select phase",
      mData: {
        variant: "outlined",
        width: 48,
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Phase Type",
        select: true,
        options: [
          { text: "Single Phase", value: "single phase" },
          { text: "Double Phase", value: "double phase" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Select phase",
        },
      },
    },
    {
      id: "meter_type",
      label: "",
      name: "meter_type",
      eType: "text",
      dType: "string",
      placeholder: "Postpaid",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Phase Type",
      },
      validation: {
        required: {
          value: true,
          message: "Enter meter type",
        },
      },
    },
    {
      id: "supply_voltage",
      label: "",
      name: "supply_voltage",
      eType: "text",
      dType: "string",
      placeholder: "230v",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Supply Voltage",
      },
      validation: {
        required: {
          value: true,
          message: "Enter meter type",
        },
      },
    },
  ];
};
