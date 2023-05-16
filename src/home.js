import React from 'react'
import { useForm } from "react-hook-form"
function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
    }
    return (
        <div>
            <h3>Form</h3>
            <form onSubmit={handleSubmit(onSubForm)} id="id_form" >
                <label>name</label>
                <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.name && <div className="text-danger">* Enter valid name</div>}
                <label>phone</label>
                <input {...register("phone", { required: true, minLength: 2 })} className="form-control" type="number" />
                {errors.phone && <div className="text-danger">* Enter valid phone</div>}
                <label>email</label>
                <input {...register("email", { required: true, minLength: 2 })} className="form-control" type="email" />
                {errors.email && <div className="text-danger">* Enter valid email</div>}
                <label>select gender</label>
                <select {...register("select", { required: true, minLength: 2 })} className="form-select" type="select" >
                    <option value="men" >men</option>
                    <option value="women" >women</option>
                </select>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Home