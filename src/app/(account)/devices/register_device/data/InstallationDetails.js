export const InstallationDetailsForm = () => {
  return [
    {
      id: "installation_date",
      label: "",
      name: "installation_date",
      eType: "date",
      dType: "string",
      placeholder: `${Date.now().toString}`,
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Installation Date",
      },
      validation: {
        required: {
          value: true,
          message: "Meter ID is required",
        },
      },
    },
    {
      id: "installer_name",
      label: "",
      name: "installer_name",
      eType: "text",
      dType: "string",
      placeholder: "PHCN, Eket Branch",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Installer Name",
      },
      validation: {
        required: {
          value: true,
          message: "Installer Name is required",
        },
      },
    },
    {
      id: "installer_contact",
      label: "",
      name: "installer_contact",
      eType: "email",
      dType: "string",
      placeholder: "phcneket@yahoo.com",
      mData: {
        width: 48,
        variant: "outlined",
        label_style: {
          marginBottom: "10px",
          fontSize: "14px",
          color: "#B9B8B8",
        },
        custom_label: "Installer Contact",
      },
      validation: {
        required: {
          value: true,
          message: "installer contact required",
        },
      },
    },
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
        custom_label: "Location Within Seller",
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
  ];
};
