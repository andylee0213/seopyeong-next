// filename: src/app/about/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "법무법인 서평 :: ABOUT" };

export default function AboutPage() {
  return (
    <>
      <div className="about-background">
        <div className="grid-container">
          <div className="about-line-container">
            <hr className="about_title_hr" />
          </div>
          <h1 className="about-title">대표인사</h1>

          <div className="about-wrapper">
            <div className="about-greet-container">
              <hr className="about-top-line" />

              <div className="about-logo">
                <Image src="/images/logo_seopyeong.png" alt="법무법인 서평" width={150} height={40} />
              </div>

              <div className="about-greet-contens">
                <div className="about-greet-title">
                  <div>안녕하세요.</div>
                  <div>
                    <span className="bold">법무법인 유한 &apos;서평&apos;</span>입니다.
                  </div>
                </div>

                <div className="about-greet-detail">
                  저희 법무법인 유한 서평은 든든한 법조경력, 탄탄한 실력, 그리고 따듯한 마음을 지닌 열 명의 드림팀 변호사로 구성된 법무법인입니다. 오랜 경험에서 나온 견고한 법 논리를 구사하는 경력 변호사들과 패기와 적극성으로 무장된 젊은 변호사들이 보다 탁월한 법률 자문을 받고 싶어 하시는 분들에게 필요한 최상의 서비스를 제공하고 있다는 자부심을 가지고 있습니다.
                  <br />
                  <br />
                  <p>1. 정확한 법률 지식으로 법인이나 개인의 재산을 보호해 줄 뿐 아니라 더욱 향상 증강 시킬 수 있는 법률 서비스</p>
                  <p>2. 예상치 못한 억울하거나 부적절한 상황에 처하여 정신적 물질적 피해를 당하였을 때 대처할 수 있는 법률적 서비스</p>
                  <p>3. 예기치 않은 실수나 일시적 잘못으로 인하여 일어난 상황에 대한 법률적 서비스</p>
                  <p>4. 어쩔 수 없는 상황에서 타인에게 피해를 배상해 주어야 할 때 최소한의 법적 제재를 받을 수 있는 법률 서비스</p>
                  <br />
                  등의 다양한 법률 서비스를 제공하고 있습니다.
                  <br />
                  <br />
                  저희 법무법인은 고객의 상황에 특화된 법률서비스를 제공함으로써, 사회적으로는 법적 정의의 실현에 앞장서면서 고객들이 필요 이상의 불이익을 당하지 않고 각종 법률 분쟁을 해결할 수 있도록 최선을 다하고 있습니다. 가장 최선의 법률서비스를 받았다는 만족감을 얻을 수 있도록 하는 것이 저희 임직원 들 모두의 목표입니다.
                  <br />
                  <br />
                  고객 여러분들과 소통하면서 여러분들의 법률적 고통을 덜어줄 수 있기를 기대하면서 저희 법무법인 소개를 갈음합니다.
                  <br />
                  <br />
                  <div className="text-center">2017. 08. 08.</div>
                </div>

                <div className="about-greeter">
                  <span className="about-greet-positon">법무법인 유한 서평 대표변호사</span>
                  <span className="about-greet-name">이재순</span>
                  <span className="about-greet-positon">드림</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <hr className="about_introduce_title_hr" />
        <h1 className="part-title">서평소개</h1>

        <div className="about-introduce-wrapper">
          <Link href="/members" className="about_nth">
            <div className="about-introduce-container about-intro-member bg-image-center">
              <div className="about-introduce-title text-center about-introduce-title-two-line">
                <div>서평 가족들은 겸손한 자세로</div>
                <div>최상의 법률 서비스를 제공하겠습니다.</div>
              </div>
              <div className="about-introduce-subtitle about-introduce-subtitle-two-line text-center">
                구성원 보기
                <span className="subtilte-arrow">
                  <Image src="/images/arrow_right_white.png" alt="" width={8} height={14} />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/works" className="about_nth">
            <div className="about-introduce-container about-intro-work bg-image-center">
              <div className="about-introduce-title text-center about-introduce-title-two-line">
                <div>서평 가족들은 법률전문가로서</div>
                <div>어떤 어려움도 헤쳐나가겠습니다.</div>
              </div>
              <div className="about-introduce-subtitle about-introduce-subtitle-two-line text-center">
                업무분야 보기
                <span className="subtilte-arrow">
                  <Image src="/images/arrow_right_white.png" alt="" width={8} height={14} />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/contact" className="about_nth">
            <div className="about-introduce-container about-intro-contact bg-image-center">
              <div className="about-introduce-title text-center about-introduce-title-one-line">
                <div>서평 가족들은 항상 고객 여러분 곁에 있겠습니다.</div>
              </div>
              <div className="about-introduce-subtitle about-introduce-subtitle-one-line text-center">
                상담/문의
                <span className="subtilte-arrow">
                  <Image src="/images/arrow_right_white.png" alt="" width={8} height={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
