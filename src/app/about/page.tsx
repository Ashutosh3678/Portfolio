import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        ABOUT
      </p>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A longer story about how I got into Tech, my goals, and what I&apos;m currently learning.
        </p>
      </div>
      <Card className="mt-8 max-w-2xl p-5">
        <h4 className="text-2xl font-semibold tracking-normal text-foreground">
          How it started
        </h4>
        <br />
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            My curiosity for computers started early. I was always fascinated by
            how software worked, how websites responded to a click, and how a
            few lines of code could turn into something real on screen. That
            curiosity slowly turned into a habit of experimenting, breaking
            things, and figuring out how to fix them.
          </p>

          <p>
            I took that interest seriously when I joined MLR Institute of
            Technology for my B.Tech in Computer Science (Data Science). Once I
            started writing code properly, I loved the feeling of building
            something from scratch and watching it work. Over time, it stopped
            being only about how things looked. I started caring more about
            what was happening behind the scenes: how data moves, how APIs are
            structured, why something becomes slow, and how systems can be made
            faster, cleaner, and more reliable.
          </p>

          <p>
            During this phase, I built dozens of projects. Most of them broke.
            A few actually worked, like my RFP Management Automation System,
            which uses retrieval-augmented generation to analyze proposal
            documents, and a Deepfake Detection System built with CNN-based
            deep learning. Every bug, failed build, and late-night debugging
            session helped me understand software a little better.
          </p>

          <p>
            Along the way, I also tested myself outside the classroom. Winning
            the Zignasa National Level Hackathon and finishing as runner-up at
            a Project Expo taught me how to build under pressure, communicate
            ideas clearly, and turn vague problems into concrete solutions.
          </p>

          <p>
            That curiosity never really went away. I still find myself
            experimenting late at night, reading about new technologies,
            breaking things to understand them better, and thinking about what
            to build next. There is always something new to learn, something
            better to create, and something I do not fully understand yet.
            That is what keeps me going.
          </p>
        </div>
      </Card>
      <br />
      <Card className="mt-8 max-w-2xl p-5">
        <h4 className="text-2xl font-semibold tracking-normal text-foreground">
          Currently learning
        </h4>
        <br />
        <div className="mt-4 space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              Right now, I’m working as a Full-Stack Intern at OneInfo.AI,
              where I’m learning how production systems are actually built and
              maintained. I’ve been engineering asynchronous ingestion
              pipelines, designing GraphQL schemas and resolvers, optimizing
              MongoDB queries, and building wallet payout systems for creator
              stores.
            </p>

            <p>
              My current focus is on becoming stronger at backend
              infrastructure and system design: background job processing,
              queue-based architectures, caching, API performance, and how real
              applications are deployed, monitored, and kept reliable in
              production.
            </p>

            <p>
              I’m also deepening my knowledge of machine learning and data
              science, since my degree specializes in it. I want to keep
              combining that with full-stack development to build intelligent,
              data-driven products.
            </p>

            <p>
              The goal is simple: become the kind of developer who can build
              the product, understand the system behind it, deploy it properly,
              debug it when it breaks, and keep improving it over time.
            </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "GraphQL",
            "MongoDB",
            "Queues",
            "Background Jobs",
            "API Performance",
            "System Design",
            "Docker",
            "AWS",
            "Machine Learning",
            "RAG",
            "LangChain",
            "Vector Databases",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
}
