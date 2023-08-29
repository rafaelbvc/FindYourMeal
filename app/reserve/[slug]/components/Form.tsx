"use client";
import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import useReservation from "../../../../hooks/useReservation";
import { CircularProgress } from "@mui/material";

export default function Form({
  date,
  slug,
  partySize,
}: {
  date: string;
  slug: string;
  partySize: string;
  setBook?: Dispatch<SetStateAction<boolean>>
}) {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const [day, time] = date.split("T");
  const [disabled, setDisabled] = useState(false);
  const { error, loading, createReservation } = useReservation();
  const [book, setBook] = useState(false)


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
      setBook,
    })
    
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerPhone &&
      inputs.bookerEmail
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [inputs]);

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="First name"
        value={inputs.bookerFirstName}
        name="bookerFirstName"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="Last Name"
        value={inputs.bookerLastName}
        name="bookerLastName"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="Phone"
        value={inputs.bookerPhone}
        name="bookerPhone"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="Email "
        value={inputs.bookerEmail}
        name="bookerEmail"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
        value={inputs.bookerOccasion}
        name="bookerOccasion"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="text border rounded p-3 w-80 mb-4"
        placeholder="Request (optional)"
        value={inputs.bookerRequest}
        name="bookerRequest"
        onChange={handleChangeInput}
      />

     {book === false ?  <button
        disabled={disabled || loading}
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
        onClick={handleClick}
      >
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          "Complete reservation"
        )}
      </button> : <button
        disabled={disabled || loading}
        className="bg-green-600 w-full p-3 text-white font-bold rounded"
        onClick={handleClick}
      >
          Enjoy your reservation!
      </button>}

      <p className="mt-4 text-sm">
        By clicking "Complete reservation" you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messeges at any time.
      </p>
    </div>
  );
}
