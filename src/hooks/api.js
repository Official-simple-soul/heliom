// In Production
export const callApi = async (
  method,
  endpoint,
  data = null,
  workspace = null,
  options = {},
  noAuth = false
) => {
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
    throw new Error('Invalid method specified');
  }

  try {
    const accountData = JSON.parse(localStorage.getItem('account'));

    if (
      !noAuth &&
      (!accountData || new Date() > new Date(accountData.expires))
    ) {
      localStorage.clear();
      window.location.replace(
        `/login?token_expired=${encodeURIComponent(true)}`
      );
      return;
    }

    const authorization = noAuth
      ? {}
      : { Authorization: `Bearer ${accountData?.access_token}` };
    workspace = workspace ? '/' + workspace.trim('/') : '';
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${workspace}${endpoint}`,
      {
        ...options,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...authorization,
        },
        body:
          ['POST', 'PUT'].includes(method) && data !== null
            ? JSON.stringify(data)
            : undefined,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = Array.isArray(errorData.detail)
        ? errorData.detail[0].msg
        : errorData.detail;
      console.error(
        `Request failed with status: ${response.status}`,
        errorMessage
      );
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fileUploadApi = async (
  method,
  endpoint,
  data = null,
  workspace
) => {
  try {
    const accountData = JSON.parse(localStorage.getItem('account'));
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${workspace}/${endpoint}`,
      {
        method,
        headers: {
          Authorization: `Bearer ${accountData.access_token}`,
        },
        body: data,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = Array.isArray(errorData.detail)
        ? errorData.detail[0].msg
        : errorData.detail;
      console.error(
        `Request failed with status: ${response.status}`,
        errorMessage
      );
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error('Error in file upload request:', err);
    throw err;
  }
};

export const createData = async (
  endpoint,
  data,
  workspace = null,
  options = {}
) => {
  return callApi('POST', endpoint, data, workspace, options);
};

export const deleteData = async (
  endpoint,
  id,
  workspace = null,
  options = {}
) => {
  return callApi('DELETE', `${endpoint}/${id}`, null, workspace, options);
};

export const updateData = async (
  endpoint,
  id,
  data,
  workspace = null,
  options = {}
) => {
  return callApi('PUT', `${endpoint}/${id}`, data, workspace, options);
};

export const fetchData = async (endpoint, workspace = null, options = {}) => {
  return callApi('GET', endpoint, null, workspace, options);
};
