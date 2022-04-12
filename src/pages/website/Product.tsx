import React from 'react'
import { ProductType } from '../types/product'
import {Link} from 'react-router-dom'


type ProductProps = {
  products: ProductType[],
}

const Product = (products: ProductProps) => {
  // console.log(products);

  return (
    <div className="row p-5">
      <h2 className='text-center p-2'>Trending Now</h2>
      {products.products?.map((item) => {
        return (
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <span>Giá: {item.price} VNĐ</span>
            </div>
            <div className="card-body">
                  <a href="#" className="card-link">Add Card</a>
                  <Link to={`/product/${item._id}`} className="card-link">Detail</Link>
            </div>
          </div>

        </div>
        )
      })}

    </div>
  )
}

export default Product