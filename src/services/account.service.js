import { createData, fetchData, updateData } from '@/hooks/api';

export const getAccountProfile = async () => await fetchData(`/me`);

export const updateAccountProfile = async (profileData) =>
  await updateData('/me', null, profileData);

export const createSeller = async (sellerData) =>
  await createData('/seller', sellerData);

export const getSellerProfile = async (sellerId) =>
  await fetchData(`/seller/${sellerId}`);

export const updateSellerProfile = async (sellerData) =>
  await updateData('/seller', sellerData.id, sellerData);

export const deleteSeller = async (sellerId) =>
  await deleteData('/seller', sellerId);

// Buyer CRUD operations
export const createBuyer = async (buyerData) =>
  await createData('/buyer', buyerData);

export const getBuyerProfile = async (buyerId) =>
  await fetchData(`/buyer/${buyerId}`);

export const updateBuyerProfile = async (buyerData) =>
  await updateData('/buyer', buyerData.id, buyerData);

export const deleteBuyer = async (buyerId) =>
  await deleteData('/buyer', buyerId);
