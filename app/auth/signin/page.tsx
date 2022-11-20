import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComp from "./SignInComp";

const SignInPage = async () => {
  const providers = await getProviders();
  return (
    <div className="grid justify-center">
      <div>
        <Image
          src="https://links.papareact.com/161"
          width={700}
          height={700}
          alt="Profile picture"
          className="rounded-full mx-2 object-cover"
        />
      </div>
      <SignInComp providers={providers} />
    </div>
  );
};

export default SignInPage;
