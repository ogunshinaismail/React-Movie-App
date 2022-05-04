import React from 'react'
// import { useState } from 'react'

function Filter({searchTerm}) {
    console.log(searchTerm)
    return (
        <div className='filter'>
            <div className="search-btn">
                <input type="text" placeholder='Search movie...' onChange={e => { searchTerm(e.target.value) }} />
            </div>
        </div>
    )
}

export default Filter

// <div className="filter-dropdown">
//                 <div className="dropdown">
//                     Filter by category
//                 </div>
//                 <div className="dropdown-element">
//                     <p>Action</p>
//                     <p>Adventure</p>
//                     <p>Crime</p>
//                 </div>
//             </div>