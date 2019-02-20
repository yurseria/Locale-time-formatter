export const localeTimeFormatter = (
  lang = "ko",
  utcTimeStamp = "1970-01-01T00:00:00Z",
  options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }
) => {
  options.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const l10nDateTime = new Intl.DateTimeFormat(lang, options);
  return l10nDateTime.format(new Date(utcTimeStamp));
};
