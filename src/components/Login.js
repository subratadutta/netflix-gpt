import React, { useRef, useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { checkValidateData, checkNameValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_BG, USER_PHOTO } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //console.log(email);
    //console.log(password);
    let message;
    if (!isSignInForm) {
      message = checkNameValidateData(fullName.current.value, email.current.value, password.current.value);
    } else {
      message = checkValidateData(email.current.value, password.current.value);
    }

    setErrorMessage(message);
    if (errorMessage !== null) return;
    if (!isSignInForm) {
      // create a new user
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // Update User Profile
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_PHOTO,
          })
            .then(() => {
              // To get updated displayname & photoURL, we need
              // to get updated user from auth (NOT USER)
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              // Navigate
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode + '-' + errorMessage);
              setErrorMessage(errorCode + '-' + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + '-' + errorMessage);
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + '-' + errorMessage);
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACK_BG} alt="body" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 flex flex-col justify-center items-center my-36 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80"
      >
        <h1 className="font-bold text-white pr-40 py-4 text-3xl w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full bg-gray-800 border border-solid border-slate-400 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 w-full bg-gray-800 border border-solid border-slate-400 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full bg-gray-800 border border-solid border-slate-400 rounded"
        />
        <p className="text-red-500 w-full">{errorMessage}</p>
        <button className="p-2 m-4 bg-red-600 text-white w-full font-bold rounded" onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-6 pr-[67px] text-slate-400 text-sm">
          {isSignInForm ? 'New to Netflix?' : 'Registered Member?'}

          <Link className="text-white no-underline hover:underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? ' Sign Up Now' : ' Sign In Now'}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
