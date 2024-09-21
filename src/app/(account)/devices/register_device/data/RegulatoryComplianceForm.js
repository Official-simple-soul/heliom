export const RegulatoryComplianceForm = () => {
  return [
    {
      id: "accno",
      label: "",
      name: "accno",
      eType: "text",
      dType: "string",
      placeholder: "Maximum current the meter can handle.",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Certification Numbers",
      },
      validation: {
        required: {
          value: true,
          message: "Certification Numbers required",
        },
      },
    },
    {
      id: "utility",
      label: "",
      name: "utility",
      eType: "file",
      dType: "string",
      placeholder: "Upload document",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          className: "font-h-black",
          color: "#B9B8B8",
        },
        custom_label: "Utility Company Approval",
      },
      validation: {
        required: {
          value: true,
          message: "Certification Numbers required",
        },
      },
    },
  ];
};
