window.PORTFOLIO = {
  "meta": {
    "title": "Mafia With AI · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 대표 프로젝트",
    "name": "Mafia With AI",
    "initial": "M",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "wonhou/Mafia",
        "href": "https://github.com/wonhou/Mafia"
      }
    ],
    "motto": "실시간 게임 서버 · AI 자동 보충"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>LLM 기반 온라인 마피아 게임</td></tr><tr><td>클라이언트</td><td>Unity, C#</td></tr><tr><td>게임 서버</td><td>Node.js, WebSocket</td></tr><tr><td>AI 서버</td><td>FastAPI, OpenAI API</td></tr><tr><td>개발 형태</td><td>팀 프로젝트</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/wonhou/Mafia\" target=\"_blank\" rel=\"noopener\">wonhou/Mafia</a></td></tr></table></div><h3>Summary</h3><p>8명이 모이지 않으면 시작하기 어려운 마피아 게임의 진입 장벽을 AI 자동 보충과 WebSocket 기반 실시간 진행 서버로 낮췄습니다.</p><h3>Problem</h3><p>마피아 게임은 사람이 충분히 모이지 않으면 게임이 시작되지 않습니다. 온라인 환경에서는 대기 시간이 길어질수록 참가자가 이탈하고, 방을 만들어도 실제 플레이까지 이어지기 어렵습니다.</p><h3>Implementation</h3><p>게임 시작 시 서버가 현재 사람 플레이어 수를 계산하고, 부족한 인원을 AI player로 자동 보충합니다. 이후 역할 배정, 밤 행동, 낮 토론, 투표, 승리 조건은 사람과 AI를 같은 player list에서 처리합니다.</p><p>실시간 게임 진행은 Node.js WebSocket 서버가 담당하고, AI 판단은 FastAPI 서버로 분리했습니다. Unity 클라이언트는 서버 이벤트를 받아 UI를 갱신합니다.</p><h3>Contribution</h3><ul><li>부족 인원 기준 AI 자동 보충 흐름 정리</li><li>Node.js WebSocket 기반 방/페이즈/투표 흐름 정리</li><li>FastAPI AI 서버 endpoint 구조 정리</li><li>Unity 클라이언트 이벤트 동기화 흐름 문서화</li><li>실행 스크립트, 서버 주소, AI memory 구조 개선점 분리</li></ul><h3>Keywords</h3><div class=\"document-table\"><table><tr><th>키워드</th><th>설명</th></tr><tr><td>WebSocket</td><td>방 상태와 게임 페이즈를 실시간 전달</td></tr><tr><td>FastAPI</td><td>AI 발언, 밤 행동, 투표 추천 처리</td></tr><tr><td>AI auto-fill</td><td>부족 인원만큼 AI player 추가</td></tr><tr><td>role prompt</td><td>역할별 AI 행동과 발언 생성</td></tr><tr><td>room state</td><td>서버가 단일한 게임 판정 유지</td></tr></table></div>"
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