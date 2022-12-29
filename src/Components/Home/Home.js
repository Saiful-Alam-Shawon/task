import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';


const Home = () => {
    return (
        <div className='w-75 mx-auto m-3'>

            <h3 className='text-center'>
                Task Writer
            </h3>



            {/* <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel> */}
            <FloatingLabel controlId="floatingTextarea2" label="Write Yours Task Here......">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>




        </div>
    );
};

export default Home;