"use client";
import Logo from "@/app/components/logo";
import Table from "@/app/components/users_table";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import { useRouter } from "next/navigation";
import { unsetToken } from "../lib/auth";

export default function Dashboard() {
  const { user } = useFetchUser();
  const router = useRouter();

  const logout = () => {
    unsetToken();
    router.push("/");
  };

  if (!user) {
    router.push("/login");
  }

  return (
    <Layout user={user}>
      <div className="flex justify-between items-center pr-16">
        <Logo />
        <button
          onClick={logout}
          className="flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded-full"
        >
          Quit
        </button>
      </div>
      <div className="flex space-x-[50%] justify-center items-center">
        <button className="flex bg-[#F39C12] hover:bg-amber-500 text-white font-bold py-3 px-9 rounded-full">
          send email
        </button>
        <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full">
          send email
        </button>
      </div>
      <div className="flex justify-center items-center w-100% h-full p-10">
        <div className="bg-[#0053B5] w-full h-full text-[#ffffff]">
          <div>
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
}
