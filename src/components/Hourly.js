import React from 'react'

const Hourly = ({item}) => {
  return (
    <div className='hourly_item_container'>
          <div className="hourly_time">{item.dt_txt?.split(" ")[1].split(":")[0]}</div>
          <div className="hourly_icon" style={{ backgroundImage: `url(${`https://openweathermap.org/img/w/${item.weather ? item.weather[0].icon : ""}.png`})`}}></div>
          <div className="hourly_temp">{("" +item.main?.temp).split(".")[0]}°</div>
    </div>
  )
}

export default Hourly
