import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userListData, userListIsLoading, fetchUsers } from './user.list.state';
import UserListItem from './user.list.item';
import Loading from '../components/loading';
import Title from '../components/title';

function UserListRoute({ userListData, userListIsLoading, fetchUsers }) {
  useEffect(() => {
    if (userListData === null) {
      fetchUsers();
    }
  }, [userListData, fetchUsers]);

  return (
    <div>
      <Title title="Users"></Title>
      {userListIsLoading && <Loading></Loading>}
      {userListData &&
        userListData.map(user => <UserListItem key={user.id} {...user} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  userListData,
  userListIsLoading
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListRoute);
