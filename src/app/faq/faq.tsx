"use client";

import { useState } from 'react';

const faqData = [
    {
        question: "Who can apply to KTP?",
        answer: "Everyone is encouraged to apply — we love to see applicants from all disciplines! Our sole requirement is that you have at least 2 semesters left of school after the semester in which you apply."
    },
    {
        question: "What is KTP looking for?",
        answer: "There’s no cookie cutter “ideal” candidate — if there were, Kappa Theta Pi wouldn’t be the multi-talented, interdisciplinary organization that it is! In our experience, the qualities you’re looking for are often what we’d love to have in new members. In the end, we are an org united by our love for technology, and people who are truly passionate about tech are the ones who usually fit in the best."
    },
    {
        question: "How would I benefit from KTP?",
        answer: "KTP offers a supportive community of undergraduates who are all passionate about technology! Among other things, we offer mentoring in areas such as career advising, interview prep, resume development, and coursework. Additionally, we have current members and alumni working everywhere from the brightest startups to the tech giants of the corporate world. We believe that networking is far more than just professionalism—it's a process built on friendship, trust, and memberhood."
    },
    {
        question: "What do I need to major in to be a member?",
        answer: "Anything! While our members predominantly study Computer Science, we have members studying Philosophy, Business, Environmental Science, Statistics, Information Science, Data Science, Economics, and more!"
    },
    {
        question: "Is there a minimum GPA requirement?",
        answer: "Yes! You must have a minimum 2.5 cumulative GPA to be eligible for recruitment."
    },
    {
        question: "What is the process for recruitment?",
        answer: "We have 2 stages - informal and formal recruitment. Informal recruitment is open to everyone, and this is a great opportunity to meet our members in a relaxed and casual setting. Formal recruitment is invite-only, and this is a more structured and selective process where you can experience our organization in a detailed and comprehensive way."
    },
    {
        question: "What if I can't attend all of the informal recruitment events?",
        answer: "We're more than happy to work with anybody who's interested in joining. Please reach out to our Director of Membership, Nithya, to discuss how we can still make recruitment possible for you."
    },
    {
        question: "I got a bid! How much of a time commitment is the New Member Education process?",
        answer: "As with all campus organizations, what you get out of the organization depends on what you put into it. We believe that our New Member Education process isn’t strenuous and could be accommodated by most schedules. It is equivalent to that of a 3-credit hour course."
    },
    {
        question: "I went through recruitment previously but didn’t receive a bid. Can I apply again?",
        answer: "Yes! In fact, we strongly encourage people who didn’t receive a bid their first (or second) time to apply again. Persistence can lead to success in future attempts."
    },
    {
        question: "What if I'm part of or rushing another pre-professional organization?",
        answer: "We encourage you to join only one pre-professional organization to ensure manageable time commitments. However, we welcome everyone to rush regardless, and have several members that are part of multiple pre-professional organizations. We provide an opportunity on our application to indicate that you’re rushing another pre-professional organization so that we can help you find the best fit."
    },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-repeat"
      style={{
        backgroundImage: `url('image/FAQ.svg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-black mb-8 pt-10">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto mt-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-6 rounded-lg shadow-lg"
          >
            <button
              onClick={() => handleToggle(index)}
              className={`w-full text-left py-4 px-6 focus:outline-none ${
                openIndex === index ? "bg-babyBlue" : "bg-ruddyBlue"
              } hover:bg-babyBlue ${
                openIndex === index ? "rounded-t-lg" : "rounded-lg"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="py-4 px-6 bg-white rounded-b-lg">
                <p className="text-lg">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;