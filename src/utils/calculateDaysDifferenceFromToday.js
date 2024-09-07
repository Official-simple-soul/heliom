export function calculateDaysDifferenceFromToday(dueDateString) {
  const dueDate = new Date(dueDateString);
  const currentDate = new Date();

  const timeDifference = dueDate - currentDate;
  if (timeDifference < 0) {
    return 'Overdue';
  } else if (timeDifference < 86400000) {
    return 'Due today';
  } else {
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return `Due in ${daysDifference} day${daysDifference !== 1 ? 's' : ''}`;
  }
}
