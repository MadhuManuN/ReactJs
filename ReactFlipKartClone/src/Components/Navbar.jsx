import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return(
                <nav id='navbar'>
                    <div className='space'></div>
                    <div id='firstdiv'>
                        <a href=""><img id='flip' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                        <a href="/plus" id='explore'>
                            Explore
                        <span className='plus'>Plus</span>
                        <img id='plusimg' src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png
" alt="" />
                        </a>
                    </div>
                                <div className='searchdiv'>
                                    <input className='searchmain' type="text" placeholder='Search for Products,brands and more'/>
                                    <button><i className='bx bx-search-alt-2'></i></button>
                                </div>

                    <div className='login1'>
                        <Link to="/" className='login3' href="">Login</Link>
                    </div>

                    <div className='home'>
                      <Link to="/user"><span>Home</span></Link>
                    </div>

                    <div className='sell'>
                      <Link to="/addnewproduct"  ><span>Sellers</span></Link>
                    </div>
                    <div className='cart'>
                        <Link to="/cartProducts"><i className='bx bxs-cart-alt'></i>Cart</Link>
                    </div>
                    <div className="logout">
                    <Link to="/"><button >Logout</button></Link>
                    </div>
                </nav>

    )
}

                export default Navbar

//                 <div className="div1">
    
//      <div className="div2" >
//      <li>
//      <a id="" href=""> <img height="27px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="" /></a>
//      <div className="pad">
//     <li>
//     <a href=""> <input width="200px" type="text" placeholder="Search For Product and more" /> </a>
//      <a href=""><img id="anchor" height="33px"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAQlBMVEX///+SkpKNjY34+PiKiorz8/OkpKSfn5+np6eHh4fo6OiZmZn8/Pzc3Ny8vLzt7e21tbWvr6/R0dHIyMjCwsLi4uKXaAJoAAAEQUlEQVR4nO1aa5ejIAwtb1BR8fH//+oSUDs7M90RCU7PHu6ntqfiJdwkEPJ4VFRUVFRUVFRUVFRU3AbR2Kl3Uiqpx2VaB/aLXIbZKco53cE5keP0O4yapTWcks+g3KhJ3E1mdeSgshvn+b0dbyVktdleTo1ptev7pfcKIub4mY/DXWQGHS3hrSCXlXXd9nvHhB3VZjVK+ntENMcXUq+RbyzQNXMbbcTVWp7MIPk2+dfyWF00H++7l//BQRNMQ3n/b2msMvJxZSU9BdMY1/z4T9vyYMSSip6Dach0Zg3EGDVdTkCzATbtz6aJmKLkz/49FUswvzsvz6al5fhYsA0fU5xFBD5tCT2vYaZj2kNMUVhefH/vYKKpbDyfIJ8enQ74CZXp02wCH4vMxvKrIghPEtz8xVqIftfm2FP05VpgyOXiwyBnjhkNWQhoV58Gn6QakU6w93T58eAGeOYRoBx9PXgIDtEcjQ7kcZMzOzCPQYvNEDlUzgADZixseJZyAM7zUUixB4ScmQYhFiKJmcl8IXY5cetvDH5mPDfphK0hCh3wK5rrFrAzNCjiAenI3JEgseMkCoXhpJCD6YzApsMZSCJFHoGzffJaTtn1v0SDcxhYMBToYSFk5J8lwT8VQtoKdPKnBXEZ44QT6OQv+v9MJ3+cCZMOkpQRPCs4en54B0fP2N8eQAqDjiJtl3GSBErmA8grpYLPEFgpNGwwskW4om0woMzEc10rbL9QyjwCjth5B4nHQ8P2H4PNo9Pe0DJvDAYWRpHOVr7NW60J72DzGEyuV0QDY1UIoWJAcgaDkgrWWm0lgxwxa7RjDYCpvCN2OORnR9InZp6lHkeRa+/hNuiqeSZk48SgenXEUDtD2DF9QKeuh2aHV7040ITa6ZX1n0OBHJdN3M2RNl0+luLsJj9DhkuJVD4N3DplxawXGIIiE1NpvCDBLHE/hw6XfTLlcLLGR8rc79sw1fa8y8bL0CKXfWF4E+5+zx4r+rJXs5t9fDw8M99Gbe0hGHWLV3xCNwNXPxtoPhpqqC7XGyLinM2/CbGJ8g8dRhfC1VmwPraEUG1fbcjYrLa2kW29qC7YihG7Kwg1ZLFfpy0mt1nGONHtfLDuI74D23XhheTmdRCs82BMDHZRhO4MYDmF3r4lhatUDL3ZtAGNca3SzmntmRytaYbM0R6s3fkU7XVii3r2nhHy8bP/Ip9Jiu32KRYNt/dYx+lfNCIVSsbmo8jFHXqOWBfX+uWKjYzcL6Aa5y9BmMndPuV70zommmle+n5ZZtuIb1946Lm8fU6BqVv0fBqHfQrmrxQc/l4wf6Xg6e/vwUfIN9VzyfyVgHvy13nclL9O4678dRY35q9TuDN/ncHb6fnN8hd7s/z11PO72ee3mUTs+etimyY6Nj3jFeIzEf3dlCtuJIIpww1qrTkT9uuZo6KioqKioqKioqKi4v/BH3FmH0vE93JKAAAAAElFTkSuQmCC" alt="" /> </a>
//      </li>
//     </div>
     
//      </li>
//      </div>
//     <div className="div3">
//     <li>
//      <a href=""><button id="btn">Login</button></a>
//      <a href="">Become a seller</a>
     

// <select name="cars" id="cars">
//   <option >More</option>
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>
//     <a href="">  Cart  </a>

//     </li>

//     </div>
//     </div>