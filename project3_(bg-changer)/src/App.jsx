import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  function changeColor (color){
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>changeColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600'>red</button>
          <button onClick={()=>changeColor('blue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-700'>blue</button>
          <button onClick={()=>changeColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-700'>green</button>
          <button onClick={()=>changeColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-400'>yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App
