import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import {FaGoogle, FaGooglePlusSquare, FaSign} from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignUp } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user has been created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const handleGoogleSignup = (auth, googleProvider) => {
    googleSignUp(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-white bg-base-200">
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-lime-300 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered bg-slate-500"
              />
              {errors.name && <span>Name required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered bg-slate-500"
              />
              {errors.email && <span>email required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered bg-slate-500"
              />
              {errors.photoURL && <span>photoURL required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register(
                  "password",
                  { required: true, maxLength: 20 },
                  { pattern: /^[A-Za-z]+$/i }
                )}
                className="input input-bordered bg-slate-500 text-black"
              />
              {errors.password && (
                <span className="text-red-500">Password required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline text-black hover:bg-orange-500"
                type="submit"
                value="Sign Up"
                />
            </div>
            <div>
              <button onClick={handleGoogleSignup} className="btn btn-outline w-full gap-5"> <FaGoogle></FaGoogle> Google Signup</button>
            </div>
            <p className="text-black">
              <small>
                If you already have an account, please{" "}
                <span className="link text-red-500 hover:text-red-700">
                  <Link to="/login">log in</Link>
                </span>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
