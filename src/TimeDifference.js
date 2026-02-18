import React, { useState, useEffect } from "react";

const TimeDifference = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [seconds, setSeconds] = useState(0);

  // Update seconds every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startDate = props.startDate;
  const today = new Date();

  // Use proper date math - calculate difference in milliseconds
  const diffMs = today.getTime() - startDate.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  // Total days elapsed (accurate from date diff)
  let totalDaysElapsed = Math.floor(diffMs / oneDay);

  // Calculate years, months, days from the actual dates
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  let days = today.getDate() - startDate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  let secs = Math.floor((diffMs / 1000) % 60);
  let mins = Math.floor((diffMs / (1000 * 60)) % 60);
  let hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);

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
