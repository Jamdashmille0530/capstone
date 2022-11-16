import React from 'react'
import Test from 'assets/test.jpeg'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search a User" />
      </div>
      <div className="userChat">
        <img src={Test} />
        <div className="userChatInfo">
          <span>Doyoung</span>
        </div>
      </div>
    </div>
  )
}
