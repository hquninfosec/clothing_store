import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div>
            <a href="">Amoura</a>
        </div>

        <ul>
            <li>
                New & Featured
            </li>

            <li>
                Men
            </li>

            <li>
                Women
            </li>

            <li>
                Kids
            </li>

            <li>
                Sale
            </li>
        </ul>


        <ul>
            <li>
                <input type="search" name="" id="" />
            </li>

            <li>
                <FontAwesomeIcon icon={faHeart} />
            </li>
        </ul>
    </div>
  )
}

export default NavBar