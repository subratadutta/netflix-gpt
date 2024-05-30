import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  //const userIcon = `${process.env.PUBLIC_URL}/user.jpeg`;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <button onClick={handleGPTSearchClick} className="font-bold text-white bg-red-700 px-3 py-2 m-2 rounded">
            GPT Search{' '}
          </button>
          <img alt="user-icon" className="ml-2 w-10 h-10" src={user.photoURL} />
          <button onClick={handleSignOut} className="pl-2 font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
