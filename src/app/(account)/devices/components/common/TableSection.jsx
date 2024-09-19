import React from 'react';
import { tableStyles } from '@/constant/tableStyles';
import { useRouter } from 'next/navigation';
import TableWidget from '@/dynamics/TableWidget';
import { buyerMeterColumn } from '../../data/buyerColumn';
import { tableData } from '../../data/tableData';
import { useState } from 'react';
import { ThemeColor } from '@/constant/themeColor';

function TableSection() {
  const { mainBgColor, trans, bgColor, textColor } = ThemeColor();
  const tableStyle = tableStyles(textColor, bgColor);
  const [isPending, setIsPending] = useState(false);

  const handleRowClick = (data) => {};
  const handleRowSelectionModelChange = (data) => {};
  return (
    <div>
      <TableWidget
        rows={tableData}
        columns={buyerMeterColumn()}
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        loading={isPending}
        pageSize={10}
        pageSizeOptions={[10, 20, 50, 100]}
        onRowClick={handleRowClick}
        styles={{
          ...tableStyle,
        }}
      />
    </div>
  );
}

export default TableSection;
