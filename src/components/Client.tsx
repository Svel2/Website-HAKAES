export default function Client() {
  return (
    <section className="w-full bg-[#FF0000] border-y border-gray-200 py-4 sm:py-6 my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[55px] flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Client Logo 1 */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/logo/KGP.png" 
              alt="KGP Logo" 
              className="max-h-[45px] w-auto object-contain"
            />
          </div>

          {/* Client Logo 2 */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/logo/Argenta.png" 
              alt="Argenta Logo" 
              className="max-h-[50px] w-auto object-contain"
            />
          </div>

          {/* Client Logo 3 */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/logo/brother.png" 
              alt="Brother Logo" 
              className="max-h-[45px] w-auto object-contain"
            />
          </div>

          {/* Client Logo 4 */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/logo/mitrainfosarana.png" 
              alt="Mitra Infosarana Logo" 
              className="max-h-[40px] w-auto object-contain"
            />
          </div>

          {/* Client Logo 5 */}
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/logo/TVRI.png" 
              alt="TVRI Logo" 
              className="max-h-[35px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
