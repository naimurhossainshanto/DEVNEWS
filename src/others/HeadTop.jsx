import React from 'react'
import { useEffect, useState } from 'react'
import { formatTime } from '../utils/Timeutils'
import WeatherApi from '../utils/WeatherApi'
import LiveCalendar from '../utils/LiveCalendar'

const HeadTop = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className='flex justify-start bg-blue-950 text-gray-400 p-2 items-center text-[11px] lg:text-lg'>'
          <div><WeatherApi/></div>
      <div className=" lg:mx-8 mx-2">{formatTime(currentTime)}</div>
      <div><LiveCalendar/></div>
    </div>
  )
}

export default HeadTop
