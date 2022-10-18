import { useRouter } from 'next/router';
// import { useAuthContext } from '../../lib/user/AuthContext';
import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
import Link from 'next/link';

// Homepage upon login
// Route: /home
export default function HomePage() {
    return(
        <>
        {/* md-lg screens */}
        <section className="min-h-screen h-screen md:flex hidden">
            <div className="flex flex-col justify-center items-center h-full w-full text-center bg-white p-4">
              <h1 className="p-4 dark text-3xl">You are Logged In!</h1>
              <h1 className="p-4 dark text-xl">This is the homepage you are redirected to upon login</h1>
                <Link href="/auth">
                    <a className="px-4 py-2 rounded-xl shadow-md bg-white text-black hover:shadow-lg hover:bg-blue-300">
                    Log Out
                    </a>
                </Link>
            </div>
        </section>
        {/* Small Screen */}
        <section className="flex md:hidden min-h-screen h-screen justify-center bg-black-200">
            <div className="flex flex-col items-center justify-center w-5/6 h-4/5 bg-black-200 my-8 p-6">
                <h1 className="text-3xl text-white font-black text-center">You are Logged In!</h1>
                <p className="text-xl text-white text-center p-2">
                    This is the homepage you are redirected to upon login
                </p>
                <Link href="/auth">
                    <a className="px-4 py-2 rounded-xl shadow-md bg-white text-black hover:shadow-lg hover:bg-blue-300">
                        Log Out
                    </a>
                </Link>
            </div>
        </section>
        </>
    );
}