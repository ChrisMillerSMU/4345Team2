import { useRouter } from 'next/router';
import { app, db } from '../firebase-client';
import { collection, doc, setDoc, getDoc, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'next/link';

/**
 * A page that allows the user to sign in.
 *
 * Route: /application
 */

export default function applicationPage() {
  // const { isSignedIn, signInWithGoogle, updateUser } = useAuthContext();
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentGradeLevel, setCurrentGradeLevel] = useState('');
  const [knownLanguages, setKnownLanguages] = useState([]);
  const [currentOtherLanguages, setCurrentOtherLanguages] = useState('');
  const [coreClassesList, setCoreClassesList] = useState([]);
  const [currentSkills, setCurrentSkills] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dbInstance = collection(db, "users");

  const addApplication = async () => {
    console.log(currentName);
    console.log(currentGradeLevel);
    console.log(currentSkills);
    await addDoc(collection(db, "application"), {
      name: currentName, 
      email: currentEmail, 
      grade:currentGradeLevel, 
      currentOtherLanguages, 
      skills:currentSkills
      }
    );
  }

  const router = useRouter();
  const signIn = () => {
    console.log("Sign In Verification!")

    // const addUser = async () => {
    //   await setDoc(doc(db, "users", currentEmail), {
    //     password: currentPassword
    //   });
    // }

    // const getUser = async () => {
    //   if (currentEmail == '' || currentPassword == '') {
    //     return alert("Please Enter An Email And Password.");
    //   } const user = await getDoc(doc(db, "users", currentEmail));
    //   if (user.exists()) {
    //     console.log(user.data());
    //     router.push("/home");
    //   } else {
    //     console.log("Document does not exist!")
    //     return alert("User Does Not Exist! Please Register First.");
    //   }
    // }

    // getUser();

    // setSendVerification(false);
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(currentEmail, currentPassword)
    //   .then(async ({ user }) => {
    //     // Signed in
    //     if (!user.emailVerified) {
    //       setSendVerification(true);
    //       throw new Error('Email is not verified. Verify your email before logging in.');
    //     }
    //     await updateUser(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setErrorMsg(errorMessage);
    //   });

  };

  // const sendResetEmail = () => {
  //   firebase
  //     .auth()
  //     .sendPasswordResetEmail(currentEmail)
  //     .then(() => {
  //       alert('Password reset email sent');
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       setErrorMsg(errorMessage);
  //     });
  // };

  // const sendVerificationEmail = () => {
  //   //send email verification
  //   try {
  //     firebase
  //       .auth()
  //       .currentUser.sendEmailVerification()
  //       .then(() => {
  //         router.push('/auth');
  //         alert('Verification email sent, check your email to verify your account and log in');
  //       });
  //   } catch (error) {
  //     alert(
  //       'There has been a problem sending a verfication email.\nWait a few minutes before sending another request.',
  //     );
  //   }
  // };

  //toggle mask/unmask password in input field
  // const showPassword = (id) => {
  //   var passwordInput = document.getElementById(id) as HTMLInputElement;
  //   passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  // };

  // if (isSignedIn) {
  //   router.push('/profile');
  // }

  function handleSubmit() { 
    // name done, email done, gradelevel done
    // add known languages from checkboxes and textbox
    getKnownLanguages();
    // add core classes taken from checkboxes
    getCoreClasses();
    // other skills done
    addApplication();
  }

  function getKnownLanguages() {
    if (document.querySelector('#Java-checkbox').checked) {
      knownLanguages.push(document.querySelector('#Java-checkbox').value);
    }
    if (document.querySelector('#C-checkbox').checked){
      knownLanguages.push(document.querySelector('#C-checkbox').value);
    } 
    if (document.querySelector('#Python-checkbox').checked){
      knownLanguages.push(document.querySelector('#Python-checkbox').value);
    } 
    if (document.querySelector('#JavaScript-checkbox').checked){
      knownLanguages.push(document.querySelector('#JavaScript-checkbox').value);
    } 
    if (document.querySelector('#SQL-checkbox').checked){
      knownLanguages.push(document.querySelector('#SQL-checkbox').value);
    } 
    if (document.querySelector('#MATLAB-checkbox').checked){
      knownLanguages.push(document.querySelector('#MATLAB-checkbox').value);
    } 
    if (currentOtherLanguages != '') {knownLanguages.push(currentOtherLanguages);}
    console.log(knownLanguages);
  }

  function getCoreClasses() {
    if (document.querySelector('#CS1341-checkbox').checked) {
      coreClassesList.push(document.querySelector('#CS1341-checkbox').value);
    } 
    if (document.querySelector('#CS1342-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS1342-checkbox').value);
    } 
    if (document.querySelector('#CS2240-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS2240-checkbox').value);
    } 
    if (document.querySelector('#CS2341-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS2341-checkbox').value);
    } 
    if (document.querySelector('#CS3330-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3330-checkbox').value);
    } 
    if (document.querySelector('#CS3339-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3339-checkbox').value);
    }
    if (document.querySelector('#CS3342-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3342-checkbox').value);
    }
    if (document.querySelector('#CS3345-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3345-checkbox').value);
    }
    if (document.querySelector('#CS3353-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3353-checkbox').value);
    }
    if (document.querySelector('#CS3381-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS3381-checkbox').value);
    }
    if (document.querySelector('#CS4344-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS4344-checkbox').value);
    }
    if (document.querySelector('#CS4345-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS4345-checkbox').value);
    }
    if (document.querySelector('#CS4351-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS4351-checkbox').value);
    }
    if (document.querySelector('#CS4352-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS4352-checkbox').value);
    }
    if (document.querySelector('#CS4381-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS4381-checkbox').value);
    }
    if (document.querySelector('#CS5343-checkbox').checked){
      coreClassesList.push(document.querySelector('#CS5343-checkbox').value);
    }
    console.log(coreClassesList);
  }

  return (
    <>
      {/* md-lg screens */}
      <section className="min-h-screen h-viewport md:flex hidden bg-gradient-to-br from-red-400 via-red-400 to-blue-400">
        {/* TA Application */}
        <div className="flex flex-col justify-center items-center h-full w-2/3 text-left bg-white p-4">
            <div className="mt-32">
              <h1 className="font-bold dark text-3xl p-4 text-center">TA Application</h1>
              <hr className="mb-10 h-px bg-gray-500 border-0" />
              {/* Application input fields */}
              <div className="w-[24rem]">
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full text-black rounded-lg p-2 pl-[14px] border-[1px] border-gray-500 mb-4"
                    value={currentName}
                    onChange={(e) => setCurrentName(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Name">
                  </input>
                  <input
                    className="w-full text-black rounded-lg p-2 pl-[14px] border-[1px] border-gray-500 mb-4"
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                  ></input>
                  <select
                    className="form-select w-full text-black rounded-lg p-[10px] border-[1px] mb-4 border-gray-500"
                    value={currentGradeLevel}
                    onChange={(e) => setCurrentGradeLevel(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    name="gradeLevel"
                    autoComplete="gradeLevel"
                    placeholder="gradeLevel"
                  >
                    <option value="filler" disabled selected hidden>Choose Education Level</option>
                    <option value="First-Year">First-Year (Undergrad)</option>
                    <option value="Sophomore">Sophomore (Undergrad)</option>
                    <option value="Junior">Junior (Undergrad)</option>
                    <option value="Senior">Senior (Undergrad)</option>
                    <option value="M.S.">M.S.</option>
                    <option value="Ph.D.">Ph.D.</option>
                  </select>
                  <h1 className="font-bold dark text-3xl p-4 mt-2 text-center">Known Languages</h1>
                  <hr className="mb-10 h-px bg-gray-500 border-0" />
                  <div className="ml-3">
                    <div className="form-check text-left">
                      <input 
                        id="Java-checkbox" 
                        type="checkbox" 
                        value="Java" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="Java-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Java</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="C++-checkbox" 
                        type="checkbox" 
                        value="C++" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="C++-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">C++</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="Python-checkbox" 
                        type="checkbox" 
                        value="Python" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="Python-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Python</label>
                    </div>
                    <div className="form-check">
                      <input 
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
                      value={currentOtherLanguages}
                      onChange={(e) => setCurrentOtherLanguages(e.target.value)}
                      style={{ backgroundColor: '#FFF' }}
                      type="text"
                      name="otherLanguages"
                      autoComplete="otherLanguages"
                      placeholder="Other Languages"
                    ></input>
                  </div>
                  {/* Core Classes */}
                  <h1 className="font-bold dark text-3xl p-4 mt-2 text-center">Core Classes Taken</h1>
                  <hr className="mb-10 h-px bg-gray-500 border-0" />
                  <div className="ml-3">
                    <div className="form-check">
                      <input 
                        id="CS1341-checkbox" 
                        type="checkbox" 
                        value="CS1341" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS1341-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 1341</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS1342-checkbox" 
                        type="checkbox" 
                        value="CS1342" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS1342-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 1342</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS2240-checkbox" 
                        type="checkbox" 
                        value="CS2240" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS2240-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 2240</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS2341-checkbox" 
                        type="checkbox" 
                        value="CS2341" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS2341-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 2341</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3330-checkbox" 
                        type="checkbox" 
                        value="CS3330" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3330-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3330</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3339-checkbox" 
                        type="checkbox" 
                        value="CS3339" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3339-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3339</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3342-checkbox" 
                        type="checkbox" 
                        value="CS3342" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3342-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3342</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3345-checkbox" 
                        type="checkbox" 
                        value="CS3345" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3345-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3345</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3353-checkbox" 
                        type="checkbox" 
                        value="CS3353" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3353-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3353</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS3381-checkbox" 
                        type="checkbox" 
                        value="CS3381" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS3381-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 3381</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS4344-checkbox" 
                        type="checkbox" 
                        value="CS4344" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS4344-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 4344</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS4345-checkbox" 
                        type="checkbox" 
                        value="CS4345" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS4345-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 4345</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS4351-checkbox" 
                        type="checkbox" 
                        value="CS4351" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS4351-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 4351</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS4352-checkbox" 
                        type="checkbox" 
                        value="CS4352" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS4352-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 4352</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS4381-checkbox" 
                        type="checkbox" 
                        value="CS4381" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS4381-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 4381</label>
                    </div>
                    <div className="form-check">
                      <input 
                        id="CS5343-checkbox" 
                        type="checkbox" 
                        value="CS5343" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="CS5343-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CS 5343</label>
                    </div>
                  </div>
                  <div className="text-center mt-4 mb-5">
                    <input
                      id="skillsInputLg"
                      className="w-full text-black rounded-lg p-2 border-[1px] border-gray-500"
                      value={currentSkills}
                      onChange={(e) => setCurrentSkills(e.target.value)}
                      style={{ backgroundColor: '#FFF' }}
                      type="skills"
                      name="skills"
                      autoComplete="current-skills"
                      placeholder="Other Skills"
                    ></input>
                  </div>
                    {/* <div>
                      <input
                        className="mx-1"
                        type="checkbox"
                        onClick={() => showPassword('passwordInputLg')}
                      />
                      Show Password
                    </div> */}
                  {/* </div> */}
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
              {/* !change if needed */}
              {/* Uncomment to allow resend verification email option (users could spam) */}
              {/* {sendVerification && (
                <button className="underline" onClick={() => sendVerificationEmail()}>
                  Resend verification
                </button>
              )} */}
            </div>
        </div>
        {/* Create new account sidebar*/}
        <div className="flex flex-col justify-center items-center h-full w-1/3 bg-black-200 text-center p-4">
          <h1 className="text-3xl font-black">Don&#39;t have an account?</h1>
          <p className="my-6">
            You can register here!
          </p>
          <Link href="/auth/signup">
            <a className="px-4 py-2 rounded-xl shadow-md bg-white text-black hover:shadow-lg hover:bg-blue-300">
              Register
            </a>
          </Link>
        </div>
      </section>

      {/* Small Screen */}
      <section className="flex md:hidden min-h-screen h-screen justify-center bg-black-200">
        <div className="flex flex-col items-center justify-center w-5/6 h-4/5 bg-black-200 my-8 p-6">
            <>
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
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                  ></input>
                  <input
                    id="passwordInputSm"
                    className="passwordInput w-full rounded-lg p-2 my-2 border-[1px] border-gray-500 text-black"
                    value={currentSkills}
                    onChange={(e) => setCurrentSkills(e.target.value)}
                    style={{ backgroundColor: '#FFF' }}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  ></input>
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
                onClick={() => signIn()}
              >
              Sign in
              </button>
              {/* Error and verification messages */}
              <div className="text-sm text-white">{errorMsg}</div>
                {/* Create new account bottom*/}
                <div className="flex flex-col justify-center items-center bg-black-200 text-center p-4">
                  <h1 className="text-3xl font-black text-white">Don&#39;t have an account?</h1>
                  <p className="my-6 text-xl">
                    You can register here!
                  </p>
                  <Link href="/auth/signup">
                    <a className="px-4 py-2 rounded-xl shadow-md bg-white text-lg text-black hover:shadow-lg hover:bg-blue-300">
                      Register
                    </a>
                  </Link>
                </div>
            </>
        </div>
      </section>
    </>
  );
}