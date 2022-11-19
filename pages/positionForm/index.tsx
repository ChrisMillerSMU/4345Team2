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
 * Route: /positionForm
 */

export default function PositionForm() {
  const [course, setCourse] = useState('');
  const [languages, setLanguages] = useState({ 'Java': false, 'C++': false, 'Python': false, 'Javascript': false, 'SQL': false, 'MATLAB': false });
  const [hours, setHours] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dbInstance = collection(db, "positions");

  const router = useRouter();
  const signIn = () => {

    const addPosition = async () => {
      await setDoc(doc(db, "positions", course), {
        languages: languages,
        hours: hours,
      });
    }

    const getPosition = async () => {
      const user = await getDoc(doc(db, "positions", course));
      if (!user.exists()) {
        addPosition();
        console.log("Posting Successful!")
        router.push("/");
      } else {
        console.log("Position Already Exists!")
        return alert("Position Already Exists!");
      }
    }

    getPosition();

  }

  function handleSubmit() {
    if (course == '' || hours == '') {
    return alert("Please Fill All fields.");
    } else signIn();
  }

  return (
    <>
     <section className="min-h-screen h-viewport md:flex hidden bg-gradient-to-br from-red-400 via-red-400 to-blue-400">
        {/* TA Application */}
      <div className="flex flex-col justify-center items-center w-2/3 text-left bg-white p-4">
        <div>
          <h1 className="font-bold dark text-3xl p-4 text-center">Create Position</h1>
          <hr className="mb-10 h-px bg-gray-500 border-0" />
            <div className="w-[24rem]">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full text-black rounded-lg p-2 pl-[14px] border-[1px] border-gray-500 mb-4"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  type="text"
                  name="course"
                  autoComplete="course"
                  placeholder="Course">
                </input>
                <div className="ml-3">
                  <div className="form-check text-left">
                    <input 
                      onChange={(x) => languages['Java'] = x.target.checked}
                      id="Java-checkbox" 
                      type="checkbox" 
                      value="Java" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="Java-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Java</label>
                  </div>
                  <div className="form-check">
                    <input 
                      onChange={(x) => languages['C++'] = x.target.checked}
                      id="C++-checkbox" 
                      type="checkbox" 
                      value="C++" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="C++-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">C++</label>
                  </div>
                  <div className="form-check">
                    <input 
                      onChange={(x) => languages['Python'] = x.target.checked}
                      id="Python-checkbox" 
                      type="checkbox" 
                      value="Python" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="Python-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Python</label>
                  </div>
                  <div className="form-check">
                    <input 
                      onChange={(x) => languages['Javascript'] = x.target.checked}
                      id="JavaScript-checkbox" 
                      type="checkbox" 
                      value="JavaScript" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="JavaScript-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JavaScript</label>
                  </div>
                  <div className="form-check">
                    <input 
                      id="SQL-checkbox" 
                      type="checkbox" 
                      value="SQL" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="SQL-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SQL</label>
                  </div>
                  <div className="form-check">
                    <input 
                      id="MATLAB-checkbox" 
                      type="checkbox" 
                      value="MATLAB" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="MATLAB-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MATLAB</label>
                  </div>
                </div>
                <div className="text-center mt-4 mb-5">
                  <input
                    className="w-full text-black rounded-lg p-2 border-[1px] border-gray-500"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    type="text"
                    name="hours"
                    autoComplete="hours"
                    placeholder="Hours"
                  ></input>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 w-[24rem] rounded-md shadow-md bg-black hover:shadow-lg hover:bg-gray-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          {/* Error and verification messages */}
          <div className="mt-4 w-[24rem]">{errorMsg}</div>
        </div>
      </div >
      <div className="flex flex-col justify-center items-center h-full w-1/3 bg-black-200 text-center p-4">
        <img src={SMU.src} />
      </div>
    </section >

  {/* Small Screen */}
  <section className="flex md:hidden min-h-screen h-screen justify-center bg-black-200" >
    <div className="flex flex-col items-center justify-center w-5/6 h-4/5 bg-black-200 my-8 p-6">
      <p className="text-xl text-white text-center p-2"> Post Position </p>
        <div className="w-5/6">
        <form onSubmit={handleSubmit}>
          <input
              className="w-full rounded-lg p-2 mb-2 border-[1px] border-gray-500 text-black"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              style={{ backgroundColor: '#FFF' }}
              name="course"
              autoComplete="Course"
              placeholder="Enter Course"
            ></input>
            <div className="w-[100%]">
              <input type="checkbox"
                onChange={(x) => languages['Java'] = x.target.checked} />
              <label className="mr-1">Java</label>
              <input type="checkbox"
                onChange={(x) => languages['C++'] = x.target.checked} />
              <label className="mr-1">C++</label>
              <input type="checkbox"
                onChange={(x) => languages['Python'] = x.target.checked} />
              <label className="mr-1">Python</label>
              <input type="checkbox"
                onChange={(x) => languages['Javascript'] = x.target.checked} />
              <label className="mr-1">Javascript</label>
              <input type="checkbox"
                onChange={(x) => languages['SQL'] = x.target.checked} />
              <label className="mr-1">SQL</label>
              <input type="checkbox"
                onChange={(x) => languages['MATLAB'] = x.target.checked} />
              <label className="mr-1">MATLAB</label>
            </div>
            <input
              className="w-full rounded-lg p-2 mb-2 border-[1px] border-gray-500 text-black"
              value={hours}
              pattern="\d*"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              onChange={(e) => setHours(e.target.value)}
              style={{ backgroundColor: '#FFF' }}
              name="email"
              autoComplete="Enter Hours"
              placeholder="Enter Hours"
            ></input>
            <button
              type="button"
              className="px-4 py-2 w-[100%] rounded-md shadow-md text-black bg-white hover:shadow-lg hover:bg-gray-300"
              onClick={() => { handleSubmit() }}> Register </button>
            </form>
          </div>
          <div className="text-sm text-white">{errorMsg}</div>
        </div>
      </section >
    </>
  );
}