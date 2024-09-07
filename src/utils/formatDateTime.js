export function formatDateTime(dateTimeString) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const date = new Date(dateTimeString);
  return date.toLocaleString('en-US', options);
}
