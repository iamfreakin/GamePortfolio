window.PORTFOLIO = {
  "meta": {
    "title": "Project-Wings-Chaos-Room · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 프로토타입",
    "name": "Project-Wings-Chaos-Room",
    "initial": "P",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "iamfreakin/Project-Wings-Chaos-Room",
        "href": "https://github.com/iamfreakin/Project-Wings-Chaos-Room"
      }
    ],
    "motto": "물리 비행 · 속성 상성 · Chaos 파괴"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>물리 기반 항공 파괴 퍼즐 액션</td></tr><tr><td>엔진/언어</td><td>Unreal Engine 5.6, C++</td></tr><tr><td>개발 상태</td><td>Phase 4 완료 후 개발 중단, NEONDRIFT로 전환</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/iamfreakin/Project-Wings-Chaos-Room\" target=\"_blank\" rel=\"noopener\">iamfreakin/Project-Wings-Chaos-Room</a></td></tr></table></div><h3>Summary</h3><p>발사할 기체를 선택하고, 실시간 3축 비행으로 목표 지점에 충돌시켜 속성이 일치하는 구조물만 Chaos Physics로 파괴하는 UE5.6 물리 퍼즐 프로토타입입니다.</p><h3>Problem</h3><p>발사체를 쏘고 끝나는 구조가 아니라, 발사 후 플레이어가 직접 비행을 보정하면서 속성이 맞는 목표 구조물만 파괴해야 했습니다. 단순 물리 충돌과 퍼즐 규칙이 섞이면 속성 불일치 상황에서도 구조물이 깨질 수 있으므로, 파괴 조건을 코드에서 명확히 제어해야 했습니다.</p><h3>Implementation</h3><p><code>AWingsLauncher</code>는 기체 선택 시퀀스가 확정된 뒤에만 충전 발사를 허용합니다. 발사 완료 시 GameMode에서 다음 기체 클래스를 받아 스폰하고, 초기 impulse를 준 뒤 PlayerController의 조종권을 발사대에서 비행 Pawn으로 전환합니다.</p><p><code>AWingsPawnBase::OnMeshHit</code>에서는 기체 속성과 타겟 속성을 비교합니다. 속성이 일치하거나 <code>Universal</code>이면 Geometry Collection을 Dynamic으로 전환하고 Field System으로 파괴 field를 생성합니다. 속성이 맞지 않으면 damage threshold를 높여 물리 충돌은 허용하되 파괴를 차단합니다.</p><h3>Contribution</h3><ul><li><code>AWingsLauncher</code> 기반 조준, 충전 발사, 궤적 예측, 기체 스폰</li><li><code>AWingsPawnBase</code> 기반 pitch/yaw/roll/thrust 3축 비행</li><li>velocity alignment, fake lift, bank-to-turn 기반 비행 보정</li><li><code>EWingsAttribute</code> 기반 기체/타겟 속성 판정</li><li><code>AWingsDestructibleActor</code> 기반 Geometry Collection 상태 제어</li><li>Field System 기반 Chaos 파괴 충격파 생성</li><li><code>AWingsGameMode</code> 기반 기체 시퀀스, 타겟 카운트, 승패 판정</li><li>마지막 기체와 마지막 타겟 파괴가 겹치는 레이스 컨디션 완화</li></ul><h3>Current Scope</h3><p>이 프로젝트는 Phase 4 완료 후 NEONDRIFT로 전환되며 개발이 중단되었습니다. 정식 스테이지 디자인, 사운드, 메인 메뉴, 기체 외형 에셋은 미완성 범위로 분리합니다.</p>"
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