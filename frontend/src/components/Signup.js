import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const url = 'http://localhost:5000';
  const navigate = useNavigate();

  const signupform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async(values) => {
      console.log(values);
      const res = await fetch(`${url}/user/add`, {
        method: "POST",
        body : JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title : 'Success',
          text: 'User Registered Successfully!!',
        });
        
        const data = (await res.json()).result;
        navigate('/login');
      }else{
        Swal.fire({
          icon: 'error',
          title : 'Error',
          text: 'Some Error Occured!!',
        })
      }

    }
  })

  return (
    <div>
      <section className="" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center flex-row-reverse">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={signupform.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                      <input

                        type="text"
                        id="name"
                        onChange={signupform.handleChange}
                        value={signupform.values.name}
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={signupform.handleChange}
                        value={signupform.values.email}
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        onChange={signupform.handleChange}
                        value={signupform.values.password}
                        className="form-control"
                      />
                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
                <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/main/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://res.cloudinary.com/teepublic/image/private/s--3xD7LrAs--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_fac2cd,e_outline:48/co_fac2cd,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1587134403/production/designs/9199713_0.jpg"
                  className="img-fluid w-75 d-block m-auto"
                  alt="Music mania"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup