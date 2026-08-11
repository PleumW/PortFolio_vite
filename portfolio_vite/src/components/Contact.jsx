import { useState } from 'react';

function Contact() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const contactCards = [
    {
      id: "location",
      title: "Location / Address",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      mainText: "Prince of Songkla University (PSU)",
      subText: "Suratthani Campus",
      actionLabel: "Open Map",
      action: () => window.open("https://maps.google.com/?q=Prince+of+Songkla+University+Surat+Thani+Campus", "_blank")
    },
    {
      id: "email",
      title: "Email Addresses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      mainText: "pleumwisarat@gmail.com",
      subText: "6640011034@psu.ac.th",
      actionLabel: copiedText === "email" ? "Copied!" : "Copy Email",
      action: () => handleCopy("pleumwisarat@gmail.com", "email")
    },
    {
      id: "phone",
      title: "Telephone",
      subText: "Phone",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      mainText: "(+66) 80-640-6710",
      actionLabel: copiedText === "phone" ? "Copied!" : "Copy Number",
      action: () => handleCopy("0806406710", "phone")
    },
    {
      id: "social",
      title: "Social & Professional",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      ),
      mainText: "GitHub / PleumW",
      subText: "Github",
      actionLabel: "Visit GitHub",
      action: () => window.open("https://github.com/PleumW", "_blank")
    }
  ];

  return (
    <section id="contact" className="pb-16 md:pb-24 bg-[#e8e7e7] text-black relative overflow-hidden">

      {/* Top dividing line positioned right at the top 0px edge/intersection between PageThree (#F5F5F5) and Contact (#e8e7e7) */}
      <div className="w-full h-[2px] bg-black"></div>

      <div className="pt-16 md:pt-20 max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-black">
            Contect
          </h2>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 border-2 border-black shadow-xs flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center mb-4 transition-colors border border-black">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors mb-2">{card.title}</h3>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-100 transition-colors break-words">{card.mainText}</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors mt-1">{card.subText}</p>
              </div>

              <button
                onClick={card.action}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-black text-white group-hover:bg-white group-hover:text-black text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border-2 border-black cursor-pointer"
              >
                <span>{card.actionLabel}</span>
                <span className="text-xs">➚</span>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t-2 border-black text-center text-xs text-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold">Punnapob Wisarat </p>
          <div className="flex items-center gap-6 font-semibold">
            <a href="https://github.com/PleumW" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:text-gray-600 transition-colors no-underline">
              GitHub Profile
            </a>
            <a href="mailto:lovepleum123@gmail.com" className="text-black font-bold hover:text-gray-600 transition-colors no-underline">
              Email
            </a>

          </div>
        </footer>

      </div>
    </section>
  );
}

export default Contact;