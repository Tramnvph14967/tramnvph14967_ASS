import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

type ProductType = {
  _id?: number,
  name: String,
  image: String,
  price: number,
  description: String,
  detail: String,
  category: String
}

const ProductDetail = (props: Props) => {

  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>(); // 1

  useEffect(() => { // 3
    const getProduct = async () => {
      const response = await fetch('http://localhost:8000/api/product/' + id);
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);



  return ( //2
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body col-md-12 flex" style={{ display: "flex" }}>

            <div className="col-md-6">
              <div className="pro-img-details">
                <img src="https://via.placeholder.com/550x380/FFB6C1/000000" alt />
              </div>

            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#">
                  {product?.name}
                </a>
              </h4>
              <p>
                {product?.description}
              </p>
              <div className="product_meta">
                <span className="posted_in">
                  <strong>Categories: </strong>
                  <a rel="tag" href="#">{product?.category}</a>
                </span>
                <br />
                <span><strong>Color: </strong> </span>
              </div>
              <div className="m-bot15"> <strong>Price : </strong>   <span className="pro-price"> {product?.price}</span></div>
              <div className="form-group">
                <strong>Quantity</strong>
                <input type="quantiy" placeholder={1} className="form-control quantity" />
              </div>
              <p className='py-4'>
                <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
              </p>
            </div>
          </div>
          <div>
            <h3 className='py-4'>
              Chi Tiết Sản Phẩm
            </h3>
            <p>{product?.detail}</p>
          </div>
          <div>
            <h3>
              Bình Luận
            </h3>
            <div className="mb-3">
              <textarea  className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              <button>Gửi</button>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default ProductDetail