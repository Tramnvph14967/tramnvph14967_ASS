import React from 'react'
import { ProductType } from '../../types/product'
import { Link, NavLink } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar'


type ProductManagerProps = {
  products: ProductType[],
  onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  // console.log(products);

  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Section title</h2>

          <button><a href="product/add">Add</a></button>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Detail</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.category}</td>
                      <td>{product.name}</td>
                      <td>{product.image} <a href=""></a></td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.detail}</td>
                      <td>
                        <Link to={`${product._id}/edit`} className="p-2 underline">Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => onRemove(product._id)}>Delete</button>
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

export default ProductManager