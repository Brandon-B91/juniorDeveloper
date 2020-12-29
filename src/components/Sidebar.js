import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'

const Sidebar = () => (
    <div> 
        <Card>
            <CardBody>
                <CardTitle className="text-center text-upppercase mb-3">
                    NewsLetter.
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your email here...">
                    </Input>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    </div>
)

export default Sidebar