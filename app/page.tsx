import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";
import PasskeyModel from "@/components/PasskeyModel";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex max-h-screen h-screen">
      {isAdmin && <PasskeyModel></PasskeyModel>}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[490px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm></PatientForm>
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              {"\u00A9"} 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      ></Image>
    </div>
  );
}
