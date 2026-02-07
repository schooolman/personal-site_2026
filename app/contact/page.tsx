import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jake Schoolmeesters — Senior Front End Developer based in Chicago, IL.",
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jake-schoolmeesters/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/schooolman",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/jake.school",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
        <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4.4 6.7.9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3.5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 437.8c17.6 15.3 46.7 43.4 109.3 43.4h.4c19.4 0 37.3-5.4 53.8-14.5 16.5 9.1 34.4 14.5 53.8 14.5h.4c62.6 0 91.7-28.1 109.3-43.4 109.4-95 26-129.2-67.9-143.2-3.4-.4-6.7-.9-10-1.4 3.3.5 6.6.9 10 1.4 64.1 7.1 133.7-15.1 153.2-80.7C570.9 194 576 75.4 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-black border-t-4 border-white">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-xl">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-6 hover:border-neon-lime transition-all duration-300">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neon-lime mb-2">
                Email
              </h2>
              <a
                href="mailto:j.schoolmee@gmail.com"
                className="text-base sm:text-xl text-white hover:text-electric-blue transition-colors font-bold break-all sm:break-normal"
              >
                j.schoolmee@gmail.com
              </a>
            </div>

            <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-6 hover:border-neon-lime transition-all duration-300">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neon-lime mb-2">
                Location
              </h2>
              <p className="text-base sm:text-xl text-white font-bold">Chicago, IL</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-6 hover:border-neon-lime transition-all duration-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neon-lime mb-4">
              Find Me Online
            </h2>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-electric-blue transition-all duration-300 group"
                >
                  <span className="text-white/60 group-hover:text-neon-lime transition-all duration-300">
                    {link.icon}
                  </span>
                  <span className="text-lg font-bold">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
