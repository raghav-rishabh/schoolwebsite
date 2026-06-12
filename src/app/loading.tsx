export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-[#7ab5ab]/20 border-t-[#7ab5ab] rounded-full animate-spin" />

      <h2 className="mt-8 text-2xl font-semibold text-[#1f2937]">
        St. Johns School
      </h2>

      <p className="mt-2 text-gray-500">
        It won't take long...
      </p>
    </div>
  );
} 