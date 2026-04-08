/* eslint-disable react/react-in-jsx-scope */
import { listProyek } from '../data';
function Projects() {
  return (
    <div className="projects mt-32 py-10" id="projects">
      <h1
        className="text-center text-4xl/snug font-bold mb-15"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      {/* <p
        className="text-center opacity-60 mb-14"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Kumpulan proyek yang telah saya kerjakan
      </p> */}
      <div
        className="projects-box grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-zinc-800/60 rounded-2xl border border-zinc-700 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                loading="lazy"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold my-3 group-hover:text-violet-300 transition-colors">
                {proyek.nama}
              </h1>
              <p className="text-sm/loose mb-4 opacity-70">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs py-1 px-2.5 border border-zinc-600 bg-zinc-700/50 rounded-md font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="bg-violet-700 hover:bg-violet-600 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm font-medium"
                >
                  <i className="ri-external-link-line"></i>
                  Lihat Proyek
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
