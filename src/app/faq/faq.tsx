"use client";

import { useMemo, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Category = "All" | "Eligibility" | "Recruitment" | "Membership" | "Fit";

type FaqItem = {
  id: string;
  category: Exclude<Category, "All">;
  q: string;
  a: string;
};

const faqData: FaqItem[] = [
  {
    id: "who-can-apply",
    category: "Eligibility",
    q: "Who can apply to KTP?",
    a: "Students from any major are welcome to apply. The main requirement is that you have at least two semesters left at UNC after the semester you apply, so you have enough time to participate fully in the chapter after recruitment.",
  },
  {
    id: "minimum-gpa",
    category: "Eligibility",
    q: "Is there a minimum GPA?",
    a: "Yes. KTP requires a minimum 2.5 cumulative GPA to be eligible for recruitment. If you're close to that threshold and have questions about timing, it's still worth reaching out so you know when applying would make the most sense.",
  },
  {
    id: "what-major",
    category: "Eligibility",
    q: "What major do I need?",
    a: "There's no required major. Members come from Computer Science, Information Science, Business, Statistics, Philosophy, Environmental Science, and other areas. Interest in the community matters much more than a specific major title.",
  },
  {
    id: "recruitment-process",
    category: "Recruitment",
    q: "What is the recruitment process?",
    a: "Recruitment usually begins with informal events that are open to anyone who wants to learn more. After that, selected students move into formal recruitment. Informal events are the best place to start because they let you meet members and get a real feel for the chapter.",
  },
  {
    id: "miss-events",
    category: "Recruitment",
    q: "What if I can't attend all informal events?",
    a: "That doesn't automatically rule you out. If you have conflicts, reach out to the Director of Membership early. We know students are balancing classes, jobs, and other commitments, and communication goes a long way.",
  },
  {
    id: "rush-other-orgs",
    category: "Recruitment",
    q: "What if I am also rushing another organization?",
    a: "That's completely okay. A lot of students are exploring a few communities at once while they figure out what feels right. The application includes space to share that context if it's relevant.",
  },
  {
    id: "apply-again",
    category: "Recruitment",
    q: "Can I apply again after not receiving a bid?",
    a: "Yes. Reapplying is common, and many strong members joined after applying more than once. Growth, continued interest, and a clearer understanding of the chapter can make a real difference in a later cycle.",
  },
  {
    id: "benefits",
    category: "Membership",
    q: "How would I benefit from KTP?",
    a: "Members get support with resumes, interviews, coursework, mentorship, and career advice, plus access to a strong alumni network. Just as importantly, many people find a close community here within a large campus.",
  },
  {
    id: "nme-time",
    category: "Membership",
    q: "How much time does NME require?",
    a: "New Member Education is generally comparable to a three credit-hour course. It's a meaningful commitment, but it's designed to be manageable alongside a normal semester schedule.",
  },
  {
    id: "what-looking-for",
    category: "Fit",
    q: "What is KTP looking for?",
    a: "There's not one perfect profile. We look for students who are thoughtful about why they want to join, interested in technology in some form, and excited to contribute to the chapter community.",
  },
  {
    id: "right-fit",
    category: "Fit",
    q: "How do I know if KTP is the right fit for me?",
    a: "KTP tends to be a strong fit for students who want both professional growth and a real community. Informal events are usually the best way to tell whether the culture and people feel right to you.",
  },
];

const quickFacts = [
  { label: "Open to", value: "All majors" },
  { label: "Minimum GPA", value: "2.5 cumulative" },
  { label: "Time left at UNC", value: "2+ semesters" },
];

const categories: Category[] = ["All", "Eligibility", "Recruitment", "Membership", "Fit"];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqData[0].id);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { ref, inView } = useInView(0.05);

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.q.toLowerCase().includes(normalizedQuery) ||
        item.a.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const groupedFaqs = useMemo(
    () =>
      categories
        .filter((category) => category !== "All")
        .map((category) => ({
          category,
          items: filteredFaqs.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length > 0),
    [filteredFaqs]
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-20 pt-8 min-h-screen">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-pale via-white to-transparent" />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute top-56 -left-16 h-52 w-52 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <div className="surface-hover-sheen rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                Browse FAQ
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-navy">
                Search and filter
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Jump to a topic instead of scrolling through everything.
              </p>

              <label className="mt-5 block">
                <span className="sr-only">Search the FAQ</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <i className="fa-solid fa-magnifying-glass text-sm text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search questions"
                    className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>

              <div className="mt-5 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory((current) =>
                        current === category ? "All" : category
                      )
                    }
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      activeCategory === category
                        ? "bg-navy text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-blue-pale hover:text-navy"
                    }`}
                  >
                    <span>{category}</span>
                    {activeCategory === category && <i className="fa-solid fa-check text-xs" />}
                  </button>
                ))}
              </div>

            </div>

            <div className="surface-hover-glow rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold text-navy">Quick facts</p>
              <div className="mt-4 space-y-3">
                {quickFacts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="surface-hover-chip rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-base font-bold text-navy">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div
            ref={ref}
            className={`reveal ${inView ? "visible" : ""}`}
          >
            <div className="surface-hover-float rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-6">
              <div className="mb-5 rounded-2xl bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-navy">Frequently asked questions</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Questions are grouped by topic below, and the filter panel stays visible while you browse.
                </p>
              </div>

              {groupedFaqs.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
                  <p className="text-sm font-semibold text-navy">Still have a question?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Email{" "}
                    <a href="mailto:uncktp@gmail.com" className="font-medium text-blue hover:underline">
                      uncktp@gmail.com
                    </a>
                    {" "}or follow{" "}
                    <a
                      href="https://www.instagram.com/ktpunc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue hover:underline"
                    >
                      @ktpunc
                    </a>
                    {" "}for recruitment updates.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {groupedFaqs.map((group) => (
                    <section key={group.category}>
                      <div className="mb-3 flex items-center gap-3 px-1">
                        <h3 className="text-lg font-bold text-navy">{group.category}</h3>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>

                      <div className="space-y-3">
                        {group.items.map((item) => {
                          const isOpen = open === item.id;

                          return (
                            <div
                              key={item.id}
                              className={`surface-hover-rail rounded-2xl border transition-all duration-300 ${
                                isOpen
                                  ? "border-blue/40 bg-blue-pale/40 shadow-card"
                                  : "border-slate-200 bg-white hover:border-blue/30 hover:bg-slate-50/80"
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : item.id)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${item.id}`}
                                className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
                              >
                                <span className="flex-1">
                                  <span className="block text-base font-semibold leading-7 text-navy md:text-lg">
                                    {item.q}
                                  </span>
                                </span>

                                <span
                                  className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                    isOpen
                                      ? "border-blue bg-blue text-white"
                                      : "border-slate-300 bg-white text-slate-400"
                                  }`}
                                >
                                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                </span>
                              </button>

                              <div
                                id={`faq-panel-${item.id}`}
                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600 md:px-6 md:pb-6 md:text-base">
                                    {item.a}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>

            <div className="surface-hover-glow mt-6 rounded-[1.5rem] border border-blue/15 bg-blue-pale/45 px-5 py-5 md:px-6">
              <p className="text-sm font-semibold text-navy">Still have a question?</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Email{" "}
                <a href="mailto:uncktp@gmail.com" className="font-medium text-blue hover:underline">
                  uncktp@gmail.com
                </a>
                {" "}or follow{" "}
                <a
                  href="https://www.instagram.com/ktpunc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue hover:underline"
                >
                  @ktpunc
                </a>
                {" "}for recruitment updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
