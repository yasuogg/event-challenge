"use client";
import { useState } from "react";
import { fetcher } from "../lib/api";
import { setToken } from "../lib/auth";
import Logo from "./logo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );

    setToken(responseData);
    router.push("/dashboard");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Logo />
      <div className="flex justify-center lg:justify-between h-screen">
        <div className="flex justify- items-center lg:flex lg:justify-start lg:pl-48  w-50% h-50% text-gray-500">
          <div className="flex-row text-gray justify-center items-center ">
            <div className="flex-row justify-center items-center">
              <h1 className="text-7xl lg:text-8xl font-bold text-[#faaa1f] text-center">
                Dash
                <br />
                <p className="text-[#0053B5]">Connect</p>
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex-col p-1">
                  <label className="flex p-2">Username</label>
                  <input
                    type="text"
                    name="identifier"
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="focus:border-blue-500 duration-500 shadow appearance-none border-2 selection:w-40% text-2xl lg:text-3xl py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full"
                  />
                </div>
                <div className="flex-col p-1">
                  <label className="flex p-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="focus:border-blue-500 duration-500 shadow appearance-none border-2 text-2xl lg:text-3xl w-50% py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full"
                  />
                </div>
                <button
                  type="submit"
                  className="flex text-2xl bg-[#0053B5] hover:bg-sky-600 text-white font-bold py-3 px-20 rounded-full"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <Image
          src="/dash1.png"
          className="hidden lg:block"
          width={650}
          height={100}
          alt="flutter"
        />
      </div>
    </>
  );
}
