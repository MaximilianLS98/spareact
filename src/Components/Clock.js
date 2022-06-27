import React, { useEffect, useState } from 'react';

const moment = require('moment-timezone');

function Clock({ timezone }) {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock">
      <p>{time?.format('h:mm:ss a')}</p>
    </div>
  );
}
export default Clock;
