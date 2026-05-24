import { Reveal } from "../ui/Reveal";

const workflow = [
  ["Brief", "Find the point"],
  ["Sketch", "Map the feeling"],
  ["Build", "Prototype fast"],
  ["Tune", "Polish the motion"],
  ["Ship", "Make it resilient"],
];

export function Workflow() {
  return (
    <section id="process" className="border-b border-[#111111] bg-[#7ae7ff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <Reveal>
            <p className="section-kicker">Process</p>
            <h2 className="section-title">From loose idea to lively screen.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-base font-semibold leading-relaxed sm:text-lg">
              The rhythm is simple: understand the goal, sketch the character, build the real interface, and polish until
              every state feels intentional.
            </p>
          </Reveal>
        </div>

        <div className="process-track mt-12">
          {workflow.map(([title, subtitle], index) => (
            <Reveal key={title} className="process-step" delay={index * 0.06}>
              <span className="text-sm font-black uppercase">0{index + 1}</span>
              <h3 className="mt-8 text-4xl font-black uppercase leading-none">{title}</h3>
              <p className="mt-3 text-base font-bold">{subtitle}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
