import React from "react";

const Schedule = () => {
  const events = [
    { event: "Information Session", date: "Jan. 14th @ 7:30 PM", location: "Sitterson 014" },
    { event: "DEI Event", date: "Jan. 16th @ 7:00 PM", location: "Sitterson 014" },
    { event: "Speed Dating", date: "Jan. 21st @ 7:30 PM", location: "Sitterson 014" },
    { event: "Hot Chocolate", date: "Jan. 22th @ 7:00 PM", location: "Pit" },
    { event: "Game Night", date: "Jan. 23rd @ 7:30 PM", location: "Sitterson 014" },
  ];

  return (
    <div className="bg-babyBlue min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-800 shadow-md mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 underline">Spring 2025 Recruitment</h1>
          <p className="text-xl text-center">
            Any UNC undergraduate who has at least two semesters remaining, with an interest in technology, is welcome to join Kappa Theta Pi. Make sure to complete the application by [deadline date].
          </p>
        </div>
        <table className="min-w-full bg-white border border-gray-800">
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