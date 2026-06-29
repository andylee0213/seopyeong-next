// filename: src/app/members/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { memberSections } from "@/data/members";

export const metadata: Metadata = { title: "법무법인 서평 :: MEMBERS" };

export default function MembersPage() {
  return (
    <div className="grid-container">
      {memberSections.map((section) => (
        <section key={section.title}>
          <hr className="section-hr" />
          <h1 className="part-title">{section.title}</h1>
          <div className="members-grid">
            {section.members.map((m) =>
              m.slug ? (
                <Link key={m.slug + m.name} href={`/members/${m.slug}`} className="member-card">
                  <figure>
                    <Image
                      src={`/images/${m.listImage}`}
                      alt={m.name}
                      width={316}
                      height={400}
                    />
                    <figcaption>
                      <span className="member-role">{m.role}</span>
                      <span className="member-name">{m.name}</span>
                    </figcaption>
                  </figure>
                </Link>
              ) : (
                <div key={m.name} className="member-card member-card-no-link">
                  <figure>
                    <Image
                      src={`/images/${m.listImage}`}
                      alt={m.name}
                      width={316}
                      height={400}
                    />
                    <figcaption>
                      <span className="member-role">{m.role}</span>
                      <span className="member-name">{m.name}</span>
                    </figcaption>
                  </figure>
                </div>
              )
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
