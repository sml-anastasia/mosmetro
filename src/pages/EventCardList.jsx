import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/EventCard";
import { Form } from "react-bootstrap";
import { nanoid } from "@reduxjs/toolkit";
import { fetchEvents } from "../store/actions/eventActions";

const EventCardList = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events?.events);
    // const [selectedDate, setSelectedDate] = useState({
    //     month
    // })
    let currentMonth = new Date().getMonth()+1
    if(currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }
    const [month, setMonth] = useState(currentMonth.toString());
    const [year, setYear] = useState('2022');
    console.log('events', events);

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])

    const filteredData = events?.filter((item) => {
        return (
        item?.date.slice(0, 4) === year && item?.date.slice(5, 7) === month
        )
    });

    console.log('filter', filteredData);

    return (
        <div className="row container px-5">
            <div className="col-12 d-flex flex-row justify-content-end">
                <Form className="d-flex flex-row justify-content-end gap-2">
                    <Form.Select aria-label="year"
                    value={year}
                    onChange={(event) => {setYear(event.target.value)}}
                    className="w-25">
                        <option>Выберите год</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </Form.Select>
                    <Form.Select aria-label="month"
                    value={month}
                    onChange={(event) => {setMonth(event.target.value)}}
                    className="w-25">
                        <option>Выберите месяц</option>
                        <option value="01">Янв</option>
                        <option value="02">Фев</option>
                        <option value="03">Март</option>
                        <option value="04">Апр</option>
                        <option value="05">Май</option>
                        <option value="06">Июнь</option>
                        <option value="07">Июль</option>
                        <option value="08">Авг</option>
                        <option value="09">Сент</option>
                        <option value="10">Окт</option>
                        <option value="11">Ноя</option>
                        <option value="12">Дек</option>
                    </Form.Select>
                </Form>
            </div>
            <div className="col-12 d-flex flex-row flex-wrap justify-content-between mt-4">
                {
                    events?.map((item) => {
                        return(
                            <EventCard data={item} key={nanoid()} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventCardList;