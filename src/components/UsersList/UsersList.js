import React from 'react'

const Empty = () => <div>Sorry, no users found.</div>
const Loading = () => <div>Loading users...</div>
const List = users => (
  <ul>
    {users.map(user => (
      <li key={user.url}>{user.name}</li>
    ))}
  </ul>
)
const Wrapper = content => (
  <div>
    <h3>USERS LIST</h3>

    {content}
  </div>
)

const UsersList = ({ users, loading }) => {
  if (loading) return Wrapper(Loading())
  if (!users.length) return Wrapper(Empty())
  return Wrapper(List(users))
}

export default UsersList
