import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";

const Show = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/getbook")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
            {/* {isError !== "" && <h2>{isError}</h2>} */}
              
            <br></br><br></br>
            <center><h1>All users</h1>
            <div className="table-responsive-lg">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Roletobecome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.course}</td>
                                        <td>{data.email}</td>
                                        <td>{data.roletobecome}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </center>
        </>
    );
};

export default Show;