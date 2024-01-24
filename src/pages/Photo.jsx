/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OURB0S0gR7N
 */

export default function Component() {
  return (
    <div className="dark flex items-center justify-center h-screen w-screen bg-black bg-opacity-15">

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border-2 border-blue-400">
        <img
            alt="Photo 1"
            className="object-cover w-full h-60"
            height="600"
            width="800"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg md:text-xl">Photo 1</h3>
          </div>
        </div>
    </div>
  )
}

