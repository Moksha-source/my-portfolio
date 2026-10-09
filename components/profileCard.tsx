import Image from "next/image";
export default function ProfileCard() {
  return (
    <aside className="bg-white border border-gray-border rounded-3xl p-6 md:p-8 h-fit lg:sticky lg:top-8 shadow-sm">

      {/* Profile */}
      <div className="flex flex-col items-center text-center">

        {/* Profile Image */}
        <div className="relative w-36 h-36 rounded-3xl border border-pink-border overflow-hidden mb-6">
          <Image
            src="/moksha-profile.jpeg"
            alt="Moksha - Software Developer"
            fill
            priority
            className="object-cover object-top"
            sizes="144px"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-black">
          Kukkunuru Moksha
        </h1>

        {/* Role */}
        <span className="mt-3 bg-pink-light text-pink px-5 py-2 rounded-full text-sm font-medium">
          Software Developer
        </span>

      </div>


      {/* Divider */}
      <div className="border-t border-gray-border my-7" />


      {/* Contact Details */}
      <div className="space-y-5">

        {/* Email */}
        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-pink">
            ✉
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray">
              Email
            </p>

            <p className="text-sm text-gray-dark mt-1">
              kmoksha54@gmail.com
            </p>
          </div>

        </div>


        {/* Location */}
        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-pink">
            📍
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray">
              Location
            </p>

            <p className="text-sm text-gray-dark mt-1">
              India
            </p>
          </div>

        </div>

      </div>


      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/Moksha-source/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-gray-light text-gray-dark hover:bg-pink-light hover:text-pink transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/k-moksha-912b71377/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-gray-light text-gray-dark hover:bg-pink-light hover:text-pink transition"
        >
          LinkedIn
        </a>
      </div>

    </aside>
  );
}