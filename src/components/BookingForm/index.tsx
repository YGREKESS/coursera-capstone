import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
import Button from "../Button";

// Define validation schema with Yup
const validationSchema = Yup.object({
  lastName: Yup.string().required("Lastname is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  guests: Yup.number()
    .min(1, "At least 1 guest required")
    .max(6, "Max 6 guests allowed")
    .required("Guests number is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const BookingForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      lastName: "",
      email: "",
      guests: 1,
      date: "",
      time: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Booking is successfully saved!");
      console.log(values);
      resetForm();
    },
  });

  return (
    <div id="booking-form">
      <h2>Reserve a table</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p style={{ color: "red" }}>{formik.errors.lastName}</p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="guests">Guest(s)</label>
          <select
            id="guests"
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {formik.touched.guests && formik.errors.guests ? (
            <p style={{ color: "red" }}>{formik.errors.guests}</p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <p style={{ color: "red" }}>{formik.errors.date}</p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time ? (
            <p style={{ color: "red" }}>{formik.errors.time}</p>
          ) : null}
        </div>

        <Button
          variant="yellow"
          customStyle={{ width: "100%" }}
          size="sm"
          type="submit"
          label="Reserve a table"
        />
      </form>
    </div>
  );
};

export default BookingForm;
