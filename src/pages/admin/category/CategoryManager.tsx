import React from 'react'
import {categoryType} from '../../types/categoryType'
import { Link, NavLink } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar'

type CategoryManagerProps = {
  categorys: categoryType[],
  onRemove: (id: number) => void
}

const CategoryManager = ({ categorys, onRemove }: CategoryManagerProps) => {
  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Section title</h2>

          <button><a href="category/add">Add</a></button>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {categorys?.map((category, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>
                        <Link to={`${category._id}/edit`} className="p-2 underline">Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => onRemove(category._id)}>Delete</button>
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

export default CategoryManager