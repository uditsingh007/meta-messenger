import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth/next";

const Header = async () => {
  const session = await unstable_getServerSession();
  if (session) {
    return (
      <header className="sticky top-0 bg-white z-50 shadow-sm flex items-center justify-between p-10">
        <div className="flex space-x-2">
          <Image
            src={session?.user?.image!}
            alt="Profile picture"
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-400">Logged in as</p>
            <p className="font-bold text-lg">{session?.user?.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  }
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm flex items-center justify-center p-10">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            height={10}
            width={50}
            alt="Logo"
          />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
