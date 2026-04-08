/* eslint-disable react/react-in-jsx-scope */
import DataImage from '../data';
import { listTools } from '../data';

export default function About() {
  return (
    <div className="about mt-32 py-10" id="about">
      <h1
        className="text-center text-4xl font-bold mb-10"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Tentang Saya
      </h1>
      <div
        className="xls:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-2xl border border-zinc-700"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          loading="lazy"
          className="w-12 rounded-md mb-8 sm:hidden"
        />
        <p className="text-base/loose mb-10 opacity-85">
          Halo, perkenalkan saya Umar Tilmisani, seorang fresh graduate Teknik
          Komputer yang memiliki minat besar di bidang IT, khususnya
          pengembangan software, perangkat hardware, serta AI/Machine Learning.
          Saya telah mengerjakan lebih dari 20 proyek yang mencakup berbagai
          bidang tersebut, mulai dari pengembangan aplikasi hingga sistem
          berbasis perangkat keras. Saya berfokus pada membangun solusi yang
          tidak hanya fungsional, tetapi juga efisien dan memberikan dampak
          nyata.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            loading="lazy"
            className="w-15 rounded-md sm:block hidden ring-2 ring-violet-600/40"
          />
          <div className="flex items-center gap-8">
            <div className="text-center">
              <h1 className="text-4xl mb-1 font-bold">
                45 <span className="text-violet-500">+</span>
              </h1>
              <p className="opacity-60 text-sm">Project Completed</p>
            </div>
            <div className="w-px h-12 bg-zinc-600"></div>
            <div className="text-center">
              <h1 className="text-4xl mb-1 font-bold">
                4 <span className="text-violet-500">+</span>
              </h1>
              <p className="opacity-60 text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="tools mt-30 py-10">
        <h1
          className="text-center text-4xl/snug font-bold mb-3"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Tools
        </h1>
        <p
          className="text-center opacity-60 mb-14"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Teknologi dan alat yang saya gunakan sehari-hari
        </p>
        <div
          className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-3 p-4 border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-violet-600/40 group transition-all"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-12 h-12 object-contain bg-zinc-800 p-1.5 rounded-lg group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-semibold text-sm">{tool.nama}</h4>
                <p className="opacity-50 text-xs mt-0.5">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
