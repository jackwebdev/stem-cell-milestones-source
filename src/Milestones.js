import React, { useEffect, useState } from "react";

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const getWholeYearsBetween = (startDate, endDate) => {
  let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
  const anniversary = new Date(startDate.getTime());
  anniversary.setUTCFullYear(startDate.getUTCFullYear() + years);

  if (anniversary.getTime() > endDate.getTime()) {
    years -= 1;
  }

  return years;
};

const Milestones = (props) => {
  const [nowMs, setNowMs] = useState(() => Date.now());
  const startDate = props.startDate;
  const milestones = props.milestones;

  useEffect(() => {
    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Work out the future date e.g add days to today's date
  const addDays = (days) => {
    let date = new Date(startDate.getTime() + days * MS_IN_DAY);
    return date;
  };

  const getMilestoneLabel = (days, futureDate) => {
    if (days >= 365) {
      const wholeYears = getWholeYearsBetween(startDate, futureDate);
      const anniversary = new Date(startDate.getTime());
      anniversary.setUTCFullYear(startDate.getUTCFullYear() + wholeYears);

      // Only call it a year milestone if the future date is an exact anniversary.
      if (wholeYears > 0 && anniversary.getTime() === futureDate.getTime()) {
        return `${wholeYears} ${wholeYears === 1 ? "Year" : "Years"}`;
      }

      return `${days} Days`;
    }

    if (days >= 7) {
      const weeks = Math.floor(days / 7);
      return `${weeks} ${weeks === 1 ? "Week" : "Weeks"} (${days} days)`;
    }

    return `${days} Days`;
  };

  return (
    <div className="milestones">
      {milestones.map((days, index) => {
        const futureDate = addDays(days);
        const message = getMilestoneLabel(days, futureDate);
        const isReached = nowMs >= futureDate.getTime();

        return (
          <h4 key={index}>
            {message} {isReached ? "✅" : ""}
          </h4>
        );
      })}
    </div>
  );
};

export default Milestones;
