import { Reveal } from "../ui/Reveal";

const timeline = [
  {
    period: "Now",
    title: "Creative Front-End",
    body: "Designing crisp interfaces and building them with performance, motion, and accessibility in the same conversation.",
  },
  {
    period: "Craft",
    title: "Interactive Systems",
    body: "Turning static layouts into memorable experiences with scroll choreography, tactile states, and clean component logic.",
  },
  {
    period: "Focus",
    title: "Product Storytelling",
    body: "Helping ideas feel concrete through structure, rhythm, copy, and UI patterns that make decisions easy.",
  },
];

export function Experience() {
  return (
    <section id="story" className="border-b border-[#111111] bg-[#111111] px-4 py-16 text-[#f7f4ea] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1fr]">
        <Reveal className="lg:sticky lg:top-8 lg:self-start">
          <div>
            <p className="section-kicker section-kicker-dark">Experience</p>
            <h2 className="section-title text-[#f7f4ea]">A builder's story in motion.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#ded8c8]">
              The site is structured so your real biography can drop in cleanly: current focus, signature strengths, and
              the proof points that matter.
            </p>
          </div>
        </Reveal>
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="grid gap-5 border border-[#f7f4ea] bg-[#181818] p-5 sm:grid-cols-[120px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center border border-[#f7f4ea] bg-[#d7ff44] text-xl font-black text-[#111111]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-[#7ae7ff]">{item.period}</p>
                  <h3 className="mt-2 text-3xl font-black uppercase leading-none">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#ded8c8]">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
