import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar';
import {UserType} from '../../types/userType';

type UserManagerProps = {
  users: UserType[],
  onRemove: (id: number) => void
}

const UserManager = ({ users, onRemove }: UserManagerProps) => {
  // console.log(users);
  
  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.surname}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.role}</td>
                      
                      <td>
                        <button onClick={() => onRemove(user._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManager