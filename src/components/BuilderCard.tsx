interface BuilderCardProps {
  name: string;
  twitter: string;
}

export function BuilderCard({ name, twitter }: BuilderCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={`https://unavatar.io/twitter/${twitter}`}
            alt={`${name}'s profile`}
            className="w-12 h-12 rounded-full"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors"
        >
          <img 
            src="logo-black.png"// Replace with your image filename
            alt="X Logo"
            className="w-5 h-5"
          />
        </a>
      </div>
      <p className="text-gray-600">@{twitter}</p>
    </div>
  );
}