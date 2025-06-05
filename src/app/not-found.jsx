// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b  p-4 dark:bg-[#0D001A]">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-bold text-indigo-600">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="mt-2 text-center text-gray-600 dark:text-white" >
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}