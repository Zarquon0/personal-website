'use client'

export default function JobCard({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) {
  return (
    <div
      className="group relative w-64 h-80 bg-cover bg-center rounded-3xl overflow-hidden transform transition-all duration-500 hover:w-96"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-1/2 left-0 w-full h-16 bg-black bg-opacity-60 flex items-center justify-center transform -translate-y-1/2">
        <span className="text-white text-lg font-semibold">{title}</span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black bg-opacity-70 text-white text-sm p-4 overflow-hidden transition-all duration-500 group-hover:h-1/2">
        <p>{description}</p>
      </div>
    </div>
  )
}