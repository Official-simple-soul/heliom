export const tableStyles = (textColor, bgColor) => {
  return {
    root: {
      border: 'none',
      backgroundColor: 'transparent',
      minHeight: '20rem',
    },
    body: {
      color: textColor,
      cursor: 'pointer',
      border: 0,
      backgroundColor: 'transparent',
    },
    header: {
      backgroundColor: '#eaeff6',
    },
    cell: {
      border: 'none',
    },
    row: {
      marginY: 1,
      borderRadius: 2,
      backgroundColor: bgColor,
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    },
    rowHover: {
      backgroundColor: '#eaeff6',
    },
  };
};
