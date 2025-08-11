import React, { useState, useEffect } from 'react';

function LiveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  

  // এখানে তারিখের ফরম্যাট নির্ধারণ করো
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long', // Saturday, Sunday ...
    year: 'numeric',
    month: 'long',  // January, February ...
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div>
      <h2>{formattedDate}</h2>
   
    </div>
  );
}

export default LiveCalendar;
