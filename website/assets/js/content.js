window.PORTFOLIO = {
  "meta": {
    "title": "최범수 · Unreal Engine 포트폴리오"
  },
  "profile": {
    "eyebrow": "신입 게임 클라이언트 프로그래머 (Unreal Engine)",
    "name": "최범수",
    "nameEn": "Choi BeomSoo",
    "initial": "최",
    "photo": "portrait.jpg",
    "links": [
      {
        "label": "qjaqjaqja1877@gmail.com",
        "href": "mailto:qjaqjaqja1877@gmail.com"
      },
      {
        "label": "github.com/iamfreakin",
        "href": "https://github.com/iamfreakin"
      }
    ]
  },
  "sections": [
    {
      "type": "projects",
      "id": "projects",
      "title": "대표 프로젝트",
      "lead": "가장 먼저 보여드리고 싶은 세 프로젝트입니다. 미리보기로 확인하고, 상세 페이지에서 구현과 문제 해결 과정을 볼 수 있습니다.",
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
          "company": "GCC사관학교 3기 · 팀 프로젝트",
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
          "id": "neondrift",
          "toc": "NEONDRIFT",
          "name": "NEONDRIFT",
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
        }
      ]
    },
    {
      "type": "project-list",
      "id": "more-projects",
      "title": "그 밖의 프로젝트",
      "items": [
        {
          "id": "mafia-with-ai",
          "toc": "Mafia With AI",
          "name": "Mafia With AI",
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
          "desc": "차량을 상속과 다형성으로 모델링하고, raw pointer 기반 객체 관리를 std::unique_ptr 소유권 구조로 정리한 C++ 콘솔 게임입니다.",
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
      "type": "strengths",
      "id": "strengths",
      "title": "핵심 역량",
      "lead": "GCC사관학교 3기 언리얼엔진 기반 게임콘텐츠 제작과정(540시간)을 수료하고, 지니소프트 기업연계 프로젝트에서 VR 콘텐츠 GyroVR의 차량 제어와 추격 연출을 맡았습니다. 팀·개인 프로젝트에서는 Unreal C++로 게임 루프, 대량 오브젝트 처리, 물리 기반 프로토타입을 만들어 왔습니다.",
      "items": [
        {
          "title": "Unreal C++ 게임플레이 구현",
          "desc": "채집, 전투, 강화, 승패 판정까지 이어지는 게임 루프를 Unreal C++ 중심으로 3일 안에 완성했습니다(NEONDRIFT). 상태머신과 Canvas HUD로 흐름을 정리하고, 커서 기반 전투와 보스 기믹 프로토타입도 만들었습니다(ElementalPointer)."
        },
        {
          "title": "대량 오브젝트 처리 구조",
          "desc": "넓은 지형에 반복 배치되는 오염 오브젝트를 Actor가 아닌 Foliage instance로 관리하고, 정화 범위에 들어온 instance만 dissolve 후 제거하는 구조를 만들었습니다(Reclaisle)."
        },
        {
          "title": "C++ 플러그인과 에디터 도구",
          "desc": "블루프린트 주행 로직을 C++ 플러그인(SplineFollowVehicle)으로 옮기고, 스플라인 속도 마커와 편집 UI, 에디터 즉시 프리뷰를 만들어 아트팀이 직접 쓰도록 사용 문서와 함께 전달했습니다(GyroVR)."
        },
        {
          "title": "시퀀서 연출과 자동화",
          "desc": "시퀀서에서 추격차 7대의 등장·추월·충돌 타이밍을 구성하고, 경로가 바뀌었을 때 Unreal Python으로 스플라인과 거리 키를 다시 적용했습니다(GyroVR)."
        },
        {
          "title": "실시간 서버 연동",
          "desc": "인원이 모자라면 AI가 자리를 채우는 마피아 게임을 WebSocket 기반 실시간 진행 서버와 함께 만들었습니다(Mafia With AI · Node.js · FastAPI)."
        },
        {
          "title": "C++ 설계 기본기",
          "desc": "상속과 다형성으로 차량을 모델링하고, raw pointer로 관리하던 객체를 std::unique_ptr 소유권 구조로 정리했습니다(PolyDrive)."
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
            "Unity (기초)"
          ]
        },
        {
          "label": "Language",
          "items": [
            "C++",
            "Blueprint",
            "C#",
            "Python"
          ]
        },
        {
          "label": "Cinematic",
          "items": [
            "Sequencer",
            "Animation Blueprint",
            "Blender"
          ]
        },
        {
          "label": "Network",
          "items": [
            "Dedicated Server",
            "Node.js",
            "FastAPI"
          ]
        },
        {
          "label": "XR",
          "items": [
            "OpenXR",
            "Meta Quest",
            "자이로 모션 장비"
          ]
        },
        {
          "label": "Tools",
          "items": [
            "Git",
            "SVN",
            "Visual Studio",
            "JetBrains Rider",
            "Unreal Insights"
          ]
        },
        {
          "label": "AI",
          "items": [
            "LLM API 연동",
            "Claude",
            "Codex"
          ]
        }
      ]
    },
    {
      "type": "career",
      "id": "career",
      "title": "경력",
      "items": [
        {
          "name": "지니소프트",
          "period": "2026.08 — 2026.10",
          "tenure": "기업연계 · 사원",
          "desc": "실감콘텐츠제작 · 언리얼 VR 콘텐츠 클라이언트 개발 (GyroVR)"
        }
      ]
    },
    {
      "type": "education",
      "id": "training",
      "title": "교육",
      "items": [
        {
          "name": "GCC사관학교 3기",
          "period": "2026.04 — 2026.10",
          "tenure": "수료 · 540시간",
          "desc": "언리얼엔진 기반 게임콘텐츠 제작과정 (주관: 문화체육관광부 · 광주광역시 · 광주정보문화산업진흥원). C++ 객체지향 설계와 STL·메모리 관리, 블루프린트·C++ 연동, 비헤이비어 트리·FSM 기반 AI, 서버-클라이언트 네트워크와 RPC, 생성형 AI를 활용한 에셋 파이프라인을 배우고, 팀 프로젝트 Reclaisle로 기획부터 QA·빌드 패키징까지 전 과정을 경험했습니다."
        }
      ]
    },
    {
      "type": "education",
      "id": "education",
      "title": "학력",
      "items": [
        {
          "name": "조선대학교",
          "period": "2020.03 — 2026.02",
          "desc": "컴퓨터공학과 · 졸업"
        }
      ]
    },
    {
      "type": "career",
      "id": "activities",
      "title": "활동",
      "items": [
        {
          "name": "데브자인",
          "period": "2023.03 — 2025.03",
          "tenure": "운영진 · 관리자",
          "desc": "단과대 학술동아리",
          "points": [
            "임원진이 매년 바뀌면서 운영 노하우가 사라지는 문제를 보고, 연간 일정·행정 절차·시행착오 방지책을 담은 운영 매뉴얼을 자발적으로 작성해 차기 임원진의 인수인계 기반을 마련했습니다.",
            "신입 부원을 위한 C언어 기초·자료구조 커리큘럼을 직접 기획하고 강의했습니다. 비전공자 눈높이에 맞춘 설명으로 수강 부원 13명 중 70% 이상이 수료했습니다."
          ]
        }
      ]
    },
    {
      "type": "links",
      "id": "links",
      "title": "관련 자료",
      "items": [
        {
          "kicker": "GitHub",
          "title": "github.com/iamfreakin",
          "href": "https://github.com/iamfreakin"
        }
      ]
    }
  ],
  "footer": {
    "left": "최범수 · Choi BeomSoo",
    "right": "Updated 2026.10"
  }
};