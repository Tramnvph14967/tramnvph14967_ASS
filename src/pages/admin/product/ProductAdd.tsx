import React from 'react'
import { ProductType } from '../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar'


type ProductAddProps = {
  onAdd: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  image: string,
  price: number,
  description: string,
  detail: string
}


const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onAdd(data);
    navigate('/admin/product')
  }
  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />

        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="text" {...register('name', { required: true })} />
          <input type="number"{...register('price')} />
          <button>Add</button> */}

          <h1>Thêm Sản Phẩm</h1>

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

          <button>Add</button>
        </form>


      </div>
    </div>

  )
}

export default ProductAdd