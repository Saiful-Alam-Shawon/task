import React, { useContext } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { AuthProvider } from '../firebase/Context';

const AddTask = () => {

    const { user } = useContext(AuthProvider);
    const email = user?.email

    const handleTask = (event) => {
        event.preventDefault();

        const form = event.target;
        const text = form.text.value;

        // console.log(text);

        const ok = {
            text,
            email,
            status: "not"
        }
        // console.log(ok);

        fetch('http://localhost:5000/addedTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ok)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Task Added Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }





    return (
        <div className='w-75 mx-auto m-3'>

            <h3 className='text-center m-2'>
                Task Writer
            </h3>

            <Form onSubmit={handleTask}>




                {/* <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel> */}
                <FloatingLabel onSubmit={handleTask} controlId="floatingTextarea2" label="Write Yours Task Here......">
                    <Form.Control
                        as="textarea"
                        name='text'
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Form.Control className='m-2' size="sm" type="file" placeholder="Small text" />

                <div className='d-flex justify-content-center m-2'>
                    <Button variant="primary" type='submit'>Add Task</Button>
                </div>

            </Form>



        </div>
    );
};

export default AddTask;