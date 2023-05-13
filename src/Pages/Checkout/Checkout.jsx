import React, { useContext } from 'react';
import SmallBanner from '../Shared/SmallBanner/SmallBanner';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const Service_id = _id;
        const service = title;
        const name = user?.displayName || form.name.value;
        const date = form.date.value;
        const phoneNumber = form.number.value;
        const email = user?.email || form.email.value;
        const message = form.message.value;

        const order = {
            Service_id,
            name,
            phoneNumber,
            email,
            date,
            message,
            service,
            price: price,
            image: img
        }

        console.log(order);
        fetch('http://localhost:4000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Service booked successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            <SmallBanner></SmallBanner>
            <div>
                <div className="card w-full bg-[#F3F3F3] rounded-md px-10 py-10 mt-20">
                    <div className="card-body">
                        <form onSubmit={handleCheckOut}>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className="form-control col-span-1">
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-1">
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-1">
                                    <input type="number" name="number" placeholder="Your Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-1">
                                    <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-8">
                                <textarea className="textarea textarea-bordered h-24" placeholder="Your Message" name="message" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Order Confirm" className='btn bg-[#FF3811] hover:bg-[#FF3811] border-0' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;