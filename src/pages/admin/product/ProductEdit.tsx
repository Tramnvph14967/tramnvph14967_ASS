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
  price: number
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


        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span>Fields is required</span>}
          <input type="number" {...register('price')} />
          <button>Update</button>
        </form>


      </div>
    </div>

  )
}

export default ProductEdit