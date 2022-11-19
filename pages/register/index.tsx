import { useRouter } from 'next/router';
import { app, db } from '../../firebase-client';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import { stringify } from 'querystring';
import SMU from './SMU.jpg';

/**
 * A page that allows the user to register for a new account.
 *
 * Route: /register
 */

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [passwordDialog, setPasswordDialog] = useState(false);
  const dbInstance = collection(db, "users");

  const router = useRouter();

  function handleSubmit() {
    if (email == '' || password == '' || confirmPassword == '') {
      return alert("Please Fill all fields.");
    }
    else if (password != confirmPassword) {
      return alert("Passwords not matching");
    }
  }

  return (
    <>
      <section className="min-h-screen h-screen md:flex hidden">
        <div className="flex flex-col justify-center items-center h-full w-2/3 text-center bg-white p-4">

          <div>
            <h1 className="dark text-3xl p-4">Register</h1>
            <div className="w-[24rem]">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full text-black rounded-lg p-2 border-[1px] border-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  type="text"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                ></input>
                <input
                  id="PasswordInputLg"
                  className="w-full text-black rounded-lg p-2 my-2 border-[1px] border-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                ></input>
                <input
                  id="ConfirmPasswordInputLg"
                  className="w-full text-black rounded-lg p-2 mb-2 border-[1px] border-gray-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  type="password"
                  name="confirmPassword"
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                ></input>
                {/*<div className='text-black'>
                      <input
                        className="mx-1"
                        type="checkbox"
                        onClick={() => setIsTeacher(!isTeacher)}
                      />
                      Check if you are a teacher
                    </div>*/}
                <div className='pb-2'>
                  {!isTeacher ? (
                    <>
                      <button
                        type="button"
                        className="px-4 mr-4 py-2 w-[11.5rem] rounded-md shadow-md bg-black"
                        onClick={() => { setIsTeacher(!isTeacher) }}>
                        Teacher
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 w-[11.5rem] rounded-md shadow-md bg-gray-300"
                        onClick={() => { setIsTeacher(!isTeacher) }}>
                        Student
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="px-4 mr-4 py-2 w-[11.5rem] rounded-md shadow-md bg-gray-300">
                        Teacher
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 w-[11.5rem] rounded-md shadow-md bg-black hover:shadow-lg"
                        onClick={() => { setIsTeacher(!isTeacher) }}>
                        Student
                      </button>
                    </>
                  )
                  }
                </div>
                <button
                  type="button"
                  className="px-4 py-2 w-[24rem] rounded-md shadow-md bg-black hover:shadow-lg hover:bg-gray-300"
                  onClick={() => { router.push("/home"); }}>
                  Register
                </button>
              </form>
            </div>
            {/* Error and verification messages */}
            <div className="mt-4 w-[24rem]">{errorMsg}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/3 bg-black-200 text-center p-4">
          <img src={SMU.src} />
        </div>
      </section>

      {/* Small Screen */}
      <section className="flex md:hidden min-h-screen h-screen justify-center bg-black-200">
        <div className="flex flex-col items-center justify-center w-5/6 h-4/5 bg-black-200 my-8 p-6">
          {/* Main Login Screen */}
          <h1 className="text-3xl text-white font-black text-center">TA Management System</h1> {/* !change */}
          <p className="text-xl text-white text-center p-2">
            Login
          </p>
          {/* <button
                className="px-4 py-2 rounded-md shadow-md bg-white my-4 font-bold hover:shadow-lg hover:bg-gray-100"
                onClick={() => signInWithGoogle()}
              >
                Sign in with Google
              </button> */}
          {/*<div className="text-sm">or</div>*/}
          {/* Account credential input fields */}
          <div className="w-5/6">
            <form onSubmit={handleSubmit}>
              <input
                className="w-full rounded-lg p-2 border-[1px] border-gray-500 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: '#FFF' }}
                type="text"
                name="email"
                autoComplete="email"
                placeholder="Email"
              ></input>
              <input
                id="passwordInputSm"
                className="passwordInput w-full rounded-lg p-2 my-2 border-[1px] border-gray-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#FFF' }}
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
              ></input>
              <input
                id="confirmPasswordInputSm"
                className="passwordInput w-full rounded-lg p-2 mb-2 border-[1px] border-gray-500 text-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ backgroundColor: '#FFF' }}
                type="password"
                name="confirmPassword"
                autoComplete="current-password"
                placeholder="Confirm Password"
              ></input>
              <div className='pb-2 text-black'>
                {!isTeacher ? (
                  <>
                    <button
                      type="button"
                      className="px-4 mr-[5%] py-2 w-[47.5%] rounded-md shadow-md bg-white"
                      onClick={() => { setIsTeacher(!isTeacher) }}>
                      Teacher
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 w-[47.5%] rounded-md shadow-md bg-gray-600">
                      Student
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="px-4 mr-[5%] py-2 w-[47.5%] rounded-md shadow-md bg-gray-600">
                      Teacher
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 w-[47.5%] rounded-md shadow-md  bg-white"
                      onClick={() => { setIsTeacher(!isTeacher) }}>
                      Student
                    </button>
                  </>
                )
                }
              </div>
              <input className="hidden" type="submit" value="Submit" />
            </form>
          </div>
          {/* <div>
                <input
                  className="mr-1"
                  type="checkbox"
                  onClick={() => showPassword('passwordInputSm')}
                />
                Show Password
              </div> */}
          <button
            className="px-4 py-2 rounded-md text-black text-lg shadow-md bg-white w-5/6 hover:shadow-lg hover:bg-blue-300"
            onClick={() => router.push("/home")}
          >
            Register
          </button>
          {/* Error and verification messages */}
          <div className="text-sm text-white">{errorMsg}</div>
        </div>
      </section>
    </>
  );
}