export type SingularPluralDrillItem = {
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}

export type SingularPluralGroup = {
  id: string
  title: string
  arabicTerm: string
  suffixMarks: string
  suffixKorean: string
  roleKorean: string
  note: string
  items: SingularPluralDrillItem[]
}

export const singularPluralIntro = {
  title: '단복수',
  summary:
    '아랍어 명사는 개수에 따라 단수·쌍수(2개)·복수로 형태가 바뀝니다. 복수는 불규칙(깨진 복수)도 많지만, 여기서는 규칙적으로 만들 수 있는 쌍수·남성 규칙복수·여성 규칙복수를 다룹니다.',
  bullets: [
    '단수 — 하나. 기본형 그대로 (مُفْرَد).',
    '쌍수 — 정확히 둘. 끝에 ـَانِ(주격) · ـَيْنِ(목적·소유격)을 붙입니다.',
    '남성 규칙복수 — 주로 남성·사람 명사. ـُونَ(주격) · ـِينَ(목적·소유격).',
    '여성 규칙복수 — ة(타 마르부타)를 빼고 ـَات을 붙입니다.',
  ],
}

export const singularPluralGroups: SingularPluralGroup[] = [
  {
    id: 'singular',
    title: '단수',
    arabicTerm: 'المُفْرَد',
    suffixMarks: '—',
    suffixKorean: '접미사 없음',
    roleKorean: '하나',
    note: '사전·기본형에 나오는 형태입니다. 격(주·목·소)에 따라 끝모음만 바뀝니다.',
    items: [
      {
        id: 'sing-book',
        korean: '책',
        hint: 'book (singular)',
        arabic: 'كِتَاب',
        pronunciation: '키탑',
      },
      {
        id: 'sing-teacher-m',
        korean: '남자 선생님',
        hint: 'teacher (m., singular)',
        arabic: 'مُعَلِّم',
        pronunciation: '무알림',
      },
      {
        id: 'sing-teacher-f',
        korean: '여자 선생님',
        hint: 'teacher (f., singular)',
        arabic: 'مُعَلِّمَة',
        pronunciation: '무알리마',
      },
      {
        id: 'sing-student-f',
        korean: '여학생',
        hint: 'student (f., singular)',
        arabic: 'طَالِبَة',
        pronunciation: '탈리바',
      },
    ],
  },
  {
    id: 'dual',
    title: '쌍수',
    arabicTerm: 'المُثَنَّى',
    suffixMarks: 'ـَانِ · ـَيْنِ',
    suffixKorean: '안(주격) · ain(목적·소유격)',
    roleKorean: '둘',
    note: '여성 명사(ة)는 ت를 넣고 쌍수 접미사를 붙입니다. 예: مُعَلِّمَة → مُعَلِّمَتَانِ.',
    items: [
      {
        id: 'dual-book-nom',
        korean: '책 두 권 (주격)',
        hint: 'two books (nominative)',
        arabic: 'كِتَابَانِ',
        pronunciation: '키타바니',
      },
      {
        id: 'dual-book-obj',
        korean: '책 두 권 (목적·소유)',
        hint: 'two books (accusative/genitive)',
        arabic: 'كِتَابَيْنِ',
        pronunciation: '키타바이니',
      },
      {
        id: 'dual-teacher-m-nom',
        korean: '남자 선생님 두 명',
        hint: 'two teachers (m., nominative)',
        arabic: 'مُعَلِّمَانِ',
        pronunciation: '무알리마니',
      },
      {
        id: 'dual-teacher-f-nom',
        korean: '여자 선생님 두 명',
        hint: 'two teachers (f., nominative)',
        arabic: 'مُعَلِّمَتَانِ',
        pronunciation: '무알리마타니',
      },
    ],
  },
  {
    id: 'masculine-plural',
    title: '남성 규칙복수',
    arabicTerm: 'جَمْعُ المُذَكَّرِ السَّالِم',
    suffixMarks: 'ـُونَ · ـِينَ',
    suffixKorean: '운(주격) · 인(목적·소유격)',
    roleKorean: '셋 이상 — 남성·사람 명사',
    note: '주로 남성·지성(사람) 명사에 씁니다. 비인칭·여성 명사는 보통 깨진 복수를 씁니다.',
    items: [
      {
        id: 'mpl-teacher-nom',
        korean: '남자 선생님들 (주격)',
        hint: 'teachers (m., nominative)',
        arabic: 'مُعَلِّمُونَ',
        pronunciation: '무알리문',
      },
      {
        id: 'mpl-teacher-obj',
        korean: '남자 선생님들 (목적·소유)',
        hint: 'teachers (m., accusative/genitive)',
        arabic: 'مُعَلِّمِينَ',
        pronunciation: '무알리민',
      },
      {
        id: 'mpl-engineer-nom',
        korean: '엔지니어들 (주격)',
        hint: 'engineers (nominative)',
        arabic: 'مُهَنْدِسُونَ',
        pronunciation: '무핸디스운',
      },
      {
        id: 'mpl-muslim-nom',
        korean: '무슬림들',
        hint: 'Muslims (nominative)',
        arabic: 'مُسْلِمُونَ',
        pronunciation: '무슬리문',
      },
    ],
  },
  {
    id: 'feminine-plural',
    title: '여성 규칙복수',
    arabicTerm: 'جَمْعُ المُؤَنَّثِ السَّالِم',
    suffixMarks: 'ـَات',
    suffixKorean: 'ات(아트)',
    roleKorean: '셋 이상 — ة로 끝나는 여성 명사',
    note: '끝의 ة(타 마르부타)를 빼고 ـَات을 붙입니다. 예: طَالِبَة → طَالِبَات.',
    items: [
      {
        id: 'fpl-teacher',
        korean: '여자 선생님들',
        hint: 'teachers (f.)',
        arabic: 'مُعَلِّمَات',
        pronunciation: '무알리마트',
      },
      {
        id: 'fpl-student',
        korean: '여학생들',
        hint: 'students (f.)',
        arabic: 'طَالِبَات',
        pronunciation: '탈리바트',
      },
      {
        id: 'fpl-car',
        korean: '자동차들',
        hint: 'cars',
        arabic: 'سَيَّارَات',
        pronunciation: '사야라트',
      },
      {
        id: 'fpl-hospital',
        korean: '병원들',
        hint: 'hospitals',
        arabic: 'مُسْتَشْفَيَات',
        pronunciation: '무스타쉬파야트',
      },
    ],
  },
]
