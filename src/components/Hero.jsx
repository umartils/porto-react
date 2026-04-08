/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import DataImage from '../data';

const socialLinks = [
  { href: 'https://github.com/umartils/', icon: 'ri-github-fill' },
  { href: 'https://www.instagram.com/umartils_', icon: 'ri-instagram-fill' },
  {
    href: 'https://www.linkedin.com/in/umartils/',
    icon: 'ri-linkedin-box-fill',
  },
];

export default function Hero({ loading }) {
  return (
    <div
      id="home"
      className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-15 gap-6 xl:gap-0"
    >
      {/* LEFT CONTENT */}
      <div
        className={`order-2 md:order-1 ${
          !loading ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        } transition-all duration-500`}
      >
        {/* Heading */}
        <h1 className="text-5xl/tight font-bold mb-10">
          Halo, Saya <span className="text-violet-400">Umar Tilmisani</span>
        </h1>

        {/* Subheading */}
        {/* <p className="text-lg text-violet-300 mb-7">
          Fullstack Web Developer, AI/ML & IoT Engineer
        </p> */}

        {/* Description */}
        <p className="text-base/loose mb-6 opacity-70">
          Saya adalah seorang pengembang yang berfokus pada pengembangan
          software, perangkat IoT, dan solusi berbasis AI/ML. Saya terbiasa
          membangun sistem end-to-end mulai dari perangkat keras, backend,
          hingga aplikasi yang terintegrasi. Saya menggabungkan pemahaman teknis
          yang kuat dengan pendekatan problem-solving untuk menghasilkan solusi
          yang fungsional, efisien, dan berdampak nyata.
        </p>

        {/* Social Icons */}
        <div className="flex sm:gap-4 justify-start gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:w-12 w-10 sm:h-12 h-10 text-violet-200 bg-zinc-800/60 border border-zinc-700 rounded-full transition-colors hover:text-violet-500"
            >
              <i className={`${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 md:order-2 flex flex-col items-center relative w-full md:w-fit md:ml-auto">
        {/* Glow */}
        <div className="absolute inset-0 scale-110 rounded-full blur-2xl bg-linear-to-tr from-violet-600/30 via-purple-500/20 to-transparent"></div>

        {/* Image */}
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          loading="lazy"
          className={`md:mb-8 mb-5 relative w-72 md:w-96 rounded-full object-cover ring-4 ring-violet-500/40 shadow-2xl transition duration-500 ease-in-out hover:scale-105 hover:ring-violet-400 hover:shadow-violet-500/30 ${
            !loading ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        />
        {/* Badge */}
        <div className="flex items-center mb-6 bg-zinc-800 md:w-fit w-1/2 p-4 rounded-2xl border border-zinc-700">
          <span className="text-violet-300 font-medium text-center">
            Fullstack Developer & AI/ML Engineer
          </span>
        </div>
      </div>
    </div>
  );
}
