import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
const dataBase = require("../../data/db.json")

function TourDetails() {

    const { id } = useParams();
    const info = dataBase.filter((item) => item.id === id);
    let citysCard = info[0];
    const [seeMore, setSeeMore] = useState(false);
    const clickToSeeMore = () => {
        setSeeMore(!seeMore);
    }

    return (
        <div className="d">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={citysCard.image} style={{ width: '23rem' }} />
                <Card.Body>
                    <Card.Title style={{ width: '28rem' }} >{citysCard.name}</Card.Title>
                    <Card.Text>
                        {seeMore ? citysCard.info : `${citysCard.info.substring(0, 100)}...`}
                        <Card.Text> {citysCard.price}</Card.Text>
                    </Card.Text>
                    <Button onClick={clickToSeeMore}>
                        {seeMore ? "See less" : "See more"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default TourDetails;
