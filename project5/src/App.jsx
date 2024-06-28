import { useState } from 'react'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/1235971/pexels-photo-1235971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      <InputBox/>
      

    </div>
  )
}

export default App
