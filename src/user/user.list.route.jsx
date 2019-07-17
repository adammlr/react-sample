import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchUsers } from './user.actions';
import { userList, userListIsLoading } from './user.selectors';
import UserListItem from './user.list.item';
import Loading from '../components/loading';

function UserListRoute({ userList, userListIsLoading, fetchUsers }) {
  useEffect(() => {
    if (userList === null) {
      fetchUsers();
    }
  }, [userList, fetchUsers]);

  return (
    <div>
      <h1 className="title">Users</h1>
      {userListIsLoading && <Loading></Loading>}
      {userList &&
        userList.map(user => <UserListItem key={user.id} {...user} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  userList,
  userListIsLoading
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListRoute);
