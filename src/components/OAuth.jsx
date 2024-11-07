import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log("result", result);

      // Send the user details to your backend
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();

      if (data?.message === "User is Deactivated") {
        console.log("User is deactivated.");
        try {
          await fetch("/api/auth/signout");
          dispatch(signOut());
        } catch (error) {
          console.log(error);
        }
        return;
      }

      console.log("User data:", data);
      dispatch(signInSuccess(data));

      // Get the Firebase ID token using the correct method
      const idToken = await result.user.getIdToken();

      // Send the Firebase ID token to your backend
      fetch("/api/protected-route", {
        method: "GET",
        headers: {
          Authorization: `Bearer firebase:${idToken}`, // Send Firebase token with "firebase:" prefix
        },
      });

      navigate("/");

    } catch (error) {
      console.log("Could not login with Google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mt-6"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <img
          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          className="absolute left-0 w-5"
          alt="google logo"
        />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          Continue with Google
        </span>
      </div>
    </button>
  );
}
