import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-base text-slate-500 mb-6 max-w-md">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="border border-neutral-300 text-neutral-800 text-sm font-medium py-2 px-4 rounded-md hover:bg-neutral-100 transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}
