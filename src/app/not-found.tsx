import Link from "next/link";

export default function Page404() {
  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32 px-6 lg:px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-blue-300">404</p>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-background shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Back to home
          </Link>
          <a
            href="mailto:contact@octussis.com"
            className="text-sm font-semibold text-white"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
