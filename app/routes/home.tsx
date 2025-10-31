import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resume } from "react-dom/server";
import { resumes } from "./constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SmartResume" },
    { name: "description", content: "Smart Feedback For Resumes" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Get Instant AI Feedback on Your Resumes!</h1>
          <h2>Review your resumes and get AI powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
