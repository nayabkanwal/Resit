import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/my-app/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      alert('signup successful')
      navigate('/');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className=''>

      <div className=' bg-gray-100 top-0 left-0 w-[100%] h-[100vh]  z-10 fixed flex items-center justify-center'>


        <div className="flex justify-center my-2 mx-4 md:mx-0">

          <div className="w-full max-w-xl bg-white rounded-lg shadow-md px-6  py-3">
            <div className="text-center mt-10">

              <h2 className="sm:text-4xl text-3xl tracking-tight font-bold">
                Sign Up
              </h2>

            </div>
            <div className="flex flex-wrap -mx-3 mb-6">

              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
                <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
                <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="w-full flex items-center justify-between px-3 mb-3 ">


              </div>
              <div className="w-full md:w-full px-3 mb-6 sm:mt-10 flex flex-col items-center ">
                <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500" onClick={handleRegister}>Register</button>
                <span className="text-sm text-cente ">Already have a Acoount ? <Link to={'/login'} className="text-blue-500">
                  Login
                </Link>
                </span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
