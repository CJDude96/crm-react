import {
  useNavigate,
  useLoaderData,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { getClientById, updateClient } from "../api/clients";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";

export async function loader({ params }) {
  const client = await getClientById(params.id);
  if (Object.values(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Client not found",
    });
  }
  console.log(client);
  return client;
}

export async function action({ request, params }) {
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

  await updateClient(data, params.id);

  return redirect("/");
}

const EditClient = () => {
  const navigate = useNavigate();
  const client = useLoaderData();
  const errs = useActionData();

  return (
    <>
      <h1 className="text-4xl text-emerald-800 font-black">Edit Client</h1>

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
          <ClientForm client={client} />
          <input
            type="submit"
            className="mt-5 w-full bg-emerald-800 p-3 
        uppercase font-bold text-white text-lg"
            value="Save Changes"
          />
        </Form>
      </div>
    </>
  );
};

export default EditClient;
