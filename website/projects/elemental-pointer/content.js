window.PORTFOLIO = {
  "meta": {
    "title": "ElementalPointer · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 프로토타입",
    "name": "ElementalPointer",
    "initial": "E",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "iamfreakin/ElementalPointer",
        "href": "https://github.com/iamfreakin/ElementalPointer"
      }
    ],
    "motto": "커서 기반 전투 · 성장과 보스 기믹"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>커서 기반 인크리멘탈 액션 로그라이크 프로토타입</td></tr><tr><td>엔진/언어</td><td>Unreal Engine 5.8, C++</td></tr><tr><td>개발 형태</td><td>1인 프로토타입</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/iamfreakin/ElementalPointer\" target=\"_blank\" rel=\"noopener\">iamfreakin/ElementalPointer</a></td></tr></table></div><h3>Summary</h3><p>캐릭터를 직접 조종하는 대신 커서 위치를 공격 범위로 쓰고, 보스는 스탯 벽이 아니라 기믹 이해로 풀도록 설계한 Unreal C++ 프로토타입입니다.</p><h3>Problem</h3><p>액션 로그라이크에서 이동, 조준, 공격을 모두 요구하면 조작 부담이 커질 수 있습니다. 이 프로젝트는 캐릭터 이동보다 커서 위치 판단을 전투의 중심으로 두는 실험입니다.</p><h3>Implementation</h3><p>PlayerController가 마우스 화면 좌표를 world ray로 변환하고, 전투 평면과의 교차점을 <code>CursorState.WorldLocation</code>으로 저장합니다. <code>AEPSwordField</code>는 이 위치를 따라가며 범위 안 적을 공격합니다.</p><p>성장은 각성, 상점, 깨달음으로 나누고, 보스 기믹은 커서 위치 기반 조건 평가 구조로 설계했습니다.</p><h3>Contribution</h3><ul><li><code>DeprojectMousePositionToWorld</code> 기반 커서 월드 좌표 계산</li><li>전투 평면 교차점 계산</li><li><code>AEPSwordField</code> 기반 커서 추종 공격 범위</li><li>범위 오토어택 구조 설계</li><li>Head/Back 위치 보상 설계</li><li>각성, 상점, 깨달음 성장 구조 설계</li><li>보스 기믹 설계와 구현 범위 분리</li></ul>"
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