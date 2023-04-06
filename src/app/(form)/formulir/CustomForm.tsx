"use client";
// Since we need to handle form in client, we need to make this client only

import { useRouter } from "next/navigation";
// We will use react-hook-form (RHF) for input state and validation (client side validation)
import { useForm, type SubmitHandler } from "react-hook-form";

type CustomFormInput = {
  username: string;
  password: string;
};

const CustomForm = () => {
  // We need to use hooks useRouter
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomFormInput>();

  const onSubmit: SubmitHandler<CustomFormInput> = async (data) => {
    const formData = new FormData();
    try {
      formData.append("username", data.username);
      formData.append("password", data.password);

      const response = await fetch("/api/formulir", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson);
      }
    } catch (err) {
      console.log(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
        {/* Using react-hook-form (RHF), now we can validate / required the field */}
        <input
          type="text"
          id="username"
          className="px-4 py-2 rounded ring-1 ring-blue-100 hover:ring-blue-300 transition-all duration-200"
          placeholder="Your Username?"
          {...register("username", { required: true })}
        />
        {/* We can extract the error (boolean) here */}
        {errors.username && (
          <span className="text-red-400">This field is required</span>
        )}

        <input
          type="password"
          id="password"
          className="px-4 py-2 rounded ring-1 ring-blue-100 hover:ring-blue-300 transition-all duration-200"
          placeholder="Your Password?"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-400">This field is required</span>
        )}
        <button
          className="py-2 px-4 bg-sky-200 hover:bg-sky-400 hover:text-slate-100 transition-colors duration-200 rounded"
          type="submit"
        >
          Submit Login
        </button>
      </section>
    </form>
  );
};

export default CustomForm;
