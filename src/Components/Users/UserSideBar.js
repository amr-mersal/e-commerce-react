import React from 'react'
import { Link } from 'react-router-dom'
 const UserSideBar = () => {
  return (
    <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                         Orders
                    </div>
                </Link>
                <Link to="/user/favoriteProducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Favirote Products
                    </div>
                </Link>
                <Link to="/user/address" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Address
                    </div>
                </Link>

                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Profile
                    </div>
                </Link>

            </div>
        </div>
  )
}
export default UserSideBar