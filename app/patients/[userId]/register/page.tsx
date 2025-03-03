"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const Register = () => {
  const { userId } = useParams(); // useParams should be called inside the component
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const fetchedUser = await getUser(userId);
        setUser(fetchedUser);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex max-h-screen h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">{"\u00A9"} 2024 CarePulse</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
