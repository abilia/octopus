import React from 'react'

export function PlaceholderSquid(props) {
  const squidData = props.userList.map((user) => (
    <div key={user.id}>
      {user.username}
    </div>
  ));

  return (
    <div>
      {squidData}
    </div>
  )
}