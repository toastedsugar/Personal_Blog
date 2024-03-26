/** Base styles for the card.
 * Gives each card a glassmorphism effect per https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css
 *
 */

export default function GlassWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="isolate h-full w-full bg-black/10 dark:bg-white/10">
      {children}
    </section>
  );
}
