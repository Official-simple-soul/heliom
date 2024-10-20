import React from 'react';
import { tableStyles } from '@/constant/tableStyles';
import TableWidget from '@/dynamics/TableWidget';
import { deviceColumn } from '../../data/deviceColumn';
import { useState } from 'react';
import { ThemeColor } from '@/constant/themeColor';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExistingDevice, fetchDevices } from '@/store/slices/deviceSlice';
import { toast } from 'react-toastify';

function TableSection({ tableData }) {
  const { bgColor, textColor } = ThemeColor();
  const tableStyle = tableStyles(textColor, bgColor);
  const [isPending] = useState(false);
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleRowClick = ({ id }) => {
    navigate.push(`/devices/${id}`);
  };

  const handleRowSelectionModelChange = (data) => {
    console.log(data);
  };

  const handleMenuClick = async ({ value }, { id }) => {
    if (value === 'view') {
      navigate.push(`/devices/${id}`);
    } else if (value === 'delete') {
      try {
        await dispatch(
          deleteExistingDevice({
            orgType: currentUser?.type,
            orgId: currentUser?.account.id,
            deviceId: id,
          })
        ).unwrap();
        dispatch(
          fetchDevices({
            orgType: currentUser?.type,
            orgId: currentUser.account?.id,
          })
        );
        toast.success('Device deleted successfully:', id);
      } catch (error) {
        toast.error('Error while deleting device:', error);
        console.error('Error deleting device:', error);
      }
    }
  };

  return (
    <div className="w-full">
      <TableWidget
        rows={tableData}
        columns={deviceColumn()}
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        loading={isPending}
        pageSize={10}
        menuItem={true}
        menuItems={[
          { label: 'View Device', value: 'view', id: 1 },
          { label: 'Delete Device', value: 'delete', id: 2 },
        ]}
        handleMenuClick={handleMenuClick}
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
