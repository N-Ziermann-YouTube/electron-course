import { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import HeaderApp from './components/HeaderApp';

function App() {

  return (
    <div className='flex flex-col items-center h-screen w-screen bg-gray-900'>
      <HeaderApp />
      <section className='flex flex-col items-center justify-center h-full w-full gap-7'>
        <h1 className='font-bold text-6xl text-white'>ELECTRON APP</h1>
        <button className='text-white size-1/12 px-10 rounded-2xl cursor-pointer bg-slate-950 hover:bg-slate-500 hover:scale-105 transition-all duration-200'>Click Me</button>
      </section>
    </div>
  )
}

export default App;
