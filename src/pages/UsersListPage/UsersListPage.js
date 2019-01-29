import React from 'react'
import UsersList from '../../../src/components/UsersList'
import { connect } from 'react-redux'
import { loadUsers as loadUsersAction } from '../../store/users/actions'

const UsersListPage = ({ users, loadUsers }) => (
  <div>
    <h1>USERS LIST PAGE</h1>
    <UsersList users={users.list} loading={users.loading} />

    {!users.list.length && (
      <button onClick={() => loadUsers()}>Load Users</button>
    )}
  </div>
)
const mapStateToProps = state => ({
  users: state.users
})
const mapActionsToProps = {
  loadUsers: loadUsersAction
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(UsersListPage)
