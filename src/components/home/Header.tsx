"use client";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="h-14 flex items-center justify-between mx-4 border-b ">
      <div className="w-8">
        <Image
          className="cursor-pointer"
          src={"/images/logo.jpg"}
          alt="이봉희_portfolio_로고"
          width={30}
          height={30}
        />
      </div>

      <ul className="flex items-center justify-between flex-grow mx-40">
        <li className="text-lg font-bold hover:text-blue-400 cursor-pointer">
          Home
        </li>
        <li className="text-lg font-bold hover:text-blue-400  cursor-pointer">
          Resume
        </li>
        <li className="text-lg font-bold hover:text-blue-400  cursor-pointer">
          Portfolio
        </li>
        <li className="text-lg font-bold hover:text-blue-400  cursor-pointer">
          Github
        </li>
        <li className="text-lg font-bold hover:text-blue-400  cursor-pointer ">
          Velog
        </li>
      </ul>

      <div className="w-8">menu</div>
    </header>
  );
}

export default Header;
