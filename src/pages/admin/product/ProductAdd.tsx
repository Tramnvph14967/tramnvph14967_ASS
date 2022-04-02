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
  price: number
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

        <form  className="col-md-9 ms-sm-auto col-lg-10 px-md-4" action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('name', { required: true })} />
          <input type="number"{...register('price')} />
          <button>Add</button>
        </form>


      </div>
    </div>

  )
}

export default ProductAdd