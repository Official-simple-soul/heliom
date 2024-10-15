import { createData, fetchData, updateData } from '@/hooks/api';

export const getAccountProfile = async () => await fetchData(`/me`);

export const updateAccountProfile = async (profileData) =>
  await updateData('/me', null, profileData);

export const createSellerAccount = async (sellerData) => {
  const accountProfile = JSON.parse(localStorage.getItem('accountProfile'));
  console.log(accountProfile?.access_token);
  const formData = new FormData();
  formData.append('avatar', sellerData.avatar[0]);
  formData.append('company_name', sellerData.company_name);
  formData.append('company_address', sellerData.company_address);
  formData.append('cac_number', sellerData.cac_number);
  formData.append('tax_number', sellerData.tax_number);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sellers`, {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${accountProfile.access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create seller account');
  }

  return await response.json();
};
export const getSellerAccounts = async () => await fetchData(`/sellers`);

export const updateSellerAccount = async (sellerData) =>
  await updateData('/seller', sellerData.id, sellerData);

export const deleteSellerAccount = async (sellerId) =>
  await deleteData('/seller', sellerId);

export const createBuyerAccount = async (buyerData) =>
  await createData('/buyer', buyerData);

export const getBuyerAccounts = async () => await fetchData(`/buyers`);

export const updateBuyerAccount = async (buyerData) =>
  await updateData('/buyer', buyerData.id, buyerData);

export const deleteBuyerAccount = async (buyerId) =>
  await deleteData('/buyer', buyerId);
