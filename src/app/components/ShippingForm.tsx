import { useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "./Types";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  return (
    <form className="flex flex-col gap-4">
      {/* 1* field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      {/* 2* field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="E-mail" className="text-xs text-gray-500 font-medium">
          E-mail
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="Email"
          placeholder="Elias@gmail.com"
          {...register("email")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        )}
      </div>
      {/* 3* field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      {/* 4* field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
    </form>
  );
};

export default ShippingForm;
