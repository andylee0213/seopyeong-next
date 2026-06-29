// filename: src/app/works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/data/works";

export const metadata: Metadata = { title: "법무법인 서평 :: WORKS" };

export default function WorksPage() {
  return (
    <div className="grid-container">
      <hr className="section-hr" />
      <h1 className="part-title">업무분야</h1>
      <div className="works-grid">
        {works.map((work) => (
          <Link key={work.slug} href={`/works/${work.slug}`}>
            <div
              className="work-card"
              style={{ backgroundImage: `url('/images/${work.image}')` }}
            >
              <h3 style={{ whiteSpace: "pre-line" }}>{work.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
