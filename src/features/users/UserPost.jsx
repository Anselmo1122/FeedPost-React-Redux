import React from 'react'
import { useSelector } from 'react-redux'

const UserPost = ({ userId }) => {

  const singleUser = useSelector((state) => state.users.find((user) => user.id === userId ))

  console.log(singleUser)

  return (
    <div>
      <p>by {singleUser ? singleUser.name : "Unknown"}</p>
    </div>
  )
}

export default UserPost