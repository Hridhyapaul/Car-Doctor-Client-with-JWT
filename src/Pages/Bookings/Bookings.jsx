import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [url])
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center font-bold'>Your total booking items : 0{bookings.length}</h1>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>Personal Details</th>
                            <th>Service</th>
                            <th>Service Price</th>
                            <th>Details</th>
                            <th>Date</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings}></BookingRow>)
                       }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;