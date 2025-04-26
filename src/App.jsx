import React,{useEffect,useState} from 'react'
import './App.css'
import JSConfetti from 'js-confetti'
import MoneyRain from './MoneyRain';

function App() {

  const[currency, setCurrency] = useState([])
  const[fromValue, setFromValue] = useState()
  const[toValue, setToValue] = useState()
  const[fromCurrency, setFromCurrency] = useState()
  const[toCurrency, setToCurrency] = useState()
  const[btn, setButton] = useState('')
  const jsConfetti = new JSConfetti()

  const convertCurrency = () =>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
      .then(response=>response.json())
      .then(data=>{
        setToValue(fromValue * data[fromCurrency][toCurrency])
      })
  }

  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then(response=>response.json())
    .then(data=> {
      setCurrency(data)
    })
    
  },[])
  useEffect(()=>{
    if(btn){
      jsConfetti.addConfetti({
        emojis:['💰','💲','💴','💵','🤑','💷','🪙','💶'],
        emojiSize:50,
        ConfettiNumber:50,
      });
    }
   },[btn]);
  
  return (
  <>
  <div className="main">
  <MoneyRain/>
  <div className='card'>
  <h1 id="heading" >Currency Converter</h1>
  <div className= 'from'>
    <h1>From</h1>
  
  <div className="calculate">

  <select className='select' onChange={(event)=>{setFromCurrency(event.target.value)}}>
                            <option>Choose here</option>
                            {Object.entries(currency).map(([key , value])=>
                              <option key={key} value={key}>
                                {value}
                              </option>
                            )}
                          </select>
                          <input 
                          className='inp'
                          value={fromValue}
                          onChange={(event)=>{setFromValue(event.target.value)}}
                          />
                      </div>
             </div>
                

                <div className='from'>
                      <h1>To</h1>
                      <div className='calculate'>
                          <select className='select' onChange={(event)=>{setToCurrency(event.target.value)}}>
                          <option>Choose here</option>
                          {Object.entries(currency).map(([key , value])=>
                              <option key={key} value={key}>
                                {value}
                              </option>
                            )}
                          </select>
                          <input 
                          className='inp' 
                          disabled
                          value={toValue}
                          onChange={(event)=>{setToValue(event.target.value)}}
                          />
                      </div>
           </div>
           <button id='btn' onClick={() =>{
            convertCurrency();
          setButton('clicked');
          }}
          >Calculate</button>
    </div>
</div>
  </>
    
  )
}

export default App