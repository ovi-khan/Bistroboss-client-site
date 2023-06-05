import React from "react";
import { Helmet } from "react-helmet";
import useCart from "../../../hooks/UseCart";
import { key } from "localforage";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bistroboss-server-site-ovi-khan.vercel.app/carts/${item._id}`, {
            method: 'DELETE'
          } )
          .then(res => res.json())
         .then(data => {
           if(data.deletedCount > 0) {
            refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
         })
        }
      })
  }

  return (
    <div className="w-full  m-auto">
      <Helmet>
        <title>Bistro Boss || My Cart</title>
      </Helmet>
      <div className="uppercase text-3xl font-semibold h-[60px] flex justify-evenly ">
        <h1>total Item: {cart.length}</h1>
        <h1>total Price: {parseInt(total)}</h1>
        <button className="btn btn-success">pay</button>
      </div>

        
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            cart.map((item, index) => 
                <tr 
                key={item._id}
                >
                <td>
                  {index + 1}
                </td>
                <td>
                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="img"
                        />
                      </div>
                    </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button onClick={ () => handleDelete(item) } className="btn btn-ghost bg-red-500 text-white "><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>
                )
          }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
