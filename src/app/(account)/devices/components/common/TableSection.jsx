import React from 'react';
import { tableStyles } from '@/constant/tableStyles';
import TableWidget from '@/dynamics/TableWidget';
import { buyerMeterColumn } from '../../data/buyerColumn';
import { useState } from 'react';
import { ThemeColor } from '@/constant/themeColor';
import { useRouter } from 'next/navigation';

function TableSection({ tableData }) {
  const { bgColor, textColor } = ThemeColor();
  const tableStyle = tableStyles(textColor, bgColor);
  const [isPending] = useState(false);
  const navigate = useRouter();

  const handleRowClick = ({ device_id }) => {
    // navigate.push(`/devices/${device_id}`);
    console.log(device_id);
    navigate.push(`/devices/${1}`);
  };

  const handleRowSelectionModelChange = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <TableWidget
        rows={tableData}
        columns={buyerMeterColumn()}
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        loading={isPending}
        pageSize={10}
        menuItem={true}
        menuItems={[
          { label: 'View Device', value: 'view' },
          { label: 'Delete Device', value: 'delete' },
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

export default TableSection;
