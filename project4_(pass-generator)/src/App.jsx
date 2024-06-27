import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbersAllowed) str += '0123456789'
    if(charsAllowed) str += '!@#$%^&*()_+'
    
    for(let i=1; i<length; i++){
      const char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numbersAllowed, charsAllowed])

  useEffect(()=>{
    generatePassword()
  },[length, numbersAllowed, charsAllowed])
   
  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
  }


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
    my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3'
        placeholder='Password' readOnly>  
        </input>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5
        shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)} name='' id=''></input>
          <label htmlFor='length'>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numbersAllowed}  onChange={()=>{
            setNumbersAllowed((prev)=>!prev)
          }} 
          name="" id="" />
          <label htmlFor='numbers'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charsAllowed}  onChange={()=>{
            setCharsAllowed((prev)=>!prev)
          }} 
          name="" id="" />
          <label htmlFor='chars'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
