export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="src/assets/baselogo.jpeg"
            alt="Base Logo" 
            className="h-12"
          />
          <h1 className="text-4xl font-bold text-center text-[#0f5dff]">
            Most BASED Builders of India
          </h1>
        </div>
      </div>
    </header>
  );
}