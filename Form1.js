import React from "react";
import { Formik, Form, Field } from "formik";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Registerationform.css";
import { useFormData } from "./FormDataContext";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Form1 = () => {

  const url = "http://localhost:4048/api/studentAdmission";
  const { user, setUser } = useFormData({
    Registeration_No: [],
    Admission_Date: null,
    Class_Roll_No: "",
    Student_Name: "",
    Date_of_Birth: null,
    Remarks: "",
    Class: "",
    Age: "",
    Gender: "",
    profileimg: null,
    Reason_to_Leave: "",
    Admission_to_class: "",
    Home_Address: "",
    Religion: "",
    Health_issues: "",
    Hobbies_Interest: "",
    L_school_Attended: "",
    Leaving_reason: "",
    Remedy: "",
    Form_B_No: "",
    Photographs: "",
    Birth_Certificate: "",
    School_Leaving_Certificate: "",
    Father_Name: "",
    Father_CNIC: "",
    Father_Phone: "",
    Residence_Phone: "",
    Father_Occupation: "",
    SMS_Mobile: "",
    Monthly_Fee: "",
    Discount: "",
    Security_DEP: "",
    Select_Area: "",
    Net_Fee: "",
  });

  const inputref = useRef(null);
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const handleInputs = (e) => {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;

    setUser(newData);
    console.log("user", newData);
  };
 




  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the selectedDate, like submitting it to a server
  };

  const handleImageClick = () => {
    inputref.current.click({});
  };

  const gotoHome = () => {
    const data = {
      Registeration_No: user.Registeration_No,
      Admission_Date: user.Admission_Date,
      Class_Roll_No: user.Class_Roll_No,
      Student_Name: user.Student_Name,
      Date_of_Birth: user.Date_of_Birth,
      Left_School: user.Left_School,
      Remarks: user.Remarks,
      Class: user.Class,
      Age: user.Age,
      Gender: user.Gender,
      profileimg: user.profileimg,
      Reason_to_Leave: user.Reason_to_Leave,
      Admission_to_class: user.Admission_to_class,
      Home_Address: user.Home_Address,
      Religion: user.Religion,
      Health_issues: user.Health_issues,
      Hobbies_Interest: user.Hobbies_Interest,
      L_school_Attended: user.L_school_Attended,
      Leaving_reason: user.Leaving_reason,
      Remedy: user.Remedy,
      Form_B_No: user.Form_B_No,
      Photographs: user.Photographs,
      Birth_Certificate: user.Birth_Certificate,
      School_Leaving_Certificate: user.School_Leaving_Certificate,
      Father_Name: user.Father_Name,
      Father_CNIC: user.Father_CNIC,
      Father_Phone: user.Father_Phone,
      Residence_Phone: user.Residence_Phone,
      Father_Occupation: user.Father_Occupation,
      SMS_Mobile: user.SMS_Mobile,

      Monthly_Fee: user.Monthly_Fee,
      Discount: user.Discount,
      Security_DEP: user.Security_DEP,
      Select_Area: user.Select_Area,
      Net_Fee: user.Net_Fee,
    };
    console.log("data", data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Handle the data
        console.log(data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };

 
  const areasInPakistan = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    // Add more areas as needed
  ];

  return (
    <>
      <Formik initialValues={user} onSubmit={handleSubmit}>
        {({  handleChange, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div
              className="form-container"
              style={{
                padding: "2px",
                height: "600px",
                border: "1px solid #04213F",
                marginTop: "2px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              <div className="form-column">
                <h1 style={{ marginTop: "20px" }}>Admission Form</h1>
                <label htmlFor="registerationNo">Registeration No </label>
                <Field
                  type="text"
                  id="registerationNo"
                  name="Registeration_No"
                  value={user.Registeration_No || ''}
                  onChange={handleInputs}
                  className="field"
                />

                <label htmlFor="Age">Age</label>
                <Field
                  type="text"
                  id="Age"
                  name="Age"
                  value={user.Age|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Class">Class</label>
                <Field
                  type="text"
                  id="Class"
                  name="Class"
                  value={user.Class|| ''}
                  onChange={handleInputs}
                  className="field"
                />

                <label htmlFor="classRollNo">Class Roll No</label>
                <Field
                  id="classRollNo"
                  type="text"
                  name="Class_Roll_No"
                  value={user.Class_Roll_No|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="studentName">Student Name</label>
                <Field
                  id="studentName"
                  type="text"
                  name="Student_Name"
                  value={user.Student_Name|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="fatherName">Father Name</label>
                <Field
                  type="text"
                  id="fatherName"
                  name="Father_Name"
                  value={user.Father_Name|| ''}
                  onChange={handleInputs}
                  className="field"
                />

                <label htmlFor="Gender">Gender</label>
                <div className="display-flex">
                  <label>
                    <Field
                      id="Gender"
                      name="Gender"
                      value="male"
                      type="radio"
                      onChange={handleInputs}
                      checked={user.Gender === "male"}
                      className="field"
                    />
                    Male
                  </label>
                  <label htmlFor="Gender1">
                    <Field
                      id="Gender1"
                      name="Gender"
                      value="female"
                      type="radio"
                      onChange={handleInputs}
                      checked={user.Gender === "female"}
                      className="field"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div>{/* Rest of your form columns */}</div>

              <div className="form-column" style={{ marginTop: "-27px" }}>
                <label
                  htmlFor="Date_of_Birth"
                  className="lab"
                  style={{ marginTop: "60px" }}
                >
                  Date Of Birth
                </label>
                <Datepicker
  id="Date_of_Birth"
  name="Date_of_Birth"
  value={user.Date_of_Birth|| ''}
  selected={user.Date_of_Birth}
  onChange={(date) => handleInputs({ target: { name: "Date_of_Birth", value: date } })}
  className="field"
/>
                <label htmlFor="Admission_Date" className="lab">
                  Admission Date
                </label>

                <Datepicker
                  id="Admission_Date"
                  name="Admission_Date"
                  value={user.Admission_Date|| ''}
                  selected={user.Admission_Date}
                  onChange={(date) => handleInputs({ target: { name: "Admission_Date", value: date } })}
                />
                <label htmlFor="Left_School" className="lab">
                  Left School
                </label>
                <Datepicker
                  id="Left_School"
                 name="Left_School"
                  value={user.Left_School|| ''}
                  selected={user.Left_School}
                
                  onChange={(date) => handleInputs({ target: { name: "Left_School", value: date } })}
                  className="field"
                />
                <label htmlFor="Remarks">Remarks</label>
                <Field
                  id="Remarks"
                  type="text"
                  name="Remarks"
                  value={user.Remarks|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Reason_to_Leave">Reason To Leave</label>
                <Field
                  id="Reason_to_Leave"
                  type="text"
                  name="Reason_to_Leave"
                  value={user.Reason_to_Leave|| ''}
                  onChange={handleInputs}
                  className="field"
                />

                {/* Rest of your form fields */}
              </div>
              <div className="form-column">
                {/* <label style={{ marginTop: "30px" }}></label> */}
                {image ? (
                  <img
                    style={{ marginLeft: "130px" }}
                    className="imgs"
                    src={URL.createObjectURL(image)}
                    value={user.profileimg|| ''}
                    onChange={handleInputs}
                    width="100"
                    height="100"
                    alt="Profile Image"
                  />
                ) : (
                  <img
                    onClick={handleImageClick}
                    src="https://mysms.zsoft.pk/profile.jpg"
                    style={{ marginLeft: "130px", marginTop: "20px" }}
                    alt="Profile Image"
                    width="100"
                    height="100"
                  />
                )}
                <label
                  htmlFor="fileInput"
                  style={{ marginLeft: "130px", marginTop: "20px" }}
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  id="fileInput"
                  value={user.profileimg|| ''}
                  ref={inputref}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div
              className="form-container"
              style={{
                padding: "2px",
                height: "600px",
                border: "1px solid #04213F",
                marginTop: "10px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              <div className="form-column">
                <h1>Personal Info</h1>
                <label htmlFor="Admission_to_class">Admission To Class</label>
                <Field
                  type="text"
                  id="Admission_to_class"
                  name="Admission_to_class"
                  value={user.Admission_to_class|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Home_Address">Home Address</label>
                <Field
                  type="text"
                  id="Home_Address"
                  name="Home_Address"
                  value={user.Home_Address|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Religion">Religion</label>
                <Field
                  type="text"
                  id="Religion"
                  name="Religion"
                  value={user.Religion|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Health_issues">Health Issues</label>
                <Field
                  type="text"
                  id="Health_issues"
                  name="Health_issues"
                  value={user.Health_issues|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Hobbies_Interest">Hobbies Interest</label>
                <Field
                  type="text"
                  id="Hobbies_Interest"
                  name="Hobbies_Interest"
                  value={user.Hobbies_Interest|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="L_school_Attended">Last School Attended</label>
                <Field
                  type="text"
                  id="L_school_Attended"
                  name="L_school_Attended"
                  value={user.L_school_Attended|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Leaving_reason">Leaving Reason</label>
                <Field
                  type="text"
                  id="Leaving_reason"
                  name="Leaving_reason"
                  value={user.Leaving_reason|| ''}
                  onChange={handleInputs}
                  className="field"
                />
              </div>
              <div></div>

              <div className="form-column" style={{ marginTop: "14px" }}>
                <label htmlFor="Remedy">Remedy</label>
                <Field
                  type="text"
                  id="Remedy"
                  name="Remedy"
                  value={user.Remedy|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="FormBNo">Form B No</label>
                <input type="checkbox" id="FormBNo" name="fatherCnicCheckbox" />

                <label htmlFor="Photographs">Photographs</label>
                <input
                  type="checkbox"
                  id="Photographs"
                  name="photographsCheckbox"
                  value={user.Photographs|| ''}
                  onChange={handleInputs}
                />

                <label htmlFor="BirthCertificate">Birth Certificate</label>
                <input
                  type="checkbox"
                  id="BirthCertificate"
                  name="birthCertificateCheckbox"
                  value={user.Birth_Certificate|| ''}
                  onChange={handleInputs}
                />
                <label htmlFor="SchoolLeavingCertificate">
                  School Leaving Certificate
                </label>
                <input
                  id="SchoolLeavingCertificate"
                  type="checkbox"
                  name="schoolLeavingCertificateCheckbox"
                  value={user.School_Leaving_Certificate|| ''}
                  onChange={handleInputs}
                />
                <label htmlFor="FatherCnic">Father Cnic</label>
                <input
                  type="checkbox"
                  id="FatherCnic"
                  name="fatherCnicCheckbox"
                  value={user.Father_CNIC|| ''}
                  onChange={handleInputs}
                />
              </div>
            </div>

            <div
              className="form-container"
              style={{
                padding: "2px",
                height: "300px",
                border: "1px solid #04213F",
                marginTop: "10px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              <div className="form-column">
                <h1>Contact Info</h1>
                <label htmlFor="Father_Name">Father Name</label>
                <Field
                  type="text"
                  id="Father_Name"
                  name="Father_Name"
                  value={user.Father_Name|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Father_CNIC">Father CNIC</label>
                <Field
                  type="text"
                  id="Father_CNIC"
                  name="Father_CNIC"
                  value={user.Father_CNIC|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Father_Phone">Father Phone</label>
                <Field
                  type="text"
                  id="Father_Phone"
                  name="Father_Phone"
                  value={user.Father_Phone|| ''}
                  onChange={handleInputs}
                  className="field"
                />
              </div>
              <div></div>

              <div className="form-column" style={{ marginTop: "13px" }}>
                <label htmlFor="Residence_Phone">Residence Phone</label>
                <Field
                  type="text"
                  id="Residence_Phone"
                  name="Residence_Phone"
                  value={user.Residence_Phone|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Father_Occupation">Father Occupation</label>
                <Field
                  type="text"
                  id="Father_Occupation"
                  name="Father_Occupation"
                  value={user.Father_Occupation|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="SMS_Mobile">SMS Mobile</label>
                <Field
                  type="text"
                  id="SMS_Mobile"
                  name="SMS_Mobile"
                  value={user.SMS_Mobile|| ''}
                  onChange={handleInputs}
                  className="field"
                />
              </div>
            </div>

            <div
              className="form-container"
              style={{
                padding: "2px",
                height: "400px",
                border: "1px solid #04213F",
                marginTop: "5px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              <div className="form-column">
                <h1>Fee Info</h1>
                <label htmlFor="Monthly_Fee">Monthly Fee</label>
                <Field
                  type="text"
                  id="Monthly_Fee"
                  name="Monthly_Fee"
                  value={user.Monthly_Fee|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Discount">Discount</label>
                <Field
                  type="text"
                  id="Discount"
                  name="Discount"
                  value={user.Discount|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Security_DEP">Security Deposit</label>
                <Field
                  type="text"
                  id="Security_DEP"
                  name="Security_DEP"
                  value={user.Security_DEP|| ''}
                  onChange={handleInputs}
                  className="field"
                />
                <label htmlFor="Select_Area">Select Area</label>
                <Field
                  as="select"
                  id="Select_Area"
                  name="Select_Area"
                  value={user.Select_Area|| ''}
                  onChange={handleInputs}
                  required
                  className="field"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {areasInPakistan.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="form-column" style={{ marginTop: "14px" }}>
                <label htmlFor="Net_Fee">Net Fee</label>
                <Field
                  type="text"
                  id="Net_Fee"
                  name="Net_Fee"
                  value={user.Net_Fee|| ''}
                  onChange={handleInputs}
                  className="field"
                />
              </div>
            </div>

            <div className="button-container">
              <button
                type="submit"
                onClick={gotoHome}
                className="previous"
                style={{
                  marginRight: "60px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Form1;
