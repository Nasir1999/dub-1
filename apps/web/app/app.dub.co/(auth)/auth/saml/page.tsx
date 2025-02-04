import { Suspense } from "react";
import SAMLIDPForm from "./form";
import { LoadingSpinner } from "@dub/ui/src";

export default function SAMLPage() {
  return (
    <div>
      <Suspense>
        <SAMLIDPForm />
      </Suspense>
      <div className="flex h-screen flex-col items-center justify-center space-y-6 text-center">
        <h1 className="font-display text-4xl font-bold">Authenticating</h1>
        <p className="text-lg text-gray-600">
          {process.env.NEXT_PUBLIC_APP_NAME} is verifying your identity.
          <br /> Please wait...
        </p>
        <LoadingSpinner className="h-7 w-7" />
      </div>
    </div>
  );
}
