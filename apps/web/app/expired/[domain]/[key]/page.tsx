import { getLinkViaEdge } from "@/lib/planetscale";
import { Background, Footer, Nav } from "@dub/ui/src";
import { constructMetadata } from "@dub/utils";
import { TimerOff } from "lucide-react";
import { notFound } from "next/navigation";

export const runtime = "edge";

export const metadata = constructMetadata({
  title: "Expired Link – Dub.co",
  description:
    "This link has expired. Please contact the owner of this link to get a new one.",
  noIndex: true,
});

export default async function ExpiredPage({
  params,
}: {
  params: { domain: string; key: string };
}) {
  const domain = params.domain;
  const key = decodeURIComponent(params.key);

  const data = await getLinkViaEdge(domain, key);

  // if the link doesn't exist
  if (!data) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <div className="mx-2 my-10 flex max-w-md flex-col items-center space-y-5 px-2.5 text-center sm:mx-auto sm:max-w-lg sm:px-0 lg:mb-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gray-300 bg-white/30">
          <TimerOff className="h-6 w-6 text-gray-400" />
        </div>
        <h1 className="font-display text-5xl font-bold">Expired Link</h1>
        <p className="text-lg text-gray-600">
          This link has expired. Please contact the owner of this link to get a
          new one.
        </p>
        <a
          href="https://dub.co"
          className="rounded-full bg-gray-800 px-10 py-2 font-medium text-white transition-colors hover:bg-black"
        >
          Create Your Free Branded Link
        </a>
      </div>
      <Footer />
      <Background />
    </main>
  );
}
