import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/product';
import { ProductType } from '../../types/product';
import Nav from '../../../components/admins/Navbar'


type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  image: string,
  price: number,
  description: string,
  detail: string
}

const ProductEdit = (props: ProductEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await read(id);
      // console.log(data);

      reset(data);
    }
    getProducts();
  }, [])



  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    alert("Update thành công .")
    navigate("/admin/product")
  }
  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />
         <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sửa Sản Phẩm</h1>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Image</span>
            <input type="text" {...register('image')} className="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input type="number" {...register('price')} className="form-control" aria-label="Amount (to the nearest dollar)" />

          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input type="text" {...register('description')} className="form-control" />
          </div>
          <div className="input-group py-4">
            <span className="input-group-text">Detail</span>
            <textarea className="form-control" {...register('detail')} aria-label="With textarea" defaultValue={""} />
          </div>

          <button>Update</button>
        </form>



      </div>
    </div>

  )
}

export default ProductEdit