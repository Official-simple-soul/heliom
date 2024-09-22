export function validation(formData) {
  let emptyKey;

  // Check if formData is null, undefined, or an empty object
  if (!formData || Object.keys(formData).length === 0) {
    return { status: false, message: "Form data is missing or empty." };
  }

  // Loop through formData to find the first empty field
  for (const [key, value] of Object.entries(formData)) {
    if (!value || value === "") {
      emptyKey = key;
      break;
    }
  }

  // If all fields have valid values, return status true, otherwise return status false with the empty key
  return Object.keys(formData).every(
    (key) =>
      formData[key] !== "" &&
      formData[key] !== null &&
      formData[key] !== undefined
  )
    ? { status: true }
    : { status: false, emptyKey: emptyKey || "All fields are empty." };
}
