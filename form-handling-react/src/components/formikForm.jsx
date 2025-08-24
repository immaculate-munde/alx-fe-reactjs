import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Define validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Formik Registration Form
      </h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted Data:", values);
          // Fake API call simulation
          setTimeout(() => {
            alert("User registered successfully!");
            resetForm();
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            {/* Username */}
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
