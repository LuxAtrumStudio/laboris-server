function replaceAll(src: string, search: string, replacement: string) {
    const target: string = src;
    return target.replace(new RegExp(search, 'g'), replacement);
}

export function DateValidator(s: string) {
  if (s.length === 0) {
    return false;
  }
  s = s.toLowerCase();
  s = replaceAll(s, ' ', '@');
  s = replaceAll(s, '/', '-');
  const regexes = [
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{4}@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])-[0-9]{2}@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])-(0?[1-9]|1[0-2])@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{4}@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])-[0-9]{2}@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|[12][0-9]|3[0-1])@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturd…)@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturd…)@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(mon|tue|wed|thu|fri|sat|sun)$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(mon|tue|wed|thu|fri|sat|sun)@(0?[1-9]|1[0-2])(am|pm)$/,
    /^(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/,
    /^(0?[1-9]|1[0-9]|2[0-4]):[0-5][0-9]$/,
    /^(0?[1-9]|1[0-9]|2[0-4])$/,
    /^(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    /^(0?[1-9]|1[0-2])(am|pm)$/,
  ];
  console.log(s);
  for (const reg in regexes) {
    if (s.match(regexes[reg])) {
      console.log(s, reg, regexes[reg]);
      return reg;
    }
  }
  return 0;
}

export function ParseDate(s: string) {
  if (s.length === 0) {
    return null;
  }
  s = s.toLowerCase();
  s = s.replace(' ', '@');
  s = s.replace('/', '-');
  s = s.replace('.', '-');
  const id = DateValidator(s);
  // console.log(s.split('@'));
  const date: string[][] = [s.split('@')[0].split('-'), s.split('@')[1] ? s.split('@')[1].split(':') : []];
  console.log(date[0], date[1]);
  return Math.floor(Date.now() / 1000);
}
