import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { AuthProvider } from '../firebase/Context';


const MyTask = () => {

    const { user } = useContext(AuthProvider);
    const [tasks, setTasks] = useState([]);
    const email = user?.email



    useEffect(() => {
        fetch(`http://localhost:5000/getTaskByMail?email=${email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
        // .then(data => console.log(data))
    }, [email])

    // console.log(tasks.length);

    const handledelet = id => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const ohShit = 'data'
    const data = {
        ohShit
    }

    const handleEdit = id => {

        fetch(`http://localhost:5000/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data, id))

    }




    return (

        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>Task </th>
                        <th>Completed</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>



                    {/* onClick={() => handleVerify(user._id)}>{user?.userRole === 'Seller' ?
                                    <>

                                        {user?.status === "Verified" ?
                                            <div className="btn btn-accent">Verified</div>
                                            :
                                            <button className="btn btn-sm">Verify Now</button>}

                                    </>
                                    :
                                    <>{user.userRole}</> */}







                    {
                        tasks.map((task, i) =>
                            <tr key={task._id}>
                                <td>{i + 1} </td>
                                <td>{

                                    task.text

                                }
                                    <ButtonGroup aria-label="Third group">
                                        <Button>8</Button>
                                    </ButtonGroup>

                                </td>

                                <td>
                                    {
                                        task.status === "not" ?
                                            <>
                                                <a href="mytask">Not Completed</a>

                                            </>
                                            :
                                            <>
                                                <ButtonGroup aria-label="Third group">
                                                    <Button>Completed</Button>
                                                </ButtonGroup>
                                            </>
                                    }


                                </td>


                                <td> <ButtonGroup aria-label="Third group">
                                    <Button onClick={() => handleEdit(task._id)} >Edit</Button>
                                </ButtonGroup></td>
                                <td>

                                    <ButtonGroup aria-label="Third group">
                                        <Button onClick={() => handledelet(task._id)}>Delete</Button>
                                    </ButtonGroup>

                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>


            {/* <Table responsive="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <Table responsive="xl">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table> */}


        </div>




    );
};

export default MyTask;