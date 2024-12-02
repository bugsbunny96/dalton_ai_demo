import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schemas
const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Define animations for the card and content
    const containerVariants = {
        initial: { x: 0, opacity: 1 },
        login: { x: 0, opacity: 1, transition: { duration: 0.6 } },
        signup: { x: "-100%", opacity: 1, transition: { duration: 0.6 } },
    };

    const contentVariants = {
        initial: { x: 0, opacity: 1 },
        login: { x: "0%", opacity: 1, transition: { duration: 0.6 } },
        signup: { x: "90%", opacity: 1, transition: { duration: 0.6 } },
    };


    return (
        <div className="flex flex-row min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-y-auto">
            {/* Content Section */}
            <motion.div
                className="flex-1 flex items-center justify-center p-12"
                variants={contentVariants}
                animate={isLogin ? "login" : "signup"}
                initial="initial"
                exit="initial"
            >
                <div className="text-white">
                    {isLogin ? (
                        <div>
                            <h1 className="text-4xl font-bold">Welcome Back!</h1>
                            <p className="mt-4">Login to continue your journey with us.</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-4xl font-bold">Join Our Platform!</h1>
                            <p className="mt-4">Create an account to start your journey today.</p>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Form Card Section */}
            <motion.div
                className="flex-1 flex items-center justify-center "
                variants={containerVariants}
                animate={isLogin ? "login" : "signup"}
            >
                <motion.div
                    className="w-full max-w-md p-12 bg-white rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {isLogin ? (
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                console.log("Login values:", values);
                            }}
                        >
                            {() => (
                                <Form>
                                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                                            Email Address
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Email Address"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Password"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4 flex justify-between items-center">
                                        <label className="inline-flex items-center">
                                            <Field type="checkbox" name="rememberMe" className="mr-2" />
                                            Remember me
                                        </label>
                                        <a href="#" className="text-blue-500 text-sm hover:underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500 text-white rounded hover:opacity-90"
                                    >
                                        Login
                                    </button>
                                    <p className="text-center mt-4">
                                        Don’t have an account?{" "}
                                        <button
                                            type="button"
                                            className="text-blue-500 hover:underline"
                                            onClick={() => setIsLogin(false)}
                                        >
                                            Register
                                        </button>
                                    </p>

                                    <div className="mt-6">

                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">
                                                    OR
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-3 gap-3">
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    ) : (
                        <Formik
                            initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                console.log("Signup values:", values);
                            }}
                        >
                            {() => (
                                <Form>
                                    <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                                            Full Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="fullName"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Full Name"
                                        />
                                        <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                                            Email Address
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Email Address"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Password"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Confirm Password"
                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500 text-white rounded hover:opacity-90"
                                    >
                                        Register Now
                                    </button>
                                    <p className="text-center mt-4">
                                        Already have an account?{" "}
                                        <button
                                            type="button"
                                            className="text-blue-500 hover:underline"
                                            onClick={() => setIsLogin(true)}
                                        >
                                            Login Now
                                        </button>
                                    </p>

                                    <div className="mt-6">

                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">
                                                    OR
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-3 gap-3">
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#"
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200">
                                                    <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginSignup;
