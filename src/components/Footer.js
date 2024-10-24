import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer_container'>
            Srijan © {year}
        </div>
    )
}

export default Footer
