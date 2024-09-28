export const MeterInventoryForm = () => {
  return [
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
        custom_label: "Serial No.",
      },
      validation: {
        required: {
          value: true,
          message: "Serial Number must be provided",
        },
      },
    },
    {
      id: "batch_number",
      label: "",
      name: "batch_number",
      eType: "text",
      dType: "string",
      placeholder: "Enter batch number",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Batch Number",
      },
      validation: {
        required: {
          value: true,
          message: "Batch Number must be provided",
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
        select: true,
        options: [
          { text: "Postpaid", value: "postpaid" },
          { text: "Prepaid", value: "prepaid" },
          { text: "Others", value: "other" },
        ],
      },
      validation: {
        required: {
          value: true,
          message: "Enter meter type",
        },
      },
    },
    {
      id: "phase_type",
      label: "",
      name: "phase_type",
      eType: "text",
      dType: "string",
      placeholder: "Select phase type",
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
    {
      id: "power_rating",
      label: "",
      name: "power_rating",
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
        custom_label: "Power Rating",
      },
      validation: {
        required: {
          value: true,
          message: "Enter power rating",
        },
      },
    },
  ];
};
