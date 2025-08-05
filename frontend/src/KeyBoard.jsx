import React from 'react'
import {Circle,ChevronLeft,ChevronUp,ChevronRight,ChevronDown} from 'lucide-react'
function KeyBoard() {
  return (
    <div className='flex justify-center flex-col align-center'>
      <div className='bg-neutral-700 w-[1014px] ml-2 mr-2 mb-2 mt-8 h-[370px] rounded-lg grid grid-rows-6 '> 
       <div className='flex flex-row'>
        <button className='text-white bg-black m-1 px-5 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]
 '>esc</button>
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F1</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F2</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F3</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F4</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F5</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F6</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F7</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F8</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F9</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F10</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>F11</button>
        
        <button className='text-white bg-black m-1 px-3 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F12</button>
        
        <button className='text-white bg-black m-1 px-2 py-2 rounded-md text-xs flex w-12 shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'><Circle className='flex-1 mx-auto my-auto text-2xl'/></button>
       </div>
       <div className='flex flex-row'>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>.</button>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>1</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>2</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>3</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>4</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>5</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>6</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>7</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>8</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>9</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>0</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>-</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>=</button>
        
        <button className='text-white bg-black m-1 px-4 py-2 rounded-md text-xs flex w-16 shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>delete</button>
       </div>
       <div className='flex flex-row'>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>tab</button>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>Q</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>W</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>E</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>R</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>T</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>Y</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>U</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>I</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>O</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>P</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>[</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>]</button>
        
        <button className='text-white bg-black m-1 px-4 py-2 rounded-md text-xs flex w-10 shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>\</button>
       </div>
       <div className='flex flex-row'>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>caps lock</button>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>A</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>S</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>D</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>F</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>G</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>H</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>I</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>K</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>L</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>;</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>,</button>
        
        <button className='text-white bg-black m-1 ml-2 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>return</button>
       </div>
       
       <div className='flex flex-row'>
        <button className='text-white bg-black m-1 px-10 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>shift</button>
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>Z</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text- shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>X</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>C</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>V</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>B</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>N</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>M</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>,</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>.</button>
        
        <button className='text-white bg-black m-1 px-4 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)]'>/</button>
        
        <button className='text-white bg-black m-1 px-8 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>shift</button>
       </div>
       
       <div className='flex flex-row '>
        <button className='text-white bg-black m-1 px-5 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>fn</button>
        <button className='text-white bg-black m-1 px-2 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>control</button>
        
        <button className='text-white bg-black m-1 px-2 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>option</button>
        
        <button className='text-white bg-black m-1 px-2 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>command</button>
        
        <button className='text-white bg-black m-1 px-15 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>space bar</button>
        
        <button className='text-white bg-black m-1 px-2 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>command</button>
        
        <button className='text-white bg-black m-1 px-2 py-1 rounded-md text-xs shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'>option</button>
        
        <button className='text-white bg-black m-1 px-1 py-1 rounded-md shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'><ChevronLeft className='text-xs'/></button>
        <div className='flex flex-col m-1'>
                  <button className='text-white bg-black  px-2  rounded-md mb-1 h-8 shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'><ChevronUp className='text-xs'/></button>
   
        <button className='text-white bg-black  px-2  rounded-md shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)] mb-1'><ChevronDown className='text-xs'/></button>
        </div>

        <button className='text-white bg-black m-1 px-1 py-1 rounded-md shadow-[_2px_2px_2px_rgba(_200,_200,_200,_0.6)] hover:shadow-[0_6px_11px_rgba(8,_112,_184,_0.7)]'><ChevronRight className='text-xs' /></button>
        
       </div>
      </div>
      <div>
        
      <h1 className='text-center mx-auto bg-clip-text text-transparent tracking-tight leading-tight text-3xl max-w-md bg-gradient-to-b from-neutral-50 to-neutral-400'> Mac Book KeyBoard Built Using Tailwind CSS</h1>
      </div>
    </div>
  )
}

export default KeyBoard
