export function formatDate(date = new Date().toDateString()) {
  const newDate = new Date(date); // Assuming you have a JavaScript date object

  const formattedDate = newDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

export function formatTime(time: string) {
  const newTime = new Date(time); // Assuming you have a JavaScript date object

  const formattedTime = newTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedTime;
}

export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9 -]/g, "");
  str = str.replace(/\s+/g, "-");
  str = str.replace(/-+/g, "-");
  return str;
}

export function decodeSlug(slug: string) {
  slug = slug.replace(/-/g, " "); // Replace hyphens with whitespace
  slug = slug.replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word
  return slug;
}

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  let timer: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  }) as T;
}

export function getRandomElements<T>(array: Array<T>, count = 5) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
}
