window.PORTFOLIO = {
  "meta": {
    "title": "GyroVR · 최범수 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · 지니소프트",
    "name": "GyroVR",
    "initial": "G",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      }
    ],
    "motto": "차량 경로 추종 플러그인과 시퀀서 추격 연출"
  },
  "sections": [
    {
      "type": "media",
      "id": "demo",
      "title": "완성 영상",
      "lead": "GyroVR 콘텐츠의 팀 결과물입니다. 차량 제어와 추격 연출에 참여했습니다.",
      "video": "../../assets/video/Seq_Master_1015.mp4",
      "poster": "../../assets/images/cover.jpg",
      "images": [
        {
          "src": "../../assets/images/frame-035.jpg",
          "caption": "00:35 · 도로 주행"
        },
        {
          "src": "../../assets/images/frame-085.jpg",
          "caption": "01:25 · 경로와 자세 변화"
        },
        {
          "src": "../../assets/images/frame-185.jpg",
          "caption": "03:05 · 후반 장면"
        }
      ]
    },
    {
      "type": "career",
      "id": "participation",
      "title": "프로젝트 참여",
      "items": [
        {
          "name": "지니소프트",
          "period": "작업 기록 8월 3일 ~ 9월 30일",
          "desc": "GCC사관학교 3기 기업연계 프로젝트 · 차량 경로 추종과 추격 연출"
        }
      ]
    },
    {
      "type": "strengths",
      "id": "work",
      "title": "담당 작업",
      "lead": "주행 기능을 C++ 플러그인으로 정리하고, 시퀀서에서 추격 장면을 구성했습니다.",
      "items": [
        {
          "title": "차량 제어 플러그인",
          "desc": "Blueprint 주행 로직을 C++로 전환해 SplineFollowVehicle로 분리했습니다. 사용 문서를 작성해 아트팀에 전달하고 테스트했습니다."
        },
        {
          "title": "편집 도구",
          "desc": "스플라인 속도 마커와 편집 UI, 에디터 즉시 프리뷰를 만들고 경로 편집 후 마커가 어긋나는 문제를 수정했습니다."
        },
        {
          "title": "연출과 자동화",
          "desc": "추격차 7대의 등장·추월·충돌 타이밍을 조정하고 Python으로 스플라인과 시퀀서 거리 키를 다시 적용했습니다."
        }
      ]
    },
    {
      "type": "skills",
      "id": "skills",
      "title": "사용 기술",
      "groups": [
        {
          "label": "Engine",
          "items": [
            "Unreal Engine",
            "Blueprint",
            "Sequencer"
          ]
        },
        {
          "label": "Code",
          "items": [
            "C++",
            "Unreal Python"
          ]
        },
        {
          "label": "Animation",
          "items": [
            "Animation Blueprint",
            "Blender",
            "FBX"
          ]
        }
      ]
    },
    {
      "type": "projects",
      "id": "technical",
      "title": "구현과 문제 해결",
      "lead": "주행 로직과 상태 전환의 오류를 수정하고, 제작 요구에 맞춰 제어 방식을 조정했습니다.",
      "items": [
        {
          "id": "gyrovr",
          "toc": "GyroVR 기술 사례",
          "name": "GyroVR 차량 주행과 추격 연출",
          "company": "지니소프트",
          "role": "차량 경로 추종 · 편집 도구 · 시퀀서 연출",
          "desc": "초기에는 물리 주행과 레일 이동을 다루는 플러그인을 개발했습니다. 9월에는 시네마 차량·시퀀서 방식으로 전환하며 등장·추월·접촉 시점을 조정했습니다.",
          "tech": [
            "C++ Plugin",
            "Spline",
            "Sequencer",
            "Python"
          ],
          "cases": [
            {
              "title": "경로가 겹치는 구간의 목표점 선택",
              "context": "차량이 지나온 구간이나 다른 커브를 목표로 잡고, 조향이 좌우로 반복되는 현상이 있었습니다.",
              "steps": [
                "진행 거리를 기준으로 목표점을 선택하도록 수정했습니다.",
                "속도에 따라 목표점 거리를 조절했습니다."
              ],
              "result": "목표점 오선택을 해결하고 물결치는 주행 궤적을 개선했습니다."
            },
            {
              "title": "모드 전환 뒤 바퀴와 서스펜션 이상",
              "context": "레일에서 자동차 모드로 복귀할 때 바퀴 본과 서스펜션이 비정상적으로 보였습니다.",
              "steps": [
                "콜리전 해제 과정에서 물리 상태가 재생성되는 것이 원인임을 확인했습니다.",
                "문제를 해결하고 플러그인 v0.1.2와 사용 문서를 커밋했습니다."
              ],
              "result": "모드 전환 과정의 물리 상태를 확인해 문제를 해결했습니다."
            },
            {
              "title": "시퀀서 경로와 거리 키 재적용",
              "context": "히어로 경로 변경과 잘못 저장된 거리 키로 추격차 이동과 타이밍이 어긋났습니다.",
              "steps": [
                "차량별 등장·추월 순서와 접촉 장면을 표로 정리했습니다.",
                "Unreal Python으로 추격차 7대의 스플라인과 거리 키를 다시 적용했습니다.",
                "옛 접촉 섹션 21개를 비활성화하고 플레이 테스트로 속도와 차 간격을 확인했습니다."
              ],
              "result": "장면 기준을 다시 세우고 경로·키를 재적용했습니다."
            }
          ],
          "details": [
            {
              "title": "닫힌 경로의 반복 주행",
              "summary": "두 번째 주행부터 모드 전환이 멈추는 문제 수정",
              "context": "마지막 전환을 소비한 컴포넌트가 Tick을 종료해 이후 주행의 전환이 실행되지 않았습니다.",
              "steps": [
                "닫힌 루프에서는 Tick을 유지하도록 수정했습니다."
              ],
              "result": "반복 주행을 고려해 갱신 조건을 수정했습니다."
            },
            {
              "title": "속도 마커와 편집 UI",
              "summary": "경로에서 속도를 조절하고 에디터에서 프리뷰",
              "context": "스플라인 포인트와 마커가 별도 데이터라 편집 후 위치가 어긋났습니다.",
              "steps": [
                "연결 마커와 독립 마커를 구분하고 루프 동기화 오류를 수정했습니다.",
                "마커 시각화와 즉시 프리뷰를 구현했습니다.",
                "기본 Details UI를 유지한 뒤 마커 UI만 추가했습니다."
              ],
              "result": "기본 편집 기능을 유지하며 속도를 편집하도록 구성했습니다."
            },
            {
              "title": "추격 장면과 노면 보정",
              "summary": "차량 7대의 순차 출발·추월·접촉 타이밍 조정",
              "context": "주행 경로와 차량 크기에 따라 관통·부양과 접촉 간격을 조정해야 했습니다.",
              "steps": [
                "시퀀서 거리 키와 차선으로 추격 흐름을 구성했습니다.",
                "라인 트레이스와 네 바퀴 높이 보정을 개선했습니다.",
                "접촉 키를 323개에서 100개로 줄여 트랙을 정리했습니다."
              ],
              "result": "편집 키를 정리하고 차량 간격과 접지 상태를 검수했습니다."
            },
            {
              "title": "캐릭터 반응과 GyroVR 리그",
              "summary": "회전 매핑 검증과 애니메이션 연동 시험",
              "context": "리그의 축 방향을 검증하고 장면에 맞는 캐릭터 반응을 구성했습니다.",
              "steps": [
                "최종 회전값을 Yaw·Pitch·Roll 피벗에 매핑하고 디버그 프록시로 확인했습니다.",
                "Blender에서 운전 대기·돌아보기·도발·피격 동작을 제작했습니다.",
                "캐릭터 7명의 FBX 애니메이션과 표정·시선·차량 관성 반응을 연동해 시험했습니다."
              ],
              "result": "리그 회전은 에디터에서 검증했고 캐릭터 반응은 연동해 시험했습니다."
            }
          ]
        }
      ]
    },
    {
      "type": "career",
      "id": "decisions",
      "title": "기술 선택과 남은 범위",
      "items": [
        {
          "name": "물리 주행에서 시퀀서 연출로",
          "desc": "자연스러운 주행과 정확한 장면 타이밍을 함께 맞추기 위해 하이브리드 모드를 시험하고, 이후 시퀀서 중심으로 차량 움직임을 구성했습니다."
        },
        {
          "name": "구현과 시험의 구분",
          "desc": "8월 C++ 주행 플러그인 전환과 9월 차량 BP 이전 시험은 별개입니다. 9월 이전 시험은 중단했고, Modify Bone 서스펜션은 시험 작업으로 구분했습니다."
        }
      ]
    },
    {
      "type": "links",
      "id": "materials",
      "title": "상세 자료",
      "items": [
        {
          "kicker": "Markdown · 기술 설명",
          "title": "기술 포트폴리오 본문",
          "href": "../../docs/01_기술포트폴리오.md"
        },
        {
          "kicker": "Markdown · 사례",
          "title": "문제 해결 상세",
          "href": "../../docs/02_문제해결_상세.md"
        },
        {
          "kicker": "Video · 3분 54초",
          "title": "전체 영상 파일",
          "href": "../../assets/video/Seq_Master_1015.mp4"
        }
      ]
    },
    {
      "type": "links",
      "id": "back-to-list",
      "title": "다른 프로젝트 보기",
      "items": [
        {
          "kicker": "Portfolio",
          "title": "프로젝트 목록으로 돌아가기",
          "href": "../../index.html#projects"
        }
      ]
    }
  ],
  "footer": {
    "left": "최범수 · GyroVR 프로젝트",
    "right": "정리 2026.10.19"
  }
};
