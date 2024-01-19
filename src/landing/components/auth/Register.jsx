import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import TimezoneSelect from "react-timezone-select";

const Register = () => {
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [maslak, setMaslak] = useState("");
  const [secLanguage, setSecLanguage] = useState("");
  const [currentTimeZone, setCurrentTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [dateOfRegularJoining, setDateOfRegularJoining] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [secondaryMobileNumber, setSecondaryMobileNumber] = useState("");

  const [qiadah, setQaidah] = useState("");
  const [nazrah, setNazrah] = useState("");
  const [hifz, setHifz] = useState("");
  const [tajweed, setTajweed] = useState("");
  const [qirat, setQirat] = useState("");
  const [fiqah, setFiqah] = useState("");
  const [tafseer, setTafseer] = useState("");
  const [other, setOther] = useState("");

  const [accountTitle, setAccountTitle] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [accountNo, setAccountNo] = useState("");

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [hifzImage, setHifzImage] = useState("");
  const [qiratImage, setqiratImage] = useState("");
  const [sscImage, setSscImage] = useState("");
  const [tajweedImage, setTajweedImage] = useState("");
  const [darsImage, setDarsImage] = useState("");

  const [experience1, setExperience1] = useState("");
  const [experience2, setExperience2] = useState("");
  const [experience3, setExperience3] = useState("");

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const roleOptions = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
  ];

  const maritalStatusOptions = [
    { value: "married", label: "Married" },
    { value: "single", label: "Single" },
  ];

  const ynoptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const changeImageHandler = () => {
    setImage();
  };

  return (
    <section className="login about">
      <div className="row">
        <form action="">
          <h2>Signup</h2>
          <div>
            <h3>Bio Data</h3>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                }),
              }}
              placeholder="Choose Role"
              value={role}
              onChange={setRole}
              options={roleOptions}
            ></Select>
            <input
              type="file"
              accept="**image"
              id="image"
              value={image}
              onChange={changeImageHandler}
            />
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              placeholder="Choose Gender"
              defaultValue={gender}
              onChange={setGender}
              options={genderOptions}
            ></Select>

            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <input
              type="text"
              placeholder="Native Language"
              value={nativeLanguage}
              onChange={(e) => setNativeLanguage(e.target.value)}
            />

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                }),
              }}
              placeholder="Choose Marital Status"
              defaultValue={maritalStatus}
              onChange={setMaritalStatus}
              options={maritalStatusOptions}
            ></Select>

            <input
              type="text"
              placeholder="Secondary Language"
              value={secLanguage}
              onChange={(e) => setSecLanguage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Father Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Current Country"
              value={currentCountry}
              onChange={(e) => setCurrentCountry(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />

            <input
              type="Number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              type="text"
              placeholder="Maslak"
              value={maslak}
              onChange={(e) => setMaslak(e.target.value)}
            />

            <div className="timezone">
              <TimezoneSelect
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "rgba(4, 127, 106, 0.192)",
                    padding: "5px",
                    border: "none",
                  }),
                }}
                value={currentTimeZone}
                onChange={setCurrentTimeZone}
              ></TimezoneSelect>
            </div>

            <input
              type="date"
              placeholder="Date of Regular Joining"
              value={dateOfRegularJoining}
              onChange={(e) => setDateOfRegularJoining(e.target.value)}
            />
          </div>

          <div>
            <h3>Contact Details</h3>
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Whatsapp Number"
              value={whatsAppNumber}
              onChange={(e) => setWhatsAppNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Postal Address"
              value={postalAddress}
              onChange={(e) => setPostalAddress(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Skype Id"
              value={skypeId}
              onChange={(e) => setSkypeId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Secondary Phone Number"
              value={secondaryPhoneNumber}
              onChange={(e) => setSecondaryPhoneNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Secondary Mobile Number"
              value={secondaryMobileNumber}
              onChange={(e) => setSecondaryMobileNumber(e.target.value)}
            />
          </div>

          <div className={role.value === "student" ? "show" : "hide"}>
            <h3>Previous Qualification</h3>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={qiadah}
              onChange={setQaidah}
              options={ynoptions}
              placeholder="Complete Qaidah"
            ></Select>

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={nazrah}
              onChange={setNazrah}
              options={ynoptions}
              placeholder="Nazrah"
            ></Select>

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={hifz}
              onChange={setHifz}
              options={ynoptions}
              placeholder="Complete Hifz-ul-Quran"
            ></Select>

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={tajweed}
              onChange={setTajweed}
              options={ynoptions}
              placeholder="Complete Tajweed"
            ></Select>

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={qirat}
              onChange={setQirat}
              options={ynoptions}
              placeholder="Complete Qirat"
            ></Select>

            <input
              type="text"
              placeholder="Fiqah"
              value={fiqah}
              onChange={setFiqah}
            />

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgba(4, 127, 106, 0.192)",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              value={tafseer}
              onChange={setTafseer}
              options={ynoptions}
              placeholder="Complete Tafseer"
            ></Select>

            <input
              type="text"
              placeholder="Other"
              value={other}
              onChange={setOther}
            />
          </div>

          <div className={role.value === "teacher" ? "show" : "hide"}>
            <h3>Previous Qualification</h3>
            <label htmlFor="hifz">Compelete Hifz-ul-Quran</label>
            <input type="file" placeholder="" id="hifz" value={hifzImage} />

            <label htmlFor="hifz">Qirat Course</label>
            <input type="file" placeholder="" id="qirat" value={qiratImage} />

            <label htmlFor="ssc">SSC</label>
            <input type="file" placeholder="" id="ssc" value={sscImage} />

            <label htmlFor="tajweed">Tajweed Course</label>
            <input
              type="file"
              placeholder=""
              id="tajweed"
              value={tajweedImage}
            />

            <label htmlFor="darse">Dars-e-Nizami</label>
            <input type="file" placeholder="" id="darse" value={darsImage} />
          </div>

          <div className={role.value === "teacher" ? "show" : "hide"}>
            <h3>Experience</h3>
            <textarea
              placeholder="Experience 1"
              value={experience1}
              onChange={(e) => setExperience1(e.target.value)}
            ></textarea>

            <textarea
              placeholder="Experience 2"
              value={experience2}
              onChange={(e) => setExperience2(e.target.value)}
            ></textarea>

            <textarea
              placeholder="Experience 3"
              value={experience3}
              onChange={(e) => setExperience3(e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>Bank Details</h3>
            <input
              type="text"
              placeholder="Account Title"
              value={accountTitle}
              onChange={(e) => setAccountTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Bank Name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Branch Code"
              value={branchCode}
              onChange={(e) => setBranchCode(e.target.value)}
            />

            <input
              type="text"
              placeholder="Account No"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>

          <div>
            <h3>Password</h3>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder="Confirm Password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <button className="accentBtn">Signup</button>
          <p>
            Already Have Account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
