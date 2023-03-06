import React , { useState } from 'react'

function State() {
    const [message, setMessage] = useState("Hello Bc39")
  
    const handleSetMessage = ()=>{
        const value = prompt("Input your Message: ");
        
        setMessage(value)
    }

    const [count , setCount] = useState(0)
    
    const [colors, setColor] = useState(["red", "blue", "green"])

    const handleAddColor = () => {
        const color = prompt(" Input your AddColor: ")

        setColor([...colors, color])
        // setColor ((prevColors)=> [...prevColors, color])
    }

    const handleRemoveColor = () => {
        const color = prompt(" Input your AddColor: ")
        const newColors = colors.filter((item)=>{
            return item !== color;
        });
        setColor(newColors)
    }

    // state object

    const [form, setForm] = useState({ username : "", email: "" })
    const handleChangeForm = (evt) => {
        const {name, value} = evt.target;
        setForm({...form, [name]: value });
    }


    return <div>
        
        <p>State</p>
        <p>{message}</p>
        <button onClick={handleSetMessage}>setMessage</button>

        <br />
        < br />
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>Increase</button>

        <br />
        <br />
        <p>Color: {colors.join(" , ")}</p>
        <button onClick={handleAddColor}>Add Color</button>
        <button onClick={handleRemoveColor}>Remove Color</button>
        
        <br />
        <br />
        <p>
            User Form : {form.username} - {form.email}
        </p>
        <form>
            <input className='form-control' placeholder='UserName' name="username" value={form.username} onChange={handleChangeForm}/>
            <input className='form-control' placeholder='Email' name="email" value={form.email} onChange={handleChangeForm} />
        </form>


    </div>
}

export default State