import React from 'react'
import { Link } from 'react-router-dom'
export default function VerticalNavbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>

            </li>

            <li>
            <Link to='/case-converter'>Case Converter</Link>
                

            </li>

            <li>
            <Link to='/text-to-handwriting-converter'>Text To HandWriting Converter</Link>

            </li>

            <li>
            <Link to='/text-to-image'>Text To Image Converter</Link>

            </li>


        </ul>
    </nav>
  )
}


