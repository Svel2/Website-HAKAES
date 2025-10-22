export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Loading animation */}
        <div className="inline-flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FF0000] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-[#FF0000] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-[#FF0000] rounded-full animate-bounce"></div>
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        
        {/* HAKAES branding */}
        <p className="mt-2 text-sm text-gray-400">HAKAES Logistics</p>
      </div>
    </div>
  );
}
