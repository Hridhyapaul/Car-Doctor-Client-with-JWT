import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, bookings, setBookings }) => {
    console.log(booking)
    const { _id, email, date, image, message, name, phoneNumber, price, service, status } = booking;
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this service!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your service has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        }
                    })
            }
        })
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:4000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <tr>
            <th>
                <button className="btn btn-circle" onClick={() => handleDeleteItem(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{phoneNumber}</span>
            </td>
            <td>{service}</td>
            <td>${price}</td>
            <th>
                <div className="tooltip tooltip-primary" data-tip={message}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </div>
            </th>
            <td>{date}</td>
            <td>
                {
                    status === 'confirm' ?
                        <button className="btn btn-outline btn-success">Confirmed</button>
                        :
                        <button onClick={() => handleConfirm(_id)} className='bg-[#FF3811] px-3 py-2 rounded font-semibold text-white'>Pending</button>
                }
            </td>
        </tr>
    );
};

export default BookingRow;