import './Tour.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Tour(props) {
    return (
        <div className='tour'>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={props.tour.image} style={{ width: '17rem' }} />
                <Card.Body>
                    <Card.Title>{props.tour.name}</Card.Title>

                    <Link to={`/city/${props.tour.id}`}>  {/* The "id" have been retrived from the dataBase*/}
                        <Button variant="primary">more info.</Button>

                    </Link>
                </Card.Body>
            </Card>

        </div>

    );
}

export default Tour;