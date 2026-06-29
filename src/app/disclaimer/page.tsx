// filename: src/app/disclaimer/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "법무법인 서평 :: 면책공고" };

export default function DisclaimerPage() {
  return (
    <div className="grid-container">
      <hr className="section-hr" />
      <h1 className="part-title">면책공고</h1>
      <div style={{ padding: "30px 0 80px", lineHeight: "28px", fontSize: "14px", color: "#555" }}>
        본 웹사이트에 실려 있는 내용들은 법인의 소개 혹은 정보제공의 목적으로 작성된 것으로서, 법률적 자문이나 해석을 위해 제공된 것이 아닙니다.
        <br />
        본 웹사이트에 실려 있는 정보로 인하여 문제가 발생하거나 손해를 입게 되어도 본 법무법인은 그 결과에 대해 어떠한 법적 책임도 지지 않습니다.
        <br />
        구체적인 사안이나 사건에 관한 부분은 웹사이트에 실려 있는 내용에 근거하여 진행하기 보다 본 법무법인에게 연락하여 법적 자문을 구하시기 바랍니다.
      </div>
    </div>
  );
}
