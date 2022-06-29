import React from 'react';
import SingleUser from './SingleUser';
import usersList from './UsersList';

const AllUsers = () => {
    const { users } = usersList;
    return (
        <>
            <SingleUser users={users} />
        </>
    );
};

export default AllUsers;