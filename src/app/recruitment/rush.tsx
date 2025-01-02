import React from "react";

const Schedule = () => {
  const eventsTBD = [ { /*
  { event: "Information Session", date: "Jan. 14th @ 7:30 PM", location: "Sitterson 014" },
  { event: "DEI Event", date: "Jan. 16th @ 7:00 PM", location: "Sitterson 014" },
  { event: "Speed Dating", date: "Jan. 21st @ 7:30 PM", location: "Sitterson 014" },
  { event: "Hot Chocolate", date: "Jan. 22th @ 7:00 PM", location: "Pit" },
  { event: "Game Night", date: "Jan. 23rd @ 7:30 PM", location: "Sitterson 014" },
*/},
  ];

  const events = [
  {event: "TBD", date: "TBD", location: "TBD"},
  ];

  return (
    <div className="bg-babyBlue min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-md mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Spring 2025 Recruitment</h1>
          <p className="text-xl text-center">
            Any UNC undergraduate who has at least two semesters remaining, with an interest in technology, is welcome to join Kappa Theta Pi. {/* Make sure to complete the application by [deadline date]. */}
          </p>
        </div>
        
        {/* Responsive Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="bg-white border border-gray-800 mx-auto">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2 border-l-2">Event</th>
                <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2">Date</th>
                <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="text-center">
                  <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl border-l-2">{event.event}</td>
                  <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl">{event.date}</td>
                  <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simplified Card View for Phone */}
        <div className="sm:hidden space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-800 p-4 text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{event.event}</h2>
              <p className="text-lg">{event.date}</p>
              <p className="text-lg">{event.location}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://bit.ly/ktpSpringRecruitment25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-ruddyBlue hover:underline"
          >
            Register Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schedule;