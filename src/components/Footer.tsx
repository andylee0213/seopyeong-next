// filename: src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container grid-container">
        <div className="footer-detail">
          <address>
            <p>법인명: 법무법인 유한 서평 | 대표자: 이재순 | 사업자등록번호: 143-86-00785</p>
            <p>주소: 서울 서초구 효령로60길 23-4, 3층~4층 (서초동,형일빌딩) | TEL: 02.6271.4300 | FAX: 02.6271.4329</p>
            <p>강북분사무소 주소: 서울 중구 장충단로 247,1605호 (을지로6가,굿모닝시티쇼핑몰) | TEL: 02.6271.5600 | FAX: 02.6271.5214</p>
            <p>일산분사무소 주소: 경기도 일산동구 장백로 208, 601호 (성암빌딩) | TEL: 031.902.2100 | FAX: 031.902.2102</p>
          </address>
          <Link href="/disclaimer" className="disclaimer-link">
            <p>면책공고</p>
          </Link>
          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} Seopyeong all right reserved.
          </p>
        </div>
        <div className="footer-logo">
          <Link href="/">
            <Image src="/images/logo_seopyeong.png" alt="법무법인 서평" width={160} height={60} />
          </Link>
          <div className="office-mail">
            <a href="https://login.microsoftonline.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/btn_enter.png" alt="오피스 메일" width={80} height={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
