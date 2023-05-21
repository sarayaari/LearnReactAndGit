import React from 'react'
import { useForm } from "react-hook-form"
export default function MyForm() {
  const { register, getValues, handleSubmit, formState: { errors }, } = useForm();
  const onSub = (data) => {
     delete data.email2;
    console.log(data);
  }
  return (
    <div className='container'>
      <h1>Order form</h1>
      <form onSubmit={handleSubmit(onSub)} className='col-md-6 shadow p-2'>
        <label>Name:</label>
        <input  {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger d-block'>enter valid name (min 2 chars)</div>}
        <label>Phone:</label>
        <input  {...register("phon", { required: true, minLength: 6 })} type="tel" className='form-control' />
        {errors.phon && <div className='text-danger d-block'>enter valid phon (min 6 chars)</div>}
        <label>Email:</label>
        <input  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" className='form-control' />
        {errors.email && <div className='text-danger d-block'>enter valid email </div>}

        <label>Email repeat:</label>
        <input  {...register("email2", {
          required: true,
          validate: value => value === getValues("email")
        })} type="text" className='form-control' />
        {errors.email2 && <div className='text-danger d-block'> The passwords do not match</div>}
        <label>select your like color</label>

        <select {...register("color", { required: true })} className='form-select'>
          <option value="">choose color</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
        </select>

        {errors.color && <div className='text-danger d-block'>choose color</div>}
        <button className='btn btn-info mt-3'>Order</button>
      </form>
    </div>
  )
}