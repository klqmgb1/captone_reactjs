import React from 'react'
import "./style.css"
import { useMagicColor } from './useMagicColor'
export default function Circle() {
    const color = useMagicColor(0);
  return (
    <div className='square circle' style={{backgroundColor : color}}>Circle</div>
  )
}
