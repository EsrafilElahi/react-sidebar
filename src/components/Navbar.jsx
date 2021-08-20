import { useState } from 'react'
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'
import { IconContext } from 'react-icons'


function Navbar() {

    const [sideBar, setSideBar] = useState(false)

    const handleChange = () => {
        setSideBar(!sideBar)
    }

    console.log('sidebar', sideBar)

    return (
        <>

            {/* None Sidebar */}
            <div className='navbar'>
                <span ><AiOutlineAlignLeft className='icon' onClick={handleChange} /></span>
            </div>


            {/* Sidebar */}
            <nav onClick={handleChange} className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    <li>
                        <AiOutlineClose className='icon' />
                    </li>
                    {
                        NavbarData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}><span>{item.icon}</span> <span>{item.name}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </>
    )
}

export default Navbar
