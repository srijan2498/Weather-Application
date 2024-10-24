import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Main from "./components/Main";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const city = useSelector((state) => state.placeReducer.city)
  const country = useSelector((state) => state.placeReducer.country)
  const [searchText, setSeachText] = useState(city ? city : "")
  const [data, setData] = useState([])
  const [dataHoury, setDataHourly] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSearch = async () => {
    try {
      setLoading(true)
      const apiKey ='e11a5619ed2bd7597ac1c2697c144f26'
      // const apiKey ='d27738a9709f019b60be66632d2334ed'
      const url = `https://api.openweathermap.org/data/2.5/find?q=${searchText}&units=metric&appid=${apiKey}`
      const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&units=metric&appid=${apiKey}`
      const res = await axios.get(url)
      const hourlyRes = await axios.get(hourlyUrl)
      const hour = new Date().getHours()
      let hd = []
      for (let i = 0; i < hourlyRes.data.list.length; i++) {
        if (Number(hourlyRes.data.list[i].dt_txt?.split(" ")[1].split(":")[0]) >= hour || (hour >= 21 && Number(hourlyRes.data.list[i].dt_txt?.split(" ")[1].split(":")[0]) == 0)) {
          for (let k = i; k < i + 9; k++) {
            hd.push(hourlyRes.data.list[k])
          }
          break
        }
      }
      setData(res.data.list[0])
      setDataHourly(hd)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      setTimeout(() => {
        alert(`${searchText} not found!`)
        setLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    setLoading(true)
    if (searchText) {
      handleSearch()
    }
  }, [searchText])
  return (
    <>
      <BrowserRouter>
        {loading && <Loading />}
        <Navbar setSeachText={setSeachText} setLoading={setLoading} />
        <Routes>
          <Route exact path={'/'} element={<Main data={data} dataHoury={dataHoury} />} />
        </Routes>
        <div className="hr_container"><hr/></div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
