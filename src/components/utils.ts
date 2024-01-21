export const capitalizeFirstWord = (sentence?: string) => {
  if (!sentence) return;
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

function convertDateToHumanReadableDate(date: string | number | Date) {
  if (!date) {
    return "";
  }
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1
    }-${formattedDate.getDate()}`;
}

function formatCurrency(amount?: number): string {
  if (!amount) {
    return "";
  }
  const formatter = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
}

export function formatNumberWithCommaSeparator(
  number: number | string
): string {
  const numberValue = typeof number === "string" ? parseFloat(number) : number;
  if (!isNaN(numberValue) && isFinite(numberValue)) {
    return numberValue.toLocaleString();
  }
  return "0";
}

export function formatCurrencyWithoutSymbol(amount?: string | number): string {
  if (!amount) {
    return "";
  }
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    return "";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  });
  return formatter.format(numericAmount);
}

function formatDate(timestamp: string | number | Date) {
  const date = new Date(timestamp);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const suffix = getDaySuffix(day);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}${suffix} ${month}, ${year}`;
}

function getDaySuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export {
  convertDateToHumanReadableDate,
  formatCurrency,
  formatDate
};