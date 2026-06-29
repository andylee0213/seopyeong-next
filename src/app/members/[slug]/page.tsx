// filename: src/app/members/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { members, getMemberBySlug } from "@/data/members";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return {};
  return { title: `법무법인 서평 :: ${member.name} 변호사` };
}

export default async function MemberDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  return (
    <div className="grid-container">
      <hr className="section-hr" />
      <h1 className="part-title">구성원</h1>

      <div className="member-detail-wrap">
        {/* 사진 + 연락처 */}
        <div className="member-detail-img-container">
          <div className="member-detail-img">
            <Image
              src={`/images/${member.detailImage}`}
              alt={member.name}
              width={220}
              height={290}
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <div className="member-contact-box">
            <div className="member-contact-row">
              <Image src="/images/white_icon_phone.png" alt="전화" width={16} height={16} />
              <span>{member.tel}</span>
            </div>
            {member.email && (
              <div className="member-contact-row">
                <Image src="/images/white_icon_mail.png" alt="이메일" width={16} height={16} />
                <span>{member.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* 프로필 내용 */}
        <div className="member-detail-contents">
          <hr className="members-divider" />
          <div className="member-name-box">
            <span className="member-lawyer-position">
              {member.isRepresentative ? "대표 변호사" : "변호사"}
            </span>
            <span className="member-lawyer-name">{member.name}</span>
          </div>
          {member.intro && <p className="member-intro">{member.intro}</p>}

          <hr className="members-divider" />

          {/* 학력 */}
          {member.education.length > 0 && (
            <div className="profile-section">
              <div className="profile-section-header">
                <span className="profile-section-title">학력</span>
              </div>
              {member.education.map((e, i) => (
                <div key={i} className="profile-row">
                  <span className="profile-year">{e.year}</span>
                  <span className="profile-content">{e.content}</span>
                </div>
              ))}
            </div>
          )}

          {/* 경력 */}
          {member.career.length > 0 && (
            <div className="profile-section" style={{ marginTop: "16px" }}>
              <div className="profile-section-header">
                <span className="profile-section-title">경력</span>
              </div>
              {member.career.map((c, i) => (
                <div key={i} className="profile-row">
                  <span className="profile-year">{c.year}</span>
                  <span className="profile-content">{c.content}</span>
                </div>
              ))}
            </div>
          )}

          {/* 활동 */}
          {member.activities.length > 0 && (
            <div className="profile-section" style={{ marginTop: "16px" }}>
              <div className="profile-section-header">
                <span className="profile-section-title">활동</span>
              </div>
              {member.activities.map((a, i) => (
                <div key={i} className="profile-row">
                  <span className="profile-year">{a.year}</span>
                  <span className="profile-content">{a.content}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <Link href="/members" className="work-back-btn">
          목록으로
        </Link>
      </div>
    </div>
  );
}
