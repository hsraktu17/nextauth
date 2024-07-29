"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="flex justify-center items-center mb-10">
        <div className="text-7xl font-bold text-gray-900">
          Nextauth Trail version
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="rounded-full bg-teal-700 text-white px-6 py-4 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </button>
        <button
          className="rounded-full bg-teal-700 text-white px-6 py-4 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50"
          onClick={() => signIn()}
        >
          Sign In
        </button>
        <button
          className="rounded-full bg-teal-700 text-white px-6 py-4 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>
      <div className="text-black">
        {JSON.stringify(session?.data?.user?.email)}
        {/* {JSON.stringify(session)} */}
        {/* {JSON.stringify(session?.data?.expires)} */}
        <br />
        {JSON.stringify(session?.data?.user?.name)}
        <br />
        {JSON.stringify(session?.status)}
      </div>
    </div>
  );
}
