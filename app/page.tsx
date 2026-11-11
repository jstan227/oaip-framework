import {
  Brain,
  MessageSquareText,
  Ear,
  Heart,
  School,
  Rocket,
  Users,
  GraduationCap,
  Search,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-xl font-bold text-sky-800">
              Torbay OAIP
            </h1>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#" className="font-medium hover:text-sky-700">
              Framework
            </a>
            <a href="#" className="font-medium hover:text-sky-700">
              Principles
            </a>
            <a href="#" className="font-medium hover:text-sky-700">
              Development Areas
            </a>
            <a href="#" className="font-medium hover:text-sky-700">
              Resources
            </a>
          </nav>

          <button className="rounded-xl bg-sky-700 px-4 py-2 text-white">
            Search
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-sky-800 to-sky-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28">

          <div className="max-w-3xl">

            <span className="rounded-full border border-white/30 px-4 py-2 text-sm backdrop-blur">
              Torbay Ordinarily Available Inclusive Practice Framework
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Belong.
              <br />
              Participate.
              <br />
              Learn.
              <br />
              Succeed.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-sky-100">
              Supporting inclusive practice across Early Years,
              Schools and Post-16 settings through practical,
              evidence-informed guidance, resources and examples
              of effective inclusive practice.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-sky-800 transition hover:scale-105">
                Explore the Framework
              </button>

              <button className="rounded-2xl border border-white/30 px-6 py-4 font-semibold transition hover:bg-white/10">
                Find Practical Strategies
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* WHAT ARE YOU NOTICING */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            What are you noticing?
          </h2>

          <p className="mt-3 text-slate-600">
            Start with a need and we'll guide you to relevant
            strategies across the framework.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Communication Difficulties",
            "Transitions",
            "Sensory Needs",
            "Anxiety",
            "Emotional Regulation",
            "Attendance",
            "Friendships",
            "Organisation",
          ].map((item) => (
            <button
              key={item}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
            >
              <h3 className="font-semibold">
                {item}
              </h3>

              <div className="mt-4 flex items-center text-sky-700">
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SIX PRINCIPLES */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Six Principles of Inclusion
            </h2>

            <p className="mt-2 text-slate-600">
              The foundation of inclusive practice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Leadership & Culture",
                icon: School,
              },
              {
                title: "Belonging & Relationships",
                icon: Heart,
              },
              {
                title: "Collaborative Partnerships",
                icon: Users,
              },
              {
                title: "Independence & Preparation for Life",
                icon: Rocket,
              },
              {
                title: "Enabling Environments",
                icon: GraduationCap,
              },
              {
                title: "High Quality Adaptive Teaching",
                icon: Brain,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-slate-50 p-7 transition hover:shadow-xl"
              >
                <card.icon className="mb-5 h-10 w-10 text-sky-700" />

                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  Explore practical examples, strategies,
                  resources and implementation guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT AREAS */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Five Areas of Development
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">

          {[
            {
              title: "Executive Functioning",
              icon: Brain,
            },
            {
              title: "Speech, Language & Communication",
              icon: MessageSquareText,
            },
            {
              title: "Social & Emotional",
              icon: Heart,
            },
            {
              title: "Motor & Physical",
              icon: Rocket,
            },
            {
              title: "Sensory",
              icon: Ear,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <item.icon className="mx-auto mb-4 h-12 w-12 text-sky-700" />

              <h3 className="font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-sky-900 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            How the Framework Works
          </h2>

          <div className="grid gap-8 md:grid-cols-4">

            {[
              "Know It",
              "See It",
              "Do It",
              "Notice The Difference",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
              >
                <div className="mb-4 text-sm font-bold text-cyan-300">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE HUB */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Resource Hub
            </h2>

            <p className="mt-2 text-slate-600">
              Browse videos, templates, case studies and
              implementation resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">

            {[
              "Videos",
              "Case Studies",
              "Downloads",
              "Toolkits",
            ].map((resource) => (
              <div
                key={resource}
                className="rounded-3xl border border-slate-200 p-8 text-center transition hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  {resource}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH CTA */}

      <section className="bg-slate-100 py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Search the Framework
          </h2>

          <p className="mt-4 text-slate-600">
            Find strategies, resources and guidance instantly.
          </p>

          <div className="mt-10 flex rounded-3xl bg-white p-3 shadow-lg">

            <Search className="ml-4 mt-4 h-5 w-5 text-slate-400" />

            <input
              className="flex-1 px-4 py-3 outline-none"
              placeholder="Search sensory, regulation, communication, transitions..."
            />

            <button className="rounded-2xl bg-sky-700 px-8 py-3 font-semibold text-white">
              Search
            </button>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-slate-950 py-12 text-slate-400">

        <div className="mx-auto max-w-7xl px-6">

          <h3 className="font-bold text-white">
            Torbay OAIP Framework
          </h3>

          <p className="mt-3">
            Supporting inclusive practice across all educational settings.
          </p>

        </div>

      </footer>

    </main>
  );
}