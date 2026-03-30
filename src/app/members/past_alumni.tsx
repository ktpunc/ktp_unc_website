const alumniData: Record<string, string[]> = {
  Founders: ["Ella Jeungst", "Hannah Chisholm", "Josh Redman", "Manas Takalpati", "Manivannan Senthil", "Maya Agnihotri", "Rhea Bhagia", "Rohitha Madduluri"],
  Alpha:    ["Beliz Yilmaz", "Ben Woodman", "Brendan O'Malley", "Cole Hoffman", "John Poltorak", "Kavish Gandhi", "Mia Uitz", "Olivia Wen", "Raahil Madhiwala", "Savitra Kulkarni", "Simon Low", "Yulim Kim"],
  Beta:     ["Alan Chen", "Andi Carnell", "Aryaman Agrawal", "Cole Henry", "David Lu", "Ethan Rayala", "Kyle Sorensen", "Manisha Nallakatla", "Mikaela Sherry", "Naman Kejriwal", "Neha Patel", "Raghuvara Padma", "Raheel Qamar", "Ronit Ray", "Sarika Kasuganti"],
  Gamma:    ["Alison Polito", "Andrew Knotts", "Arya Rao", "Ashwin Senthil", "Davis Atwell", "Jackson Reed", "Kirsten Allen", "Lam Ngo", "Milen Patel", "Sarayu Yenumula", "Srinidhi Ekkurthi", "Tanvi Pulipaka", "Tara Ghorpadkar"],
  Delta:    ["Ananya Garg", "Ahmadou Bamba Diouf", "Alec Pugh", "Haley Brosnahan", "Justin Rivera", "Katherine Katsoudas", "Mark Maio", "Mateo Correa Risso", "Nikhil Abraham", "Sai Kaza", "Sana Goyal", "Tyler Roth"],
  Epsilon:  ["Jake Rogers", "Ryan Lutz"],
};

export default function AlumniList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(alumniData).map(([group, names]) => (
        <div key={group} className="card card-accent p-6">
          <h2 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-blue text-sm" />
            {group} Class
          </h2>
          <ul className="space-y-1.5">
            {names.map((name) => (
              <li key={name} className="text-slate-500 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue flex-shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
