import Image from "next/image";
import React from "react";

function TItle() {
  return (
    <div className="max-w-4xl mx-auto mt-40 relative w-full">
      <h2 className="font-extrabold text-5xl">이봉희</h2>

      <p className="mt-10 font-semibold text-3xl">Web FrontEnd Developer</p>
      <Image
        className="w-full h-80 object-cover opacity-60 mt-2 relative"
        src={"/images/main.jpg"}
        alt="이봉희_메인이미지"
        width={600}
        height={400}
      />

      <div className="absolute top-1/2 ml-40 text-xl font-semibold w-full text-gray-900">
        <p className="mb-2">안녕하세요. 웹 프론트엔드 개발자 이봉희입니다.</p>
        <p>
          다양한 환경에 적응을 잘하고, 새로운 기술을 배우는데 어려움이 없습니다.
        </p>
      </div>
    </div>
  );
}

export default TItle;
