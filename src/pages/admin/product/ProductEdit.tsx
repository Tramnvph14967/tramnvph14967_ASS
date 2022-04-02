import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/product';
import { ProductType } from '../../types/product';



type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  price: number
}

const ProductEdit = (props: ProductEditProps) => {
  const {register, handleSubmit, formState: {errors},reset} = useForm<FormInputs>();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await read (id);
      // console.log(data);
      
      reset(data);
    }
    getProducts();
  },[])



  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    alert("Update thành công .")
    navigate("/admin/product")
}
  return (
    <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name', { required: true })} />
      {errors.name && <span>Fields is required</span>}
      <input type="number" {...register('price')} />
      <button>Update</button>
    </form>
  )
}

export default ProductEdit