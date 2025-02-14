import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()

    const navItems =[
        {
            name: 'Home',
            slug: '/',
            active:true
        },{
            name: 'About',
            slug: '/about',
            active:false
        },
        {
            name: 'Login',
            slug: '/login',
            active:!authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active:!authStatus,
        },
        {
            name : 'All Posts',
            slug: '/posts',
            active:authStatus,
        } ,
        {
            name: "Add Post",
            slug: '/add-post',
            active: authStatus
        }   
    ]
    return (
        <header className='bg-gray-400 py-3 shadow'>
            <Container>
                <nav className='flex'>
                    <div className='mr-14'>
                        <Link to='/'>
                            <Logo width='70px'/>
                            </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=>
                        item.active ?(
                          <li key ={item.name}>
                            <button onClick={()=>navigate(item.slug)} className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                          </li>
                        ) : null)}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>

    )
}

export default Header