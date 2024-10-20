import { createData, fetchData, updateData, deleteData } from '@/hooks/api';

export const listDevices = async (orgType: string, orgId: string) =>
  await fetchData(`/${orgType}/${orgId}/devices/`);

export const createDevice = async (
  orgType: string,
  orgId: string,
  deviceData: unknown
) => await createData(`/${orgType}/${orgId}/devices/`, deviceData);

export const getDevice = async (
  orgType: string,
  orgId: string,
  deviceId: string
) => await fetchData(`/${orgType}/${orgId}/devices/${deviceId}`);

export const updateDevice = async (
  orgType: string,
  orgId: string,
  deviceId: string,
  deviceData: unknown
) =>
  await updateData(
    `/${orgType}/${orgId}/devices/${deviceId}`,
    null,
    deviceData
  );

export const deleteDevice = async (
  orgType: string,
  orgId: string,
  deviceId: string
) => await deleteData(`/${orgType}/${orgId}/devices`, deviceId);

export const activateDevice = async (
  orgType: string,
  orgId: string,
  deviceId: string
) =>
  await createData(`/${orgType}/${orgId}/devices/activate`, {
    device_id: deviceId,
  });

export const adminListDevices = async () => await fetchData(`/admin/devices/`);

export const adminGetDevice = async (deviceId: string) =>
  await fetchData(`/admin/devices/${deviceId}`);
