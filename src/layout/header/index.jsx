import React, { memo } from 'react'
import { Link } from 'react-router-dom/dist'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='w-full sticky top-0 z-50 text-black bg-gray-400'>
            <nav className='py-3 max-w-[1520px] mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-3xl font-extrabold'>Logo</Link>
                <div className='w-[600px] flex items-center bg-white rounded-xl'>
                    <input className='w-[95%] input bg-white' type="search" placeholder="Search..." />
                    <FaSearch fontSize={20} />
                </div>
                <div className="flex items-center justify-center gap-8 font-bold text-lg">
                    <Link to={'/wishlist'} >Wishlist</Link>
                    <Link to={'/cart'} >Cart</Link>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Link to='/' className='w-[100px] btn btn-primary text-lg font-bold'>Login</Link>
                    <Link to='/admin/create' className='w-[100px] btn btn-primary text-lg font-bold'>Admin</Link>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)