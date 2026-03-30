const alumniData: Record<string, string[]> = {
  Founders: ["Ella Jeungst", "Hannah Chisholm", "Josh Redman", "Manas Takalpati", "Manivannan Senthil", "Maya Agnihotri", "Rhea Bhagia", "Rohitha Madduluri"],
  Alpha: ["Beliz Yilmaz", "Ben Woodman", "Brendan O'Malley", "Cole Hoffman", "John Poltorak", "Kavish Gandhi", "Mia Uitz", "Olivia Wen", "Raahil Madhiwala", "Savitra Kulkarni", "Simon Low", "Yulim Kim"],
  Beta: ["Alan Chen", "Andi Carnell", "Aryaman Agrawal", "Cole Henry", "David Lu", "Ethan Rayala", "Kyle Sorensen", "Manisha Nallakatla", "Mikaela Sherry", "Naman Kejriwal", "Neha Patel", "Raghuvara Padma", "Raheel Qamar", "Ronit Ray", "Sarika Kasuganti"],
  Gamma: ["Alison Polito", "Andrew Knotts", "Arya Rao", "Ashwin Senthil", "Davis Atwell", "Jackson Reed", "Kirsten Allen", "Lam Ngo", "Milen Patel", "Sarayu Yenumula", "Srinidhi Ekkurthi", "Tanvi Pulipaka", "Tara Ghorpadkar"],
  Delta: ["Ananya Garg", "Ahmadou Bamba Diouf", "Alec Pugh", "Haley Brosnahan", "Justin Rivera", "Katherine Katsoudas", "Mark Maio", "Mateo Correa Risso", "Nikhil Abraham", "Sai Kaza", "Sana Goyal", "Tyler Roth"],
  Epsilon: ["Jake Rogers", "Ryan Lutz"],
};

export default function AlumniList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Object.entries(alumniData).map(([group, names]) => (
        <div key={group} className="glass glass-hover rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-graduation-cap text-blue-400 text-sm" />
            </div>
            <h2 className="text-white font-bold text-lg">{group} Class</h2>
          </div>
          <ul className="space-y-2">
            {names.map((name) => (
              <li key={name} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400/50 flex-shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
