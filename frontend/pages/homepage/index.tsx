import { useRouter } from 'next/router';
// import { useAuthContext } from '../../lib/user/AuthContext';
import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
import Link from 'next/link';

// Homepage upon login
export default function HomePage() {
    return(
        <section>Logged In
            <div>This is the homepage you are redirected to upon login</div>
        </section>
    );
}