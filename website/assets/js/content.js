window.PORTFOLIO = {
  "meta": {
    "title": "홍길동 · 클라이언트 프로그래머"
  },
  "profile": {
    "eyebrow": "7년차 게임 클라이언트 프로그래머 (Unreal Engine)",
    "name": "홍길동",
    "nameEn": "Gildong Hong",
    "initial": "홍",
    "photo": "portrait.jpg",
    "links": [
      {
        "label": "you@example.com",
        "href": "mailto:you@example.com"
      }
    ],
    "motto": "블루프린트로 빠르게 만들고, 필요한 곳은 C++로 단단하게."
  },
  "sections": [
    {
      "type": "career",
      "id": "career",
      "title": "경력",
      "items": [
        {
          "name": "○○소프트",
          "period": "2019.03 — 현재",
          "tenure": "재직 중 · 7년 7개월",
          "desc": "클라이언트 프로그래밍 · C++ 플러그인 개발"
        }
      ]
    },
    {
      "type": "strengths",
      "id": "strengths",
      "title": "핵심 역량",
      "lead": "2019년부터 ○○소프트에서 Unreal Engine 기반 VR·체험형 콘텐츠를 개발하며 다섯 개의 프로젝트를 거쳤습니다. 그중 셋은 납품·출시까지 마쳤고, 블루프린트 프로젝트에 별도로 개발한 C++ 플러그인을 붙이는 방식으로 콘텐츠 작업 속도와 핵심 기능의 안정성을 함께 챙겨 왔습니다.",
      "items": [
        {
          "title": "블루프린트 + C++ 플러그인 구조",
          "desc": "콘텐츠와 흐름은 블루프린트로, 성능이 필요하거나 여러 프로젝트에서 재사용할 기능은 별도 폴더에서 개발한 C++ 플러그인으로 분리해 붙입니다. 프로젝트 구조를 흔들지 않고 C++ 기능을 추가하는 방식에 익숙합니다."
        },
        {
          "title": "블루프린트용 API 설계",
          "desc": "C++ 기능을 BlueprintCallable 함수, 델리게이트, 데이터 애셋으로 노출해 기획자가 코드 수정 없이 기능을 조합할 수 있게 만듭니다. 이름과 카테고리 규칙을 정해 노드 검색만으로 찾을 수 있게 정리합니다."
        },
        {
          "title": "외부 장비 · SDK 연동",
          "desc": "VR HMD, 모션 시뮬레이터, 자이로 센서 등 외부 장비를 엔진에 연동해 왔습니다. 시리얼·UDP 통신을 별도 스레드로 분리하고, 입력 지연과 값 튐을 보정하는 작업을 주로 맡았습니다."
        },
        {
          "title": "성능 최적화",
          "desc": "Unreal Insights와 stat 명령으로 병목을 찾고, Tick 남용을 이벤트 구조로 바꾸거나 무거운 블루프린트 로직을 C++로 옮겨 VR 목표 프레임을 맞춥니다."
        },
        {
          "title": "개발 · 현장 도구 제작",
          "desc": "기획이 쓰는 에디터 유틸리티 위젯과, 설치 담당자가 쓰는 현장 설정 도구를 만들어 빌드 없이 값을 바꿀 수 있게 했습니다. 반복 작업을 도구로 줄이는 일에 관심이 많습니다."
        },
        {
          "title": "납품 · 유지보수",
          "desc": "패키징, 현장 설치, 납품 후 원격 유지보수까지 프로젝트 마무리 단계를 직접 맡아 왔습니다. SVN 리비전 기준으로 납품 버전을 관리해 현장 이슈를 빠르게 재현합니다."
        }
      ]
    },
    {
      "type": "skills",
      "id": "skills",
      "title": "보유 기술",
      "groups": [
        {
          "label": "Engine",
          "items": [
            "Unreal Engine 5",
            "Unreal Engine 4"
          ]
        },
        {
          "label": "Language",
          "items": [
            "C++",
            "Blueprint",
            "C#"
          ]
        },
        {
          "label": "XR",
          "items": [
            "OpenXR",
            "Meta XR SDK",
            "SteamVR"
          ]
        },
        {
          "label": "Tools",
          "items": [
            "SVN",
            "Visual Studio",
            "JetBrains Rider",
            "Unreal Insights"
          ]
        }
      ]
    },
    {
      "type": "projects",
      "id": "projects",
      "title": "프로젝트",
      "lead": "프로젝트별 간단한 설명과 미리보기를 확인하고 상세 페이지로 이동할 수 있습니다.",
      "items": [
        {
          "id": "gyrovr",
          "toc": "GyroVR",
          "name": "GyroVR",
          "company": "지니소프트 · 기업연계 프로젝트",
          "role": "차량 제어 · 제작 도구 · 추격 연출",
          "desc": "차량 경로 추종 플러그인과 속도 편집 도구를 개발하고, 시퀀서에서 추격차 7대의 등장·추월·충돌 장면을 구성했습니다.",
          "tech": [
            "Unreal Engine",
            "C++",
            "Blueprint",
            "Sequencer",
            "Python"
          ],
          "preview": {
            "poster": "assets/images/cover.jpg",
            "video": "assets/video/Seq_Master_1015.mp4",
            "caption": "완성 영상 미리보기 · 팀 결과물"
          },
          "href": "projects/gyrovr/index.html"
        },
        {
          "id": "reclaisle",
          "toc": "Reclaisle",
          "name": "Reclaisle",
          "company": "대표 프로젝트",
          "role": "Gameplay C++ · 정화 시스템 · 오염 Foliage",
          "desc": "넓은 지형에 반복 배치되는 오염 오브젝트를 Actor가 아니라 Foliage instance로 관리하고, Probe 정화 범위에 포함된 instance만 dissolve 후 제거하는 구조를 만들었습니다.",
          "tech": [
            "Unreal Engine 5.6",
            "C++",
            "Foliage",
            "Material Custom Data"
          ],
          "href": "projects/reclaisle/index.html",
          "preview": {
            "page": "projects/reclaisle/index.html",
            "caption": "Reclaisle 상세 페이지 미리보기"
          }
        },
        {
          "id": "mafia-with-ai",
          "toc": "Mafia With AI",
          "name": "Mafia With AI",
          "company": "대표 프로젝트",
          "role": "실시간 게임 서버 · AI 자동 보충",
          "desc": "8명이 모이지 않으면 시작하기 어려운 마피아 게임의 진입 장벽을 AI 자동 보충과 WebSocket 기반 실시간 진행 서버로 낮췄습니다.",
          "tech": [
            "Unity",
            "C#",
            "Node.js",
            "WebSocket",
            "FastAPI"
          ],
          "href": "projects/mafia-with-ai/index.html",
          "preview": {
            "page": "projects/mafia-with-ai/index.html",
            "caption": "Mafia With AI 상세 페이지 미리보기"
          }
        },
        {
          "id": "neondrift",
          "toc": "NEONDRIFT",
          "name": "NEONDRIFT",
          "company": "대표 프로젝트",
          "role": "게임 루프 · 상태머신 · Canvas HUD",
          "desc": "3일 안에 채집, 전투, 강화, 승패 판정까지 이어지는 게임 루프를 Unreal C++ 중심으로 닫았습니다.",
          "tech": [
            "Unreal Engine 5.8",
            "C++20"
          ],
          "href": "projects/neondrift/index.html",
          "preview": {
            "page": "projects/neondrift/index.html",
            "caption": "NEONDRIFT 상세 페이지 미리보기"
          }
        },
        {
          "id": "elemental-pointer",
          "toc": "ElementalPointer",
          "name": "ElementalPointer",
          "company": "프로토타입",
          "role": "커서 기반 전투 · 성장과 보스 기믹",
          "desc": "캐릭터를 직접 조종하는 대신 커서 위치를 공격 범위로 쓰고, 보스는 스탯 벽이 아니라 기믹 이해로 풀도록 설계한 Unreal C++ 프로토타입입니다.",
          "tech": [
            "Unreal Engine 5.8",
            "C++"
          ],
          "href": "projects/elemental-pointer/index.html",
          "preview": {
            "page": "projects/elemental-pointer/index.html",
            "caption": "ElementalPointer 상세 페이지 미리보기"
          }
        },
        {
          "id": "wings-chaos-room",
          "toc": "Project-Wings-Chaos-Room",
          "name": "Project-Wings-Chaos-Room",
          "company": "프로토타입",
          "role": "물리 비행 · 속성 상성 · Chaos 파괴",
          "desc": "발사할 기체를 선택하고, 실시간 3축 비행으로 목표 지점에 충돌시켜 속성이 일치하는 구조물만 Chaos Physics로 파괴하는 UE5.6 물리 퍼즐 프로토타입입니다.",
          "tech": [
            "Unreal Engine 5.6",
            "C++",
            "Chaos Physics"
          ],
          "href": "projects/wings-chaos-room/index.html",
          "preview": {
            "page": "projects/wings-chaos-room/index.html",
            "caption": "Project-Wings-Chaos-Room 상세 페이지 미리보기"
          }
        },
        {
          "id": "polydrive",
          "toc": "PolyDrive",
          "name": "PolyDrive",
          "company": "C++ 콘솔 프로젝트",
          "role": "다형성 · 소유권 · 객체 생명주기",
          "desc": "차량을 상속과 다형성으로 모델링하고, raw pointer 기반 객체 관리를 `std::unique_ptr` 소유권 구조로 정리한 C++ 콘솔 게임입니다.",
          "tech": [
            "C++",
            "unique_ptr",
            "std::move"
          ],
          "href": "projects/polydrive/index.html",
          "preview": {
            "page": "projects/polydrive/index.html",
            "caption": "PolyDrive 상세 페이지 미리보기"
          }
        }
      ]
    },
    {
      "type": "education",
      "id": "education",
      "title": "학력",
      "items": [
        {
          "name": "○○대학교",
          "period": "2012.03 — 2019.02",
          "desc": "게임공학과 · 졸업"
        }
      ]
    },
    {
      "type": "activities",
      "id": "activities",
      "title": "활동 · 자격",
      "items": [
        {
          "what": "○○ 게임잼 우수상",
          "when": "2017"
        },
        {
          "what": "교내 게임 개발 동아리 회장",
          "when": "2016 — 2017"
        },
        {
          "what": "정보처리기사",
          "when": "2018"
        }
      ]
    },
    {
      "type": "links",
      "id": "links",
      "title": "관련 자료",
      "items": [
        {
          "kicker": "YouTube · 플레이 영상",
          "title": "프로젝트 A 체험 영상",
          "href": "#"
        },
        {
          "kicker": "GitHub",
          "title": "공개 가능한 플러그인 예제 코드",
          "href": "#"
        }
      ]
    }
  ],
  "footer": {
    "left": "홍길동 · Gildong Hong",
    "right": "Updated 2026.10"
  }
};