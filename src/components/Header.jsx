import React from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import User from '../components/User';
import Button from '../components/ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link className='flex items-center text-4xl text-brand' to='/'>
        <MdShoppingBasket className='mr-2'/>
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Carts</Link>}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <HiPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}

