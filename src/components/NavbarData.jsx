import { AiFillHome } from 'react-icons/ai'
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import { IoMdPeople, IoMdHelpCircle, IoIosPaper } from 'react-icons/io'


export const NavbarData = [
    {
        name: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        name: 'Products',
        path: '/products',
        icon: <FaCartPlus />
    },
    {
        name: 'Team',
        path: '/team',
        icon: <IoMdPeople />
    },
    {
        name: 'News',
        path: '/news',
        icon: <IoIosPaper />
    },
    {
        name: 'AboutUs',
        path: '/about-us',
        icon: <FaEnvelopeOpenText />
    },
    {
        name: 'ContactUs',
        path: '/contact-us',
        icon: <IoMdHelpCircle />
    }
]
