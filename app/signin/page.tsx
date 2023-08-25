import { LoginForm } from "./components/form";

export default function LoginPage() {
  return (
    <>
      <section className="md:ml-28 min-h-screen pt-20">
        <div className="flex flex-col items-center ">
          <div className="text-xl mb-2 text-red-500">Admin Area !</div>
          <img
            className="w-40"
            src="/ipa_logo_edit.png"
            alt="IPA Logo"
          />
        </div>
        <div className="container mx-auto px-6 py-12 h-full  flex justify-center items-center">
          <div className=" md:w-8/12 lg:w-5/12 rounded-md border-2 border-dotted shadow-lg border-gray-500 bg-primary/20 px-8 py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
