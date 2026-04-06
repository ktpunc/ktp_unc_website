const alumniData: Record<string, string[]> = {
  Founders: ["Ella Jeungst", "Hannah Chisholm", "Josh Redman", "Manas Takalpati", "Manivannan Senthil", "Maya Agnihotri", "Rhea Bhagia", "Rohitha Madduluri"],
  Alpha: ["Beliz Yilmaz", "Ben Woodman", "Brendan O'Malley", "Cole Hoffman", "John Poltorak", "Kavish Gandhi", "Mia Uitz", "Olivia Wen", "Raahil Madhiwala", "Savitra Kulkarni", "Simon Low", "Yulim Kim"],
  Beta: ["Alan Chen", "Andi Carnell", "Aryaman Agrawal", "Cole Henry", "David Lu", "Ethan Rayala", "Kyle Sorensen", "Manisha Nallakatla", "Mikaela Sherry", "Naman Kejriwal", "Neha Patel", "Raghuvara Padma", "Raheel Qamar", "Ronit Ray", "Sarika Kasuganti"],
  Gamma: ["Alison Polito", "Andrew Knotts", "Arya Rao", "Ashwin Senthil", "Davis Atwell", "Jackson Reed", "Kirsten Allen", "Lam Ngo", "Milen Patel", "Sarayu Yenumula", "Srinidhi Ekkurthi", "Tanvi Pulipaka", "Tara Ghorpadkar"],
  Delta: ["Ananya Garg", "Ahmadou Bamba Diouf", "Alec Pugh", "Haley Brosnahan", "Justin Rivera", "Katherine Katsoudas", "Mark Maio", "Mateo Correa Risso", "Nikhil Abraham", "Sai Kaza", "Sana Goyal", "Tyler Roth"],
  Epsilon: ["Jake Rogers", "Ryan Lutz"],
};

const greekLetterMap: Record<string, string> = {
  Alpha: "α",
  Beta: "β",
  Gamma: "γ",
  Delta: "δ",
  Epsilon: "ε",
};

export default function AlumniList() {
  return (
    <section className="space-y-8">
      <div className="surface-hover-glow rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-card md:p-8">
        <span className="eyebrow">KTP Alumni Network</span>
        <h2 className="text-3xl font-black text-navy md:text-4xl">Past alumni</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          People from earlier classes who helped shape the chapter and are now spread across different teams, companies, and industries.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {Object.entries(alumniData).map(([group, names]) => (
          <div
            key={group}
            className="surface-hover-rail overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-card"
          >
            <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white shadow-sm">
                  <span className="text-lg font-semibold leading-none">
                    {greekLetterMap[group] ?? "κ"}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-navy">{group === "Founders" ? "Founders" : `${group} Class`}</h2>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {names.map((name) => (
                  <span
                    key={name}
                    className="surface-hover-chip rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
