import React, { useContext } from 'react'
import { BsCart, BsPersonPlus } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { MyThemeContext } from '../../App'

const Header = () => {
    let { theme, setTheme} = useContext(MyThemeContext)

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')   
        }
    }
    return (
        <>
            <div className={`${theme == 'light' ? 'bg-slate-200' : 'bg-slate-700 text-white' } flex flex-col md:flex-row py-1.25 items-center`}>
                <div className="logo w-full md:w-1/4 text-center text-2xl font-bold text-blue-500 cursor-pointer">
                    STORE FRONT
                </div>
                <div className="sear w-full md:w-1/2 flex px-10 py-2 md:px-5">
                    <input type="search" className='w-full border-slate-500 bg-white px-5'/>
                    <button className={`${theme == 'light' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700'} px-5 `}>Search</button>
                </div>
                <div className="icons w-full md:w-1/4 text-2xl flex justify-evenly">
                    <button>
                        <RiLoginBoxFill/>
                    </button>
                    <button>
                        <BsPersonPlus/>
                    </button>
                    <button>
                        <BsCart/>
                    </button>
                    
                    <button className={`btn ${theme == 'light' ? 'btn-light' : 
                    'btn-dark'}`}
                    onClick={toggleTheme}>{theme}</button>

                    <button 
                    className={`btn btn-${theme}`}
                    onClick={toggleTheme}>{theme}</button>
                </div>
            </div>

                <div className="bg-slate-200 sticky top-0 z-99">
                <div className="flex justify-evenly w-1/2 m-auto py-4">
                    <Link to = '/'>HOME</Link>
                    <Link to = '/about'>ABOUT</Link>
                    <Link to = '/services'>SERVICES</Link>
                    <Link to = '/blogs'>BLOGS</Link>
                    <Link to = '/contact'>CONTACT</Link>
                </div>
                </div>
        </>
    )
}

export default Header