import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Search() {
  return (
    <>
    <div className='textbox'>
        <div className="input">
        &nbsp;<input type='text' placeholder='🔎Paracetomal' />
        </div>
        <button type='submit' style={{height: '30px', width : '100px'}} >Search</button>
    </div>
    </>
  )
}

export default Search