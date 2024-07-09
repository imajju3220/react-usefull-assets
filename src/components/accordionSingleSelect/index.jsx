import React, { useState } from 'react'
import data from './data';
import './styles.css';
export default function AccordionSingleSelect() {
  const [selected, setSelected]=useState(null); 
  function handleSingleSelection(getCurrentId){
    // console.log(getCurrentId);
    setSelected(getCurrentId)
  }
  return (
    <div>
      <h4>single select</h4>
      <div className='wrapper'>
        <div className='accordion'>
           {data && data.length>0 ? (
            data.map((dataItem)=>(
                <div className='item' key={dataItem.id}>
                    <div className='title' onClick={()=>handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>           
                    {
                        selected === dataItem.id ? 
                        (<div className='content'>{dataItem.answer}</div>)
                        : null
                    }
                </div>
                ))
           ):(
            <div>no data found</div>
           )}
        </div>
    </div>
    </div>
  )
}
