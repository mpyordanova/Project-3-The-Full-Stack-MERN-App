import React, {useState} from 'react'
import { Link } from 'react-router-dom'




function Dropdown() {
    const [state, setState] = useState(false);
    const ShowDropdown =()=>{
      setState(true);
    }
    const HideDropdown =()=> {
      setState(false);
    }
    return(
      <div className='dropdown'>
        <div className='dropdown-menu' onMouseEnter={ShowDropdown} onMouseLeave={HideDropdown}>
          <h2>Home</h2>
          {state?(<ul  onMouseEnter={ShowDropdown}>
          <Link className='dropdown-list' to='/'>Home</Link>
          <Link className='dropdown-list' to='/Favorites'>My Library</Link>
          </ul>):
          null}
        </div>
      </div>
    )
  }
  
  export default Dropdown;