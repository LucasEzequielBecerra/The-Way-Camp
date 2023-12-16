import React, { useState } from "react";

export const SendButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    // Simulamos una llamada asíncrona
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500); // Ajusta el tiempo según tus necesidades
  };

  return (
    <button
    className={`flex justify-center items-center bg-orange text-white min-w-[80px] min-h-[40px] py-2.5 px-4 rounded-[10px] text-sm/[10px] hover:bg-orange/70 ${
      isLoading || isSuccess && "opacity-50 cursor-inherit" 
    }`}
    onClick={handleClick}
    disabled={isLoading || isSuccess} // Condición para deshabilitar el botón
  >
    {isLoading ? (
      <img src="./spinner.svg" className=" animate-spin w-5"/>
    ) : isSuccess ? (
      <img src="./check.svg" className="w-5"/>
    ) : (
      "SEND"
    )}
  </button>
  );
};


