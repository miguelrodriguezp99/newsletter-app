
import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";


export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#03040B] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>

      <main className="flex flex-col items-center justify-center p-10 min-h-screen">
        <div className="space-y-1">
          <h2 className="z-10 text-3xl font-bold text-center text-transparent 
        duration-1000 bg-white bg-clip-text cursor-default text-stroke 
        animate-title sm:text-5xl md:text-6xl whitespace-nowrap ">
            Join the waitlist for my
          </h2>
          <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000
        cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text
        bg-white bg-gradient-to-r from-purple-300 to-purple-800
        animate-fade-in-3">Newsletter</h1>
        </div>

        <NewsletterForm />
        <Socials />

      </main>
    </>
  );
}
