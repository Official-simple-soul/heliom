export function validation(formData) {
    let emptyKey;

    for (const [key, value] of Object.entries(formData)) {
        if (!value || value === '') {
            emptyKey = key;
            break;
        }
    }

    return Object.keys(formData).every((key) => formData[key] !== '' && formData[key] !== null && formData[key] !== undefined)
        ? { status: true }
        : { status: false, emptyKey };
}