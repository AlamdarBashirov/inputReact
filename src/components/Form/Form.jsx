import React, {useState} from 'react'
import style from './Form.module.css'
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        const values = {
          name,
          email,
          number,
          password,
        };
          const response = await axios.post(
            "https://672b4c11976a834dd0267ade.mockapi.io/baskets",
            values
          );}
      
          return (
    <div className={style.container}>
        <input type="text" placeholder='name' className={style.inputs} value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='email' className={style.inputs} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='mobile number' className={style.inputs} value={number} onChange={(e) => setNumber(e.target.value)}/>
       <input type="password" placeholder='password' className={style.inputs} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={submit}>SUBMIT</button>
    </div>
  )
}

export default Form
// const submit = () => {
//     console.log(name, email, number, password);
    
// }