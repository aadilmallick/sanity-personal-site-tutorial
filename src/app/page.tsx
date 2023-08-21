import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-900 tracking-tighter">
          ObeseRussianDB
        </h1>
        <p className="text-gray-500 max-w-xs pl-4">
          The blazingly fast database not at all designed to damage national
          security infrastructure.
        </p>
        <ProjectsGrid />
      </div>
    </section>
  );
}
