import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";

const FoodCard = ({item}) => {
    const { name, recipe, image, category, price,_id } = item
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = item => {
      console.log(item)
      if(user && user.email) {
        const cartItem = { menuItemId: _id, name, image, price, email: user.email }
        fetch('https://bistroboss-server-site-ovi-khan.vercel.app/carts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            refetch(); /*refetch cart to update the nuber of items in te cart  */
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Add To Cart Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Are you Logged in here?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', { state: {from: location} })
            }
          })
        }
      }
  return (
    <div className="card w-80 bg-blue-400 bg-base-100 shadow-xl">
      <figure>
        <img
        className=""
          src={image}
        />
        <p className="bg-slate-700 text-red-600 absolute right-0 -mt-28 mr-14 rounded px-2">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Food Name: {name}</h2>
        <p>Category: {recipe}</p>
        <div className="card-actions  justify-center">
          <button onClick={ () => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-red-600 text-black font-bold  hover:bg-green-500 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
