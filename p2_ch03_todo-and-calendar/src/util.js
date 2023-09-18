import dayjs from 'dayjs';

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  const startDay = dayjs(start).get('day');
  for (let i = 1; i < startDay; i++) {
    const date = dayjs(start).subtract(i, 'day');
    filledColumns.unshift(date);
  }

  const endDay = dayjs(end).get('day');
  for (let i = 1; i <= 6 - endDay; i++) {
    const date = dayjs(end).add(i, 'day');
    filledColumns.push(date);
  }

  return filledColumns;
}

export const getCalendarColumns = (now) => {
  // startOf를 할때마다 1일이 아닌 전달의 마지막 날을 가져온다
  const start = dayjs(now).startOf('month').add(1, 'day');
  const end = dayjs(now).endOf('month');
  const endDate = dayjs(end).get('date');

  const columns = [];
  for (let i = 0; i < endDate; i++) {
    const date = dayjs(start).add(i, 'day');
    columns.push(date);
  }

  const filledColumns = fillEmptyColumns(columns, start, end);
  console.log(filledColumns.length);
  return filledColumns;
};