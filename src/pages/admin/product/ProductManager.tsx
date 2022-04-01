import React from 'react'
import { ProductType } from '../../types/product'


type ProductManagerProps = {
  products: ProductType[],
  onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  // console.log(products);

  return (
    <div>
      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Header</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>placeholder</td>
                  <td>
                    <button>Update</button>
                  </td>
                  <td>
                    <button onClick={() => products.onRemove(product.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}





          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductManager