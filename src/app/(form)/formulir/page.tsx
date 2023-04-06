import CustomForm from "./CustomForm";

const FormulirPage = () => {
  return (
    <main className="p-4 bg-gray-100 min-w-full min-h-screen">
      <p className="text-xl font-semibold mb-4">Formulir Page</p>

      {/* This will be interactive on client */}
      <CustomForm />
    </main>
  );
};

export default FormulirPage;
