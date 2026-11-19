/**
 * Date and time formatting helpers for pickup slots, order timestamps, and schedules.
 */
export function formatPickupDate(dateString: string | Date): string {
  const d = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (d.toDateString() === today.toDateString()) {
    return 'Today';
  }
  if (d.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  return d.toLocaleDateString('en-LK', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTimeRange(startTime: string, endTime: string): string {
  return `${startTime} – ${endTime}`;
}

export function formatOrderTimestamp(isoString: string | Date): string {
  const d = new Date(isoString);
  return d.toLocaleTimeString('en-LK', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}
