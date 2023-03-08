import React, { useState } from 'react';
// import './post.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './put.css';

function Update1() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [roletobecome,setRoletobecome]=useState('')
 
  async function update(event) {
    event.preventDefault();
    try {
        await axios.put("http://localhost:8080/putbook",
            {

                id: id,
               name:name,
                age:age,
                course:course,
                email:email,
                roletobecome:roletobecome
            });
        alert("Successfully Update");
        setId();
        setName();
        setAge();
        setCourse();
        setEmail();
        setRoletobecome();


    }
    catch (err) {
        alert("update Failed");
    }
}

  return (
    <form id="form" >
      <center>
      <h1>UPDATE FORM</h1>
      <label for="id">Id:</label>
      <br></br>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <br></br>
      <label for="name">Name : </label>
      <br></br>
        <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br></br>
      <label for="number">Age</label>
      <br></br>
        <input className="input" type="text" value={age} onChange={(event) => setAge(event.target.value)} />
        <br></br>
      <label className="address">Course</label>
      <br></br>
        <input className="input" type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        <br></br>
      <label className="available">Email</label>
      <br></br>
        <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br></br>
        <label className="available">Roletobecome</label>
      <br></br>
        <input className="input" type="text" value={roletobecome} onChange={(event) => setRoletobecome(event.target.value)} />
        <br></br>
        <br></br>
      <button className="btn btn-primary" type="submit" onClick={update}>Update</button>
      </center>
    </form>
  );
}



function Update() {
  const [fit, setFit] = useState([]);

  function handleAddTelevision(fits) {
    setFit([...fit, fits]);
  }

  return (
    <div className='all'>
    <br/>
    <div className="container">
      {/* <h1 className="title">TELEVISION DETAILS</h1> */}
      <Update1 Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    {/* <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px'}}
                >Back</button>
            </Link></center> */}
    </div>
    
  );
}

export default Update;