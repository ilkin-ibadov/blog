'use client'

export default function LoadingSpinner() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-500"></div>
    </main>
  );
}