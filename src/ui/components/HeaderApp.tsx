export default function HeaderApp() {
    return(
        <header className='flex flex-row justify-end items-center font-light w-full h-12 overflow-hidden bg-slate-950 top-0 p-4'>
        <button
          id="close"
          onClick={() => window.electron.sendFrameAction('CLOSE')}
          className='flex justify-center items-center bg-transparent hover:bg-red-700 text-white text-center py-4 px-5 size-7'
        >&times;</button>
        <button
          id="minimize"
          onClick={() => window.electron.sendFrameAction('MINIMIZE')}
          className='flex justify-center items-center bg-transparent hover:bg-gray-700 text-white text-center py-4 px-5 size-7'  
        > - </button>
        <button
          id="maximize"
          onClick={() => window.electron.sendFrameAction('MAXIMIZE')}
          className='flex justify-center items-center bg-transparent hover:bg-gray-700 text-white text-center py-4 px-5 size-7'
        >
          +
        </button>
      </header>
    )
}