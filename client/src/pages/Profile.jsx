import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import bgprofile from "../assets/bgProfile.png";
import profile from "../assets/profilepic.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiNurseMale } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../redux/user/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full">
        <div
          className="md:w-4/5 mx-auto"
          style={{
            backgroundImage: `url(${bgprofile})`,
            backgroundSize: "cover", // or 'contain' depending on your design needs
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-20"></div>

          <div className="p-3 md:w-2/4 w-4/5 mx-auto border-2 border-[#008080] rounded-3xl bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div
                className="flex justify-center items-center mx-auto h-[200px] w-[200px]"
                style={{
                  backgroundImage: `url(${profile})`,
                  backgroundSize: "cover", // or 'contain' depending on your design needs
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <input
                  type="file"
                  ref={fileRef}
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {/* 
      firebase storage rules:  
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*') */}
                <img
                  src={formData.profilePicture || currentUser?.profilePicture || currentUser?.rest?.profilePicture}
                  alt="profile"
                  className="h-32 w-32 self-center cursor-pointer rounded-full object-cover mt-2 border-2 border-[#008080]"
                  onClick={() => fileRef.current.click()}
                />
              </div>
              <p className="text-sm self-center">
                {imageError ? (
                  <span className="text-red-700">
                    Error uploading image (file size must be less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span className="text-green-700">
                    Image uploaded successfully
                  </span>
                ) : (
                  ""
                )}
              </p>

              <div className="relative mb-2 mt-2 flex items-center">
                <FaRegUser className=" absolute left-4 mb-0 mt-auto" />
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Name of devotee"
                ></input>
              </div>
              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineMail className=" absolute left-4 mb-0 mt-auto" />
                <input
                  type="email"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Email"
                ></input>
              </div>
              <div className="relative mb-2 mt-2 flex items-center">
                <FaMobileAlt className=" absolute left-4 mb-0 mt-auto" />
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Mobile Number"
                ></input>
              </div>
              <div className="relative mb-2 mt-2 flex items-center">
                <ImProfile className=" absolute left-4 mb-0 mt-auto" />
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Your Country name"
                ></input>
              </div>
              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineRealEstateAgent className=" absolute left-4 mb-0 mt-auto" />
                <input
                  type="date"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Age"
                ></input>
                <div className="relative w-5/6 ml-4">
                  <GiNurseMale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    id="gender"
                    name="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <button
                className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl"
                type="submit"
              >
                Update
              </button>
            </form>
            <div className="flex justify-between mt-5">
              <span
                onClick={handleDeleteAccount}
                className="text-red-700 cursor-pointer"
              >
                Delete Account
              </span>
              <span
                onClick={handleSignOut}
                className="text-red-700 cursor-pointer"
              >
                Sign out
              </span>
            </div>
            <p className="text-red-700 mt-5">
              {error && "Something went wrong!"}
            </p>
            <p className="text-green-700 mt-5">
              {updateSuccess && "User is updated successfully!"}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden h-[150px]"></div>
    </>
  );
}
