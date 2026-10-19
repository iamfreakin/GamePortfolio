window.PORTFOLIO = {
  "meta": {
    "title": "NEONDRIFT · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 대표 프로젝트",
    "name": "NEONDRIFT",
    "initial": "N",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "iamfreakin/NEON-DRIFT",
        "href": "https://github.com/iamfreakin/NEON-DRIFT"
      }
    ],
    "motto": "게임 루프 · 상태머신 · Canvas HUD"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>3D 아케이드 웨이브 디펜스</td></tr><tr><td>엔진/언어</td><td>Unreal Engine 5.8, C++20</td></tr><tr><td>개발 형태</td><td>1인 개발</td></tr><tr><td>개발 기간</td><td>3일</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/iamfreakin/NEON-DRIFT\" target=\"_blank\" rel=\"noopener\">iamfreakin/NEON-DRIFT</a></td></tr></table></div><h3>Summary</h3><p>3일 안에 채집, 전투, 강화, 승패 판정까지 이어지는 게임 루프를 Unreal C++ 중심으로 닫았습니다.</p><h3>Problem</h3><p>짧은 기간 프로젝트에서 가장 큰 위험은 기능을 많이 시작하고 아무것도 끝내지 못하는 것입니다. 전투, 자원, 상점이 따로 존재해도 승패 판정까지 이어지지 않으면 완성 루프라고 보기 어렵습니다.</p><h3>Implementation</h3><p>게임 흐름을 <code>MainMenu</code>, <code>PreWave</code>, <code>Gather</code>, <code>Combat</code>, <code>Shop</code>, <code>GameOver</code>, <code>Victory</code>의 7단계 상태로 나눴습니다. GameMode가 상태 전이와 승패 조건을 관리하고, 전투 대상은 <code>IDamageable</code> 인터페이스로 묶어 몬스터, 기지, 자원 블록을 같은 피해 처리 구조에 연결했습니다.</p><p>상점 입력 문제는 UMG 포커스 트리 우회가 아니라 Canvas HUD 직접 렌더링으로 입력 경로를 단순화해 해결했습니다.</p><h3>Contribution</h3><ul><li>7단계 게임 상태머신 설계와 구현</li><li>Gather, Combat, Shop, Victory/GameOver 흐름 연결</li><li><code>IDamageable</code> 기반 피해 처리 구조 적용</li><li>자원 회수와 상점 강화 루프 구현</li><li>Canvas HUD 기반 상점 입력 문제 해결</li><li>짧은 기간 내 기능 범위 조절</li></ul>"
    },
    {
      "type": "links",
      "id": "return",
      "title": "포트폴리오",
      "items": [
        {
          "title": "프로젝트 목록으로 돌아가기",
          "href": "../../index.html#projects"
        }
      ]
    }
  ],
  "footer": {
    "left": "홍길동 · Gildong Hong",
    "right": "Updated 2026.10"
  }
};