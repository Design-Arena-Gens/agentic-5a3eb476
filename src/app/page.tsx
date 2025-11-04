import Image from "next/image";

const storySections = [
  {
    title: "Invocation",
    excerpt:
      "When the town bell tolled thirteen times, the congregation fell silent. No one had ever heard the thirteenth peal—not in the two centuries since the chapel was raised over the marsh. I was there, hidden in the loft, watching the elders whisper over the torn psalter.",
    body: [
      "The pages were damp, ink seeping into the pulpy paper like veins of something still alive. Psalm sixty-six should have been printed on them, but the characters moved when I blinked, sliding into unfamiliar sigils that made my teeth ache when I tried to read them aloud.",
      "Pastor Elias hissed that it was only mildew. Yet his fingernails left blood on the margin when he tried to smooth the crumpled page. Outside, the wind pressed against the stained glass, forming faces that did not match the saints.",
      "Then the bell tolled again—a thirteenth trembling note that felt like a nail driven through the rafters. Candles guttered. Someone began to weep. I began to write."
    ]
  },
  {
    title: "The Choirless Hymn",
    excerpt:
      "The following nights, the choir loft remained locked. Still, I heard voices from inside—low, looping harmonies that rose whenever the river mist touched the chapel steps.",
    body: [
      "I pressed my ear against the barred door and heard the choir sing a melody I had never learned. Each verse ended on the same syllable, a wet click that settled behind my ribs. Sleep would not come; when I closed my eyes I fretted the rhythm with my fingertips until my skin split.",
      "On the seventh night, the mist rolled inside the sanctuary. It dragged the smell of graves and winter lilies, covering the pews, pooling at the altar. From within it, I saw silhouettes wearing robes stitched with moonlight—a congregation that did not belong to any living ledger.",
      "They raised their heads toward me. Their mouths opened wider than mouths should. The hymn grew louder, and the notes translated into words my mind understood, though no language I knew could explain them: come finish the psalm."
    ]
  },
  {
    title: "Thirteenth Psalm",
    excerpt:
      "I carried the psalter to the bell tower before the final service. Thunder shook the steeple. Beneath the downpour, I heard scratching within the walls.",
    body: [
      "There was no ladder—only the narrow spiral, slick with rain that somehow leaked through stone. I climbed anyway, keeping the book pressed to my chest. The bell-rope twitched, pulling itself taut, though no wind should have reached it.",
      "Halfway up, the steps flattened into a landing I had never seen. The choir stood there, translucent, mouths half-open, eyes empty sockets rimmed with frost. The eldest among them offered a candled hand. I placed the psalter on his palm. The flame burned green.",
      "He sang first: ‘When the shepherd forgets his flock, the flock will carve a shepherd.’ The others followed, and the tower expanded, walls stretching like lungs pulling their first breath. My own voice joined without my consent, the syllables tearing grooves into my tongue. The psalm was a bargain, and my acceptance was written in iron."
    ]
  },
  {
    title: "Aftermath",
    excerpt:
      "Morning never broke. The sky held the bruise-colored twilight of a sun refused. Still, the townsfolk gathered, drawn by the bell’s relentless toll.",
    body: [
      "They found me at the altar, draped in robes too heavy for any living shoulders. The pews were filled with the choir, breathing in sync with me. Pastor Elias knelt, his eyes hollow, his gaze fixed on the psalter that now glowed with a dull ember light.",
      "I spoke the final verse of the thirteenth psalm. My voice echoed from the rafters, from the crypt, from the well outside. The congregation answered in unison, surrendering their names. New ones bloomed upon them, written in a script that roamed like a living thing.",
      "In the vestry, the old ledger closed itself. Every future birth was replaced with a date beneath my handwriting. The town would not fade into history—it would be remembered in the cold breath between heartbeats, a prayer that cannot finish, a psalm that cannot end."
    ]
  }
];

const fragments = [
  "The mist tastes of lilies and rust.",
  "Bell ropes move when no hands touch them.",
  "The ledger writes names that do not belong to the living.",
  "Do not count the tolls. Do not listen anyway.",
  "When the thirteenth verse begins, close your mouth or lose your name."
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-abyss-900 via-black to-abyss-900" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 mix-blend-screen">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-abyss-950/80 backdrop-blur-[1px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24">
        <div className="absolute inset-8 -z-10 rounded-3xl border border-red-900/30 bg-abyss-900/40 shadow-spectral blur-sm" />
        <header className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-500/80">
            Original Horror Story
          </p>
          <h1 className="font-display text-4xl uppercase tracking-widest sm:text-6xl">
            The Thirteenth Psalm
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-300">
            The night the chapel bell tolled thirteen times, the town learned a
            psalm that had waited two centuries to be sung. Read the testimony
            of the sole remaining voice.
          </p>
        </header>
        <div className="mt-12 grid w-full gap-8 md:grid-cols-2">
          {fragments.map((fragment) => (
            <div
              key={fragment}
              className="rounded-xl border border-red-900/40 bg-abyss-900/60 p-6 shadow-lg shadow-red-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-spectral"
            >
              <p className="text-sm tracking-wide text-neutral-300/90">
                {fragment}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl space-y-24 px-6 pb-32">
        {storySections.map((section, index) => (
          <article key={section.title} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-red-500/80">
                <span className="h-px flex-1 bg-red-500/50" />
                <span className="font-display text-xs uppercase tracking-[0.4em]">
                  Chapter {index + 1}
                </span>
                <span className="h-px flex-1 bg-red-500/50" />
              </div>
              <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-neutral-100">
                {section.title}
              </h2>
            </div>
            <p className="text-lg text-neutral-300">{section.excerpt}</p>
            <div className="space-y-5 text-base leading-relaxed text-neutral-200">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-neutral-300/95">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="relative border-t border-red-900/40 bg-abyss-900/80 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-red-500/70">
            The bell will toll again
          </p>
          <p className="text-neutral-300/90">
            Keep the psalm unspoken. If you hear a thirteenth note tonight,
            leave the town ledger closed.
          </p>
        </div>
      </footer>
    </main>
  );
}
