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
      kakao: "https://kko.to/wAi_Uzoyg3",
      naver: "https://naver.me/FBMHp2S0"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "🎮 퀘스트 알림 🎮",
    content: "서로 다른 길을 걸어온 태쁘와 져너니가\n결혼이라는 💍 최고 난이도 퀘스트를 시작하려 합니다.\n\n✨ 저희의 퀘스트 시작을\n함께 축하해 주세요💝 ✨"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "PROFILE",
    groom: {
      image : "groom.jpg",
      role : "신랑",
      name : "김태희",
      birth : "1998년 장안동 출생",
      job : "김중사🫡",
      description : "이거 맞아? ISTJ \n 자칭 낭만 로맨틱가이🌹\n 헬창이 되고싶은 헬짱💪🏻 \n "
    },    
    bride : {
      image : "bride.jpg",
      role : "신부",
      name : "문정원",
      birth : "1998년 성수동 출생",
      job : "문주무관",
      description : "사람 좋아 ESFP \n 킹꼬물, 킹해물 누나🐶\n 최근 허남준에 빠짐 \n "
    }
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    description: "부득이하게 참석이 어려운 분들을 위해\n계좌번호를 기재하였습니다.\n너그러이 이해해주시면\n감사하겠습니다.",
    groom: [
      { role: "신랑", name: "김태희", bank: "국민은행", number: "304102-04-309908" },
      { role: "아버지", name: "김병균", bank: "국민은행", number: "774602-04-011615" },
    ],
    bride: [
      { role: "신부", name: "문정원", bank: "하나은행", number: "287-910577-77107" },
      { role: "아버지", name: "문정태", bank: "농협은행", number: "352-0509-2061-13" },
      { role: "어머니", name: "김원주", bank: "신한은행", number: "110-130-601666" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "🤵🏻태쁘 💘 👰🏻‍♀️져너니 결혼합니다",
    description: "🙇🏻 2026년 12월 12일, 소중한 분들을 초대합니다.🙇🏻‍♀️"
  }
};
