import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";
import { addClient } from "../api/clients";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get("email");

  // validations
  const errs = [];
  if (Object.values(data).includes("")) {
    errs.push("All fields are required!!");
  }

  let regex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  if (!regex.test(email)) {
    errs.push("Invalid email!!");
  }

  //return errs

  if (Object.keys(errs).length) {
    return errs;
  }

  await addClient(data);

  return redirect("/");
}

const NewClient = () => {
  const errs = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl text-emerald-800 font-black">New Client</h1>

      <div className="flex justify-end">
        <button
          className="bg-emerald-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errs?.length && errs.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <ClientForm />
          <input
            type="submit"
            className="mt-5 w-full bg-emerald-800 p-3 
          uppercase font-bold text-white text-lg"
            value="Save Client"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
