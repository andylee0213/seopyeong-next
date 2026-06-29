// filename: src/app/works/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { works, getWorkBySlug } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return { title: `법무법인 서평 :: ${work.subtitle}` };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <div className="grid-container">
      <hr className="section-hr" />
      <h1 className="part-title">업무분야</h1>

      {/* 헤더 배경 이미지 */}
      <div
        className="work-hero"
        style={{ backgroundImage: `url('/images/${work.image}')` }}
      >
        <div className="work-hero-title">
          <h2 style={{ whiteSpace: "pre-line" }}>{work.title}</h2>
        </div>
      </div>

      {/* 내용 */}
      <div className="work-detail-wrap">
        <div className="work-detail-box">
          <h4>{work.subtitle}</h4>
          <p className="work-detail-content">{work.content}</p>
        </div>
      </div>

      <Link href="/works" className="work-back-btn">
        목록으로
      </Link>
    </div>
  );
}
