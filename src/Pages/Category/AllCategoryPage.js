import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitlty/Pagination'

const AllCategoryPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer />
            <Pagination/>
            
        </div>
    )
}

export default AllCategoryPage