import { useState } from "react";

const Form = () =>{
   
    const [form, setForm] = useState ({
        email: '',
        password: '',
    }
    )
    const[errors,setErrors] = useState({
        email: '',
        password: '',
    })
   
   
    const handleOnChange = (event) =>{
        console.log(event.target.name);
        
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        validate()
    }
    
    const validate = () =>{
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setErrors({
                ...errors,
                email: 'Email  invalido'
            })
           
        }
        else setErrors ({...errors , email: '' })
        
        if (form.password.length > 6){
            setErrors({
                ...errors,
                password: 'Password invalido'
            })
            
        }
        
        
    }

   

    const handleOnSubmit = (event) =>{
        event.preventDefault();
    }

    

    return(
        <form onSubmit={handleOnSubmit}>
            <h1>Welcome  Form</h1>

            <label htmlFor="email">Email: </label>
            <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleOnChange}/>
            <br />
            <label htmlFor="password">Password: </label>
            <input name="password" type="text" placeholder="Senha" value={form.password} onChange={handleOnChange}/>
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
            <button disabled ={!form.email || !form.password || errors.email|| errors.password }>Enviar</button>


        </form> 
    )


}

export default Form;