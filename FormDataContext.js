// FormDataContext.js

import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();
// Create a custom hook to access the form data and set it
export const useFormData = () => {
  return useContext(FormDataContext);
};

// Create a provider component to wrap your app
export const FormDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    Registeration_No: [],
    Admission_Date: null,
    Class_Roll_No: "",
    Student_Name: "",
    Date_of_Birth: null,
    Left_School: null,
    Remarks: "",
    Class: "",
    Father_Name: "",
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

  return (
    <FormDataContext.Provider value={{ user, setUser }}>
      {children}
    </FormDataContext.Provider>
  );
};
