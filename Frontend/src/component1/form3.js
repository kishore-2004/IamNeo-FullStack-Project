import React,{useState} from 'react'
import './form3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form(){

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
      return(
         <>
         <section className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" */}
            {/* className="img-fluid" */}
            {/* alt="Sample photo"/> */}
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className="px-md-2">

              <div className="form-outline mb-4">
                <input type="number" id="form3Example1q" className="form-control" value={id} onChange={(event) => setId(event.target.value)}/>
                <label className="form-label" for="form3Example1q" >Id</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline datepicker">
                    <input type="text" class="form-control" id="exampleDatepicker1" value={name} onChange={(event) => setName(event.target.value)}/>
                    <label for="exampleDatepicker1" className="form-label">Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                <div className="form-outline datepicker">
                    <input type="text" class="form-control" id="exampleDatepicker1"  value={age} onChange={(event) => setAge(event.target.value)}/>
                    <label for="exampleDatepicker1" className="form-label">Age</label>

                </div>

                </div>
              </div>

              <div className="mb-4">

              <div className="form-outline datepicker">
                    <input type="text" class="form-control" id="exampleDatepicker1"  value={course} onChange={(event) => setCourse(event.target.value)}/>
                    <label for="exampleDatepicker1" className="form-label">Course</label>

                </div>

              </div>

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="email" id="form3Example1w" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <label className="form-label" for="form3Example1w">Email</label>
                  </div>

                </div>
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="text" id="form3Example1w" className="form-control" value={roletobecome} onChange={(event) => setRoletobecome(event.target.value)}/>
                    <label className="form-label" for="form3Example1w">Roletobecome</label>
                  </div>

                </div>
              </div>

              <button type="submit" className="btn btn-success btn-lg mb-1" onClick={save}>Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
         </>
      )
}
export default Form;