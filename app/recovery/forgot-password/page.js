import Logo from "@/app/_components/Logo";
import { resetPasswordWithMail } from "@/app/_lib/actions";
import { headers } from "next/headers";

export const metadata = {
  title: "Forgot Password",
};

export default function Page() {
  const origin = headers().get("origin");
  console.log(origin);
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-[30rem] sm:w-[30rem] mx-auto px-2 sm:px-4 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-2 max-w-[28rem] sm:w-[28rem] sm:border border-accent-400 sm:py-16 sm:px-10 rounded-2xl">
        <Logo />

        <h3 className="my-4 text-accent-500 text-xl font-light capitalize">
          Enter your registered Email ID
        </h3>

        {/* SIGN IN USING SUPABASE */}
        <form action={resetPasswordWithMail} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="py-2 px-1 w-[18.5rem] rounded-md text-primary-950 placeholder:text-accent-600"
          />

          <button className="w-full py-2 text-xl text-accent-600 font-semibold border-2 border-accent-600 rounded-lg hover:text-primary-950 hover:bg-accent-600 transition-all">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
