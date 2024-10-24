import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setPlace } from '../redux/Actions';
import { CiSearch } from "react-icons/ci";

const Navbar = ({ setSeachText}) => {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()

    const refElement=useRef(null)

    function getCity() {
        fetch('https://ipinfo.io/json?token=d26b2335bed978')
            .then(response => response.json())
            .then(data => {
                setSeachText(data.city)
                dispatch(setPlace(data.city, data.country))
            })
            .catch(error => {
            });
    }
    useEffect(()=>{
        getCity()
    }, [])

    return (
        <div className='navbar_container'>
            <div className="logo">Mausam</div>
            <div className="search_container">
                <form action="" onSubmit={(e) => {
                    e.preventDefault()
                    setSeachText(searchInput)
                    setSearchInput("")
                    refElement.current.blur()
                }}>
                    <input ref={refElement} type="text" placeholder='delhi...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <span className="search_icon"><CiSearch/></span>
                </form>
            </div>
        </div>
    )
}

export default Navbar
