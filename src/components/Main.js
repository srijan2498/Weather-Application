import React from 'react'
import Hourly from './Hourly'

const Main = ({ data, dataHoury }) => {
    return (
        <div className='main_container'>
            <div className="main_container_inner">
                <div className="main_container_top">
                    <div className="city_name">{data.name}, {data.sys?.country}</div>
                    <div className="temp">{(""+data.main?.temp).split(".")[0]}°</div>
                    <div className="current_status">{data.weather ? data.weather[0].main : ""}</div>
                    <div className="high_low">
                        <div className="hlt">H: {(""+data.main?.temp_max).split(".")[0]}°</div>
                        <div className="hlt">L: {("" + data.main?.temp_min).split(".")[0]}°</div>
                    </div>
                    <div className="icon" style={{ backgroundImage: ` url(${`https://openweathermap.org/img/w/${data.weather ? data.weather[0].icon : ""}.png`})` }}></div>
                </div>
                <fieldset>
                    <legend>Hourly Forcast</legend>
                    <div className="other_metrics">
                        {dataHoury.map((item, i) => {
                            return <Hourly item={item} key={i} />
                        })}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Main
