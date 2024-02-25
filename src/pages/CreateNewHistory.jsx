import { useState } from "react";

export default function CreateNewHistory() {
  return (
    <div>
      <form action="">
        <h1 className="text-3xl text-center mt-6">CreateNewHistory</h1>
        <div className=" mr-auto ml-auto text-center">
          <input
            className=" w-11/12 border p-2 mt-6 "
            type="text"
            placeholder="Product Name"
          />
          <input
            className=" w-11/12 border p-2 mt-4 "
            type="text"
            placeholder="Quantity"
          />
          <input
            className=" w-11/12 border p-2 mt-8 bg-sky-600 text-white rounded-[0.5rem]"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
