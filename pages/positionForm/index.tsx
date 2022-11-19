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
    const [edit, setEdit] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const dbInstance = collection(db, "users");

    const router = useRouter();

    function onSelect(e: any, fun: any) {
        fun(e.target.value);
    }

    function handleSubmit() {
        if (course == '' || hours == '') {
            return alert("Please Fill all fields.");
        }
        router.push("/home");
    }

    return (
        <>
            <section className="min-h-screen h-screen md:flex hidden">
                <div className="flex flex-col justify-center items-center h-full w-2/3 text-center bg-white p-4">
                    <div>
                        <h1 className="dark text-3xl p-4">Post Position</h1>
                        <div className="w-[24rem]">
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
                                <div className="text-black w-[100%]">
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
                                <div className='pb-2'>
                                    {!edit ? (
                                        <>
                                            <button
                                                type="button"
                                                className="px-4 mr-4 py-2 w-[11.5rem] rounded-md shadow-md bg-black"
                                                onClick={() => { setEdit(!edit) }}>
                                                Editable
                                            </button>
                                            <button
                                                type="button"
                                                className="px-4 py-2 w-[11.5rem] rounded-md shadow-md bg-gray-300"
                                                onClick={() => { setEdit(!edit) }}>
                                                Not Editable
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                className="px-4 mr-4 py-2 w-[11.5rem] rounded-md shadow-md bg-gray-300">
                                                Editable
                                            </button>
                                            <button
                                                type="button"
                                                className="px-4 py-2 w-[11.5rem] rounded-md shadow-md bg-black hover:shadow-lg"
                                                onClick={() => { setEdit(!edit) }}>
                                                Not Editable
                                            </button>
                                        </>
                                    )
                                    }
                                </div>
                                <button
                                    type="button"
                                    className="px-4 py-2 w-[24rem] rounded-md shadow-md bg-black hover:shadow-lg hover:bg-gray-300"
                                    onClick={() => { handleSubmit() }}>
                                    Register
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
                            <div className='pb-2'>
                                {!edit ? (
                                    <>
                                        <button
                                            type="button"
                                            className="px-4 mr-4 py-2 w-[45%] rounded-md shadow-md bg-white text-black"
                                            onClick={() => { setEdit(!edit) }}>
                                            Editable
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 w-[45%] rounded-md shadow-md bg-gray-300 text-black"
                                            onClick={() => { setEdit(!edit) }}>
                                            Not Editable
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="px-4 mr-4 py-2 w-[45%] rounded-md shadow-md text-black bg-gray-300">
                                            Editable
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 w-[45%] rounded-md shadow-md bg-white text-black hover:shadow-lg"
                                            onClick={() => { setEdit(!edit) }}> Not Editable </button>
                                    </>
                                )
                                }
                            </div>
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