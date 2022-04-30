import React from 'react'

function Filter() {
    return (
        <div className='filter'>
            <div className="search-btn">
                <input type="text" placeholder='Search movie...' />
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