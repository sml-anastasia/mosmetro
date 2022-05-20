import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'

const EventCard = ({data}) => {
    let date = data?.date.slice(0, 10).split('-').reverse().join('.')
    return (
        <>
        <Card className="mb-5 card">
            <Card.Body className="p-0">
                <div className="d-flex flex-row justify-content-between p-3">
                    <p className="caption">{data?.title}</p>
                    <Link className="link" to={`/events/${data?.id}`}>Больше</Link>
                </div>
                <Card.Img variant="top" src={data?.image} className="w-full" />
                <p className="caption p-3">{date}</p>
            </Card.Body>
        </Card>
        </>
    )
}

export default EventCard;