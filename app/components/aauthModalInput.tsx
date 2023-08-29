import * as React from "react";

type AuthModalInputType = {
  inputData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
};

function AuthModalInput({
  inputData,
  handleChangeInput,
  isSignin,
}: AuthModalInputType) {
  return (
    <div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm ">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 py-3 w-[49%] rounded"
            value={inputData.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 py-3 w-[49%] rounded"
            value={inputData.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          placeholder="E-mail"
          className="border p-2 py-3 w-full rounded"
          value={inputData.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm ">
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 py-3 w-[49%] rounded"
            value={inputData.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            placeholder="City"
            className="border p-2 py-3 w-[49%] rounded"
            value={inputData.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          placeholder="Password"
          className="border p-2 py-3 w-full rounded"
          value={inputData.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
}

export default AuthModalInput;
