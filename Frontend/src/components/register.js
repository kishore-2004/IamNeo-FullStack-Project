import React,{useState} from 'react'

function Register() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [roletobecome, setRoletobecome] = useState('');
   
    const save = (e) => {
        e.preventDefault();
        const object = {
            id,name,age,course,email,roletobecome
        }
        fetch("http://localhost:8080/postbook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(object)}).then(console.log("Registartion Successful"));
        alert("Registration successful");
    }
 
    return ( 
        <>
        <div className='container' style={{paddingTop:80}}>
            <center>
       <h1>UDEMY </h1>
        <center><div style={{border:'5px sold black',backgroundColor:"lightblue",borderRadius:5,width:800,paddingLeft:20}}>
        
        <h1  style={{paddingTop:20}}>Registration form</h1>
        <form>
    
        <div className='row' style={{padding:10,width:800}}>
            <label>ID</label>
            <br></br>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>NAME</label><br></br>
            <input type="text"  value={name} onChange={(event) => setName(event.target.value)} placeholder='Type name  here'/> 
        
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>AGE</label><br></br>
            <input type="text"  value={age} onChange={(event) => setAge(event.target.value)} placeholder='Type age  here' /> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>COURSE</label><br></br>
            <input type="text"  value={course} onChange={(event) => setCourse(event.target.value)} placeholder='Type course  here' /> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>EMAIL</label><br></br>
            <input type="email"  value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Type email  here' /> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>ROLETOBECOME</label><br></br>
            <input type="text"  value={roletobecome} onChange={(event) => setRoletobecome(event.target.value)} placeholder='Type roletobecome  here' /> 
        
        </div>
       
            <button className='btn btn-primary' onClick={save}>Register</button>
         
    </form>
    </div>
    </center>
    </center>
    </div>
    </>
     );
}

export default Register;