import React from 'react'
import Habit from './Habit'
import Month from './Month'
import ProgressCircle from './ProgressCircle'
import DailyProgress from './DailyProgress'


const Header = () => {
  return (
     <div className="p-2 flex gap-3 border">

  <div className="flex flex-col">
    <Habit />
    <Month />
  </div>

  <div className="w-250px">
    <DailyProgress />
  </div>

  <div className="w-50px">
    <ProgressCircle />
  </div>

</div>
  )
}
export default Header