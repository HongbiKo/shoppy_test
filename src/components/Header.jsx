import React from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { login } from '../api/firbase';

export default function Header() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link className='flex items-center text-4xl text-brand' to='/'>
        <MdShoppingBasket className='mr-2'/>
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <HiPencil />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}

