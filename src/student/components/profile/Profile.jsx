import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.scss";
import logo from "../../../assets/logo.png";
import placeholder from "../../../assets/placeholder.jpg";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";
const Profile = ({ isAuthenticated, user }) => {
  const [image, setImage] = useState(user.avatar.url);
  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState(user.gender);
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [coutry, setCountry] = useState("");
  const [username, setUsername] = useState(user.email);
  const [skypeId, setSkypeId] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [feeStatus, setFeeStatus] = useState("");

  const [status, setStatus] = useState("");

  const role = (isAuthenticated = true ? user.role : "");
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const [visible, setVisible] = useState("");

  return (
    <section className="profile">
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link className="active" to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <Link to="/classchedule">Class Schedule</Link>
            </li>

            <li>
              <Link to="/attendancehistory">Attendance History</Link>
            </li>

            <li>
              <Link
                to={
                  role == "teacher"
                    ? "/teacher/salaryrecord"
                    : "/student/examhistory"
                }
              >
                {role == "teacher" ? "Salary Record" : "Exam History"}
              </Link>
            </li>

            <li>
              <Link
                to={
                  role === "teacher"
                    ? "/teacher/students"
                    : "/student/performancereport"
                }
              >
                {role === "teacher" ? "Students" : "Performance Report"}
              </Link>
            </li>

            <li>
              <Link
                to={role === "teacher" ? "/contactmenu" : "/student/feerecord"}
              >
                {role === "teacher" ? "Complaint Records" : "Fee Record"}
              </Link>
            </li>

            <li>
              <Link
                to={
                  role === "teacher" ? "/teacher/performance" : "/contactmenu"
                }
              >
                {role === "teacher" ? "Teacher Performance" : "Contact Menu"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col1">
          <div className="col1-content">
            <div className="pr-image-row">
              <div className="dropdown">
                <img
                  id="pr-image"
                  src={image == "" ? placeholder : image}
                  alt=""
                  onClick={() => setVisible(!visible)}
                />
                <ul className={visible ? "show" : "hide"}>
                  <li onClick={clickHandler}>Logout</li>
                </ul>
              </div>
            </div>
            <div className="profile-details">
              <img src={image == "" ? placeholder : image} alt="" />

              <form action="">
                <div className="form-data">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />

                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="text"
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />

                    <label htmlFor="fathername">Father Name</label>
                    <input
                      type="text"
                      id="fathername"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                    />

                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      value={coutry}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="skypeId">Skype ID</label>
                    <input
                      type="text"
                      id="skypeId"
                      value={skypeId}
                      onChange={(e) => setSkypeId(e.target.value)}
                    />

                    <label htmlFor="zoomlink">Zoom Link</label>
                    <input
                      type="text"
                      id="zoomlink"
                      value={zoomLink}
                      onChange={(e) => setZoomLink(e.target.value)}
                    />

                    <label htmlFor="whatsapp">Whatsapp Number</label>
                    <input
                      type="text"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsApp(e.target.value)}
                    />

                    <label htmlFor="feestatus">
                      {role === "teacher" ? "Status" : "Fee Status"}
                    </label>
                    <input
                      type="text"
                      id="feestatus"
                      value={feeStatus}
                      onChange={(e) =>
                        role === "teacher"
                          ? setStatus(e.target.value)
                          : setFeeStatus(e.target.value)
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="btn-row">
                  <button type="submit">Update</button>
                  <button type="submit">Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
