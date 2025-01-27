
export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('temp_bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-white text-center p-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-4">Learn more about our Omega Epsilon chapter</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="placeholder.jpg" alt="Placeholder 1" className="rounded-lg shadow-md" />
            <img src="placeholder.jpg" alt="Placeholder 2" className="rounded-lg shadow-md" />
            <img src="placeholder.jpg" alt="Placeholder 3" className="rounded-lg shadow-md" />
            <img src="placeholder.jpg" alt="Placeholder 4" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Welcome to Omega Epsilon</h2>
            <p className="mt-4 text-lg">
              Founded in 1904, Theta Tau is the oldest and largest professional engineering fraternity in the United States.
              Our mission is to develop engineers into leaders by fostering professionalism, community service, and lifelong
              brotherhood.
            </p>
            <p className="mt-4 text-lg">
              The Omega Epsilon Chapter at San José State University is the newest addition to this historic organization. Since
              our founding in 2018, we have grown into a thriving community of engineering students dedicated to building
              professional networks, giving back to the community, and forming strong bonds of brotherhood. With a focus on
              innovation and collaboration, we aim to prepare our members for successful careers while creating a lasting impact
              on our campus and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Professionalism Section */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Professionalism</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="placeholder.jpg" alt="Professionalism Event 1" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Professionalism Event 2" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Professionalism Event 3" className="rounded-lg shadow-md" />
        </div>
        <div className="mt-8 text-center">
          <img
            src="placeholder.jpg"
            alt="Professionalism Chair"
            className="mx-auto rounded-full w-32 h-32 shadow-md"
          />
          <p className="mt-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur turpis id nulla ultricies, at
            aliquet arcu laoreet."
          </p>
          <p className="mt-2 font-bold">- Previous Professionalism Chair</p>
        </div>
      </section>

      {/* Community Service Section */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Community Service</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="placeholder.jpg" alt="Community Service Event 1" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Community Service Event 2" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Community Service Event 3" className="rounded-lg shadow-md" />
        </div>
        <div className="mt-8 text-center">
          <img
            src="placeholder.jpg"
            alt="Community Service Chair"
            className="mx-auto rounded-full w-32 h-32 shadow-md"
          />
          <p className="mt-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur turpis id nulla ultricies, at
            aliquet arcu laoreet."
          </p>
          <p className="mt-2 font-bold">- Previous Community Service Chair</p>
        </div>
      </section>

      {/* Brotherhood Section */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Brotherhood</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="placeholder.jpg" alt="Brotherhood Event 1" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Brotherhood Event 2" className="rounded-lg shadow-md" />
          <img src="placeholder.jpg" alt="Brotherhood Event 3" className="rounded-lg shadow-md" />
        </div>
        <div className="mt-8 text-center">
          <img
            src="placeholder.jpg"
            alt="Brotherhood Chair"
            className="mx-auto rounded-full w-32 h-32 shadow-md"
          />
          <p className="mt-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur turpis id nulla ultricies, at
            aliquet arcu laoreet."
          </p>
          <p className="mt-2 font-bold">- Previous Brotherhood Chair</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 text-black px-8 lg:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Chapter History</h2>
        <div className="mt-8 space-y-8">
          {[
            {
              title: "Spring 2018: The Spark of Inspiration",
              content:
                "Markuendelein, inspired by the brothers of the Epsilon Delta Chapter at UC San Diego, envisioned a professional engineering fraternity at San José State University.",
            },
            {
              title: "Summer 2018: Building Connections",
              content:
                "Reaching out to the engineering community, Muendelein connected with Karli Ching from UC Davis and Vinay Reddy, a founding father of the Omicron Gamma Chapter.",
            },
            {
              title: "Fall 2018: Growth and Momentum",
              content:
                "With 15 founding members, the group held its first general meeting, strategizing recruitment, publicity, and leadership roles.",
            },
            {
              title: "Spring 2022: Petition for Chapter Status",
              content:
                "Under the leadership of Regent Eloisa Kaye Difuntorum, the Candidate Chapter submitted its petition for chapter status to the National Organization.",
            },
            {
              title: "December 3, 2022: Omega Epsilon Chapter Installation",
              content:
                "The San José State University Candidate Chapter officially became the Omega Epsilon Chapter of Theta Tau.",
            },
          ].map((event, index) => (
            <div key={index}>
              {/* TODO make adjustment to styles */}
              <h3 className="text-xl font-bold text-tt-dark-red">{event.title}</h3>
              <p className="mt-2">{event.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


