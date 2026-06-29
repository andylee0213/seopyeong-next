import type { Metadata } from "next";
import Image from "next/image";
import KakaoMapInit from "@/components/KakaoMapInit";

export const metadata: Metadata = { title: "법무법인 서평 :: CONTACT" };

interface OfficeInfo {
  id: string;
  mapId: string;
  title: string;
  road: string;
  lot: string;
  tel: string;
  fax: string;
  subway: string[];
  bus?: string[];
}

const offices: OfficeInfo[] = [
  {
    id: "main",
    mapId: "kakao-map-main",
    title: "오시는길",
    road: "서울 서초구 효령로60길 23-4, 3층~4층 (서초동,형일빌딩)",
    lot: "서울특별시 서초구 서초동 1444-14, 3층~4층 (형일빌딩)",
    tel: "02.6271.4300",
    fax: "02.6271.4329",
    subway: ["남부터미널역 3번 출구에서 도보 4분"],
    bus: ["간선 ) 461 / 641", "자선 ) 3420 / 4319", "마을 ) 서초11"],
  },
  {
    id: "gangbuk",
    mapId: "kakao-map-gangbuk",
    title: "강북 분사무소 오시는길",
    road: "서울 중구 장충단로 247,1605호 (을지로6가,굿모닝시티)",
    lot: "서울 중구 을지로6가 18-21, 1605호",
    tel: "02.6271.5600",
    fax: "02.6271.5214",
    subway: [
      "지하철 2호선,4호선.5호선 동대문역사문화공원역 14번출구",
      "굿모닝시티 쇼핑몰 2번 게이트로 들어와 승강기 이용",
    ],
  },
  {
    id: "ilsan",
    mapId: "kakao-map-ilsan",
    title: "일산 분사무소 오시는길",
    road: "경기도 일산동구 장백로 208, 601호 (성암빌딩)",
    lot: "경기도 일산동구 장항동 891-2, 601호 (성암빌딩)",
    tel: "031.902.2100",
    fax: "031.902.2102",
    subway: ["지하철 마두역 4번 출구에서 도보 2분"],
  },
];

export default function ContactPage() {
  return (
    <>
      <KakaoMapInit />
      {offices.map((office) => (
        <div key={office.id} className="grid-container" style={{ marginBottom: "60px" }}>
          <hr className="section-hr" />
          <h1 className="part-title">{office.title}</h1>

          <div id={office.mapId} className="content-map" />

          <div className="contact-wrap">
            {/* 주소 + 연락처 */}
            <div className="contact-info-box">
              <div className="address-title">주소안내</div>
              <hr className="contact-divider" />
              <div className="contact-row">
                <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                <span className="contact-label">도로명</span>
                <address className="contact-value" style={{ fontStyle: "normal" }}>
                  {office.road}
                </address>
              </div>
              <div className="contact-row">
                <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                <span className="contact-label">지번</span>
                <address className="contact-value" style={{ fontStyle: "normal" }}>
                  {office.lot}
                </address>
              </div>

              <div className="address-title" style={{ marginTop: "16px" }}>상담/문의</div>
              <hr className="contact-divider" />
              <div className="contact-row">
                <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                <span className="contact-label">TEL</span>
                <span className="contact-value">{office.tel}</span>
              </div>
              <div className="contact-row">
                <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                <span className="contact-label">FAX</span>
                <span className="contact-value">{office.fax}</span>
              </div>
            </div>

            {/* 교통 */}
            <div className="contact-info-box">
              <div className="address-title">교통안내</div>
              <hr className="contact-divider" />
              {office.bus && (
                <div className="contact-row">
                  <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                  <span className="contact-label">버스</span>
                  <div className="contact-value">
                    {office.bus.map((b, i) => (
                      <div key={i}>{b}</div>
                    ))}
                  </div>
                </div>
              )}
              <div className="contact-row">
                <Image src="/images/bar_contact.png" alt="" width={10} height={14} />
                <span className="contact-label">지하철</span>
                <div className="contact-value">
                  {office.subway.map((s, i) => (
                    <div key={i}>{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
