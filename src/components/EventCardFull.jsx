import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../store/actions/eventActions";

const EventCardFull = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(state => state.events?.events);
    const cardData = data.find((item) => item?.id === +id);
    let date = cardData?.date?.slice(0, 10)?.split('-')?.reverse()?.join('.')

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])

    return (
        <Card className="w-100 border-0">
            <Card.Body className="d-flex flex-row gap-5">
                <Card.Img variant="left" src={cardData?.image} />
                <div className="">
                    <div className="d-flex flex-row justify-content-between">
                        <Card.Title>{cardData?.title}</Card.Title>
                        <Card.Text className="date">
                            <span className="date-text">{date}</span>
                        </Card.Text>
                    </div>
                        <Card.Text>{cardData?.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EventCardFull;