/** Base styles for the card.
 * Gives each card a glassmorphism effect per https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css
 * 
 */



export default function CardWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="isolate aspect-video w-96 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg ring-1 ring-black/5">
        {children}
      </section>
    );
  }
