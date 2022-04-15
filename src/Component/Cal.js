import { } from 'bootstrap';
import { useState } from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './Cal.css';
const Cal =()=>{
    const [result,setResult] = useState("");

    const clickHandle = (e) =>{
        setResult(result.concat(e.target.name));
        console.log(result)
    }
    const clearClick = ()=>{
        setResult("")
    }
    const backSpace = ()=>{
        setResult(result.slice(0,-1))
    }
    const calculate = ()=>{
        setResult(eval(result).toString())
    }
   
    return(
        <>
 <div >
     <h2 className='text-center'>calculator</h2>
 </div>
 <div className="main">
        <Container className='container '>
           
            <form>
            <input type="text"  pattern="[0-9]*"  value={result} onChange={(e)=>setResult((v) => (e.target.validity.valid ? e.target.value : v))}></input>
            </form>
                
            <div className='keypad'>
            <button name='ac' id='ac' onClick={clearClick} className='highlight'>AC</button>
            <button name='backspace' onClick={backSpace} className='highlight'>C</button>
            <button name='/' onClick={clickHandle} className='highlight'>/</button>
            <button name='7'  onClick={clickHandle}>7</button>
            <button name='8' className=' bg' onClick={clickHandle}>8</button>
            <button name='9' className=' bg' onClick={clickHandle}>9</button>
            <button name='*' className='highlight' onClick={clickHandle}>*</button>
            <button name='4' className=' bg' onClick={clickHandle}>4</button>
            <button name='5' className=' bg' onClick={clickHandle}>5</button>
            <button name='6' className=' bg' onClick={clickHandle}>6</button>
            <button name='-' className='highlight' onClick={clickHandle}>-</button>
            <button name='1' className=' bg' onClick={clickHandle}>1</button>
            <button name='2' className=' bg' onClick={clickHandle}>2</button>
            <button name='3' className=' bg' onClick={clickHandle}>3</button>
            <button name='+' className='highlight' onClick={clickHandle}>+</button>
            <button name='.' className='' onClick={clickHandle}>.</button>
            <button name='0' className=' bg ' onClick={clickHandle}>0</button>
            <button name='=' id="equal" className ="highlight"onClick={calculate} >=</button>
            </div>
           
        </Container>
        </div>  

        </>
    )
}
export default Cal;