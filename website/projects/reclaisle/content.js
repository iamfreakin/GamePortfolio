window.PORTFOLIO = {
  "meta": {
    "title": "Reclaisle · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 대표 프로젝트",
    "name": "Reclaisle",
    "initial": "R",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "NeuronGCC/Reclaisle",
        "href": "https://github.com/NeuronGCC/Reclaisle"
      }
    ],
    "motto": "Gameplay C++ · 정화 시스템 · 오염 Foliage"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>3D 로우폴리 힐링 크래프팅 어드벤처</td></tr><tr><td>엔진/언어</td><td>Unreal Engine 5.6, C++</td></tr><tr><td>개발 형태</td><td>4인 팀 프로젝트</td></tr><tr><td>담당 파트</td><td>Gameplay C++, 정화 시스템, 오염 Foliage 처리, 검증 문서</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/NeuronGCC/Reclaisle\" target=\"_blank\" rel=\"noopener\">NeuronGCC/Reclaisle</a></td></tr></table></div><h3>Summary</h3><p>넓은 지형에 반복 배치되는 오염 오브젝트를 Actor가 아니라 Foliage instance로 관리하고, Probe 정화 범위에 포함된 instance만 dissolve 후 제거하는 구조를 만들었습니다.</p><h3>Problem</h3><p>오염 정화 장면에서 중요한 것은 오염물이 단순히 사라지는 연출이 아니라, 넓은 지형에 많이 배치된 작은 오염 흔적을 안정적으로 처리하는 것이었습니다. 개별 Actor로 오염물을 관리하면 수가 늘어날수록 배치, 참조, 충돌, 제거 비용이 커질 수 있습니다.</p><h3>Implementation</h3><p>오염물은 Static Mesh Foliage로 배치하고, 정화 로직은 별도 Cleaner가 담당하도록 분리했습니다. Probe 또는 정화키트는 정화 중심 위치와 반경만 제공하고, <code>AReclaislePollutionFoliageCleaner</code>가 범위 안 instance를 찾아 진행도를 관리합니다.</p><p>Material은 <code>PerInstanceCustomData</code>를 읽어 instance별 dissolve와 pull motion을 표현합니다. 제거는 바로 처리하지 않고 완료 상태와 실제 제거 시점을 분리해 instance index 변경 리스크를 줄였습니다.</p><h3>Contribution</h3><ul><li><code>ApplyCleanField</code> 기반 정화 입력 계약 정리</li><li><code>GetInstancesOverlappingSphere</code> 기반 범위 내 Foliage instance 탐색</li><li>instance별 정화 진행도 누적 구조 설계</li><li><code>PerInstanceCustomData</code> 기반 dissolve/motion 데이터 전달</li><li>완료 instance 지연 제거와 중복 등록 방지</li><li>Dev 맵, Map Check, PIE 로그 기준 검증 문서 정리</li></ul><h3>Keywords</h3><div class=\"document-table\"><table><tr><th>키워드</th><th>설명</th></tr><tr><td>Foliage instance</td><td>대량 오염물을 Actor가 아니라 instance로 배치</td></tr><tr><td><code>ApplyCleanField</code></td><td>정화 중심, 반경, 정화량을 받는 입력 계약</td></tr><tr><td><code>PerInstanceCustomData</code></td><td>instance별 dissolve와 motion 값을 Material에 전달</td></tr><tr><td>Delayed removal</td><td>dissolve 완료 후 안정적으로 instance 제거</td></tr><tr><td>Map Check / PIE Log</td><td>기능 검증 기준</td></tr></table></div>"
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