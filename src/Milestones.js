import React from "react";

const Milestones = (props) => {
  const startDate = props.startDate;
  const milestones = props.milestones;

  // Work out the future date e.g add days to todays date
  const addDays = (days) => {
    let date = new Date(startDate.getTime() + (days * 24 * 60 * 60 * 1000));
    return date;
  };

  // Work out days left from future date
  const daysLeft = (futureDate) => {
    let today = new Date();
    const diff = futureDate - today;
    return diff;
  };

  return (
    <div className="milestones">
      {milestones.map((days, index) => {
        let message;
        // Greater than or equal to 1 year (365 days)
        if (days >= 365) {
          message = `${Math.round(days / 365)} Years`;
        // If weeks is greater than or equal to 1 week but less than a year
        } else if (days >= 7 && days < 365) {
          message = `${Math.floor(days / 7)} Weeks (${days} days)`;
          // It's short enough to show days!
        } else {
          message = `${days} Days`;
        }
        const futureDate = addDays(days);
        const daysToGo = daysLeft(futureDate);
        return <h4 key={index}>{message} {daysToGo <= 0 ? '✅' : ''} </h4>
      })}
    </div>
  );
};

export default Milestones;
