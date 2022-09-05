import React, { useEffect, useState } from 'react';

const moment = require('moment-timezone');

function Clock({ timezone }) {
  console.log(timezone, 'timezone here');
  const [time, setTime] = useState(moment().tz(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format('h:mm:ss a'));
    }, 1000);

    // console.log(timezone, time.format('h:mm:ss a'), 'here is the time and zone');
    // console.log(moment().tz(timezone).format('h:mm:ss a'), 'here is the time in correct');

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <p>{time?.format('h:mm:ss a')}</p>
    </div>
  );
}
export default Clock;
