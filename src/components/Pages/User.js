import React from 'react';
import AllUsers from './UsersComponent/AllUsers';
import SingleUser from './UsersComponent/SingleUser';
import SortBy from './UsersComponent/SortBy';
import UserInformation from './UsersComponent/UserInformation';

const User = () => {
    return (
        <div>
            <SortBy />
            <UserInformation />
            <AllUsers />
        </div>
    );
};

export default User;