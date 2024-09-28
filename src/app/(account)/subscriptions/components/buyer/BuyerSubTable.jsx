import React from "react";
import { tableStyles } from "@/constant/tableStyles";
import TableWidget from "@/dynamics/TableWidget";
import { subTableColumn } from "../../data/subTableColumn";
import { useState } from "react";
import { ThemeColor } from "@/constant/themeColor";

function BuyerSubTable({ tableData }) {
  const { bgColor, textColor } = ThemeColor();
  const tableStyle = tableStyles(textColor, bgColor);
  const [isPending] = useState(false);

  const handleRowClick = (data) => {
    console.log(data);
  };
  const handleRowSelectionModelChange = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <TableWidget
        rows={tableData}
        columns={subTableColumn()}
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        loading={isPending}
        pageSize={10}
        menuItem={true}
        menuItems={[
          { label: "View Device", value: "view" },
          { label: "Delete Device", value: "delete" },
        ]}
        pageSizeOptions={[10, 20, 50, 100]}
        onRowClick={handleRowClick}
        styles={{
          ...tableStyle,
        }}
      />
    </div>
  );
}

export default BuyerSubTable;
