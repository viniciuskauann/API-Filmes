export function formatDate(
  date: string | Date,
  locale: string = "pt-BR"
): string {
  if (!date) return "";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat(locale).format(parsedDate);
}
