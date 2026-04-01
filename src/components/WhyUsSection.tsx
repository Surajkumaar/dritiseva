const stats = [
  {
    id: "families",
    bg: "#fce7f3",   // pink
    text: (
      <>
        Over <strong>10,000+</strong> families supported with compassionate
        caregiving since 2020
      </>
    ),
    image: "/caregiver_elderly.png",
    imageAlt: "Caregiver helping elderly",
  },
  {
    id: "caregivers",
    bg: "#dcfce7",   // green
    text: (
      <>
        Over <strong>3000+</strong> Caregivers trained and oriented across
        India
      </>
    ),
    image: "/caregiver_team.png",
    imageAlt: "Caregiver team",
  },
  {
    id: "seniors",
    bg: "#fef9c3",   // yellow
    text: (
      <>
        Over <strong>90%</strong> of seniors reported a significant improvement
        in their quality of life
      </>
    ),
    image: "/seniors_happy.png",
    imageAlt: "Happy seniors",
  },
  {
    id: "google",
    bg: "#dbeafe",   // blue
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-3 py-6">
        <div className="flex items-center gap-1 text-yellow-400 text-3xl">
          ★ <span className="text-4xl font-extrabold text-gray-900">4.8</span>
        </div>
        <div className="flex items-center gap-1">
          {/* G-o-o-g-l-e  colored letters */}
          {["G", "o", "o", "g", "l", "e"].map((ch, i) => {
            const colors = [
              "#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335",
            ];
            return (
              <span
                key={i}
                className="text-2xl font-bold"
                style={{ color: colors[i] }}
              >
                {ch}
              </span>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 text-center">Rated on Google</p>
      </div>
    ),
  },
  {
    id: "better",
    bg: "#fef9c3",
    text: (
      <>
        <strong>50%</strong> of seniors reported better mental well-being
        through our companionship programme
      </>
    ),
    image: null,
  },
  {
    id: "certified",
    bg: "#dcfce7",
    text: (
      <>
        Over <strong>3000+</strong> Caregivers trained and certified with
        industry-leading standards
      </>
    ),
    image: null,
  },
];

const WhyUsSection = () => (
  <section
    id="about"
    className="section-padding bg-white"
  >
    <div className="container-max">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-lg mx-auto leading-tight">
          Why Seniors And Family Members Love Dritiseva
        </h2>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-2xl overflow-hidden flex flex-col justify-between min-h-[220px] hover:shadow-md transition-shadow duration-200"
            style={{ backgroundColor: stat.bg }}
          >
            {stat.content ? (
              <div className="p-6 h-full">{stat.content}</div>
            ) : (
              <>
                <p className="text-sm font-medium text-gray-800 leading-relaxed p-6 pb-2">
                  {stat.text}
                </p>
                {stat.image && (
                  <div className="px-4 pb-4 mt-auto">
                    <img
                      src={stat.image}
                      alt={stat.imageAlt}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
