/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김태희",
    father: "김병균",
    mother: "신미자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "문정원",
    father: "문정태",
    mother: "김원주",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-12",
    time: "15:00",
    venue: "더화이트베일 3층 V홀",
    hall: "V홀 3층",
    address: "서울특별시  서초중앙로 14",
    tel: "02-3474-5000",
    mapLinks: {
      kakao: "https://map.kakao.com/",
      naver: "https://map.naver.com/"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "퀘스트 알림",
    content: "서로 다른 길을 걸어온 태쁘와 져너니가\n결혼이라는 최고 난이도 퀘스트를 시작하려 합니다.\n\n저희의 퀘스트 시작을\n축하해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "LOVE STORY",
    content: "신랑 김태희\n1998.02.27.\nISTJ\n꼬마신랑\n김중사\n\n"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "🤵🏻태쁘 💘 👰🏻‍♀️져너니 결혼합니다",
    description: "2026년 12월 12일, 소중한 분들을 초대합니다."
  }
};
