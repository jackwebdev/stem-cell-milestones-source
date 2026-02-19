import React, { useState, useEffect } from "react";

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

const getElapsedTimeParts = (startDate, endDate) => {
  if (endDate.getTime() < startDate.getTime()) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    };
  }

  let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
  let yearCursor = new Date(startDate.getTime());
  yearCursor.setUTCFullYear(startDate.getUTCFullYear() + years);

  if (yearCursor.getTime() > endDate.getTime()) {
    years -= 1;
    yearCursor = new Date(startDate.getTime());
    yearCursor.setUTCFullYear(startDate.getUTCFullYear() + years);
  }

  let months =
    (endDate.getUTCFullYear() - yearCursor.getUTCFullYear()) * 12 +
    (endDate.getUTCMonth() - yearCursor.getUTCMonth());

  let monthCursor = new Date(yearCursor.getTime());
  monthCursor.setUTCMonth(monthCursor.getUTCMonth() + months);

  if (monthCursor.getTime() > endDate.getTime()) {
    months -= 1;
    monthCursor = new Date(yearCursor.getTime());
    monthCursor.setUTCMonth(monthCursor.getUTCMonth() + months);
  }

  let remainingMs = endDate.getTime() - monthCursor.getTime();

  const days = Math.floor(remainingMs / MS_IN_DAY);
  remainingMs -= days * MS_IN_DAY;

  const hours = Math.floor(remainingMs / MS_IN_HOUR);
  remainingMs -= hours * MS_IN_HOUR;

  const mins = Math.floor(remainingMs / MS_IN_MINUTE);
  remainingMs -= mins * MS_IN_MINUTE;

  const secs = Math.floor(remainingMs / MS_IN_SECOND);

  return { years, months, days, hours, mins, secs };
};

const TimeDifference = (props) => {
  const [nowMs, setNowMs] = useState(() => Date.now());

  // Refresh often so milestone/elapsed checks happen close to exact timestamp boundaries.
  useEffect(() => {
    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const startDate = props.startDate;
  const nowDate = new Date(nowMs);
  const diffMs = nowMs - startDate.getTime();
  const totalDaysElapsed = Math.floor(diffMs / MS_IN_DAY);
  const { years, months, days, hours, mins, secs } = getElapsedTimeParts(
    startDate,
    nowDate,
  );

  return (
    <>
      <div className="totalDays">
        <h2>{totalDaysElapsed} Days</h2>
      </div>

      <div>
        <h3>Time Elapsed 🕐</h3>
        {totalDaysElapsed >= 0 && (
          <>
            {years > 0 && <h3>{years} Years</h3>}
            {(months > 0 || years > 0) && <h3>{months} Months</h3>}
            <h3>{days} Days</h3>
          </>
        )}
        <h3>{hours} Hours</h3>
        <h3>{mins} Mins</h3>
        <h3>{secs} Secs</h3>
      </div>
    </>
  );
};

export default TimeDifference;
