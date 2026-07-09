# Game Portfolio

게임 클라이언트, Gameplay C++, 실시간 서버, AI 연동 프로젝트를 정리한 포트폴리오 허브입니다.

이 저장소는 프로젝트를 단순 나열하기보다, 각 프로젝트에서 어떤 문제를 정의했고 어떤 구조로 해결했는지를 빠르게 확인할 수 있도록 구성했습니다.

## Projects

| 구분 | 프로젝트 | 형태 | 핵심 역량 | 상세 문서 | Repository |
| --- | --- | --- | --- | --- | --- |
| 대표 | Reclaisle | Unreal Engine 5.6 팀 프로젝트 | Foliage instance 기반 정화 시스템, Gameplay C++ | [문서](projects/Reclaisle.md) | [NeuronGCC/Reclaisle](https://github.com/NeuronGCC/Reclaisle) |
| 대표 | Mafia With AI | Unity + Node.js + FastAPI 팀 프로젝트 | 실시간 게임 서버, AI 자동 보충, 역할 기반 AI 판단 | [문서](projects/Mafia-With-AI.md) | [wonhou/Mafia](https://github.com/wonhou/Mafia) |
| 대표 | NEONDRIFT | Unreal Engine 5.8 C++ 1인 프로젝트 | 짧은 기간 내 게임 루프 완성, 상태머신 | [문서](projects/NEONDRIFT.md) | [iamfreakin/NEON-DRIFT](https://github.com/iamfreakin/NEON-DRIFT) |
| 서브 | ElementalPointer | Unreal Engine 5.8 C++ 프로토타입 | 커서 기반 전투, 성장/보스 기믹 설계 | [문서](projects/ElementalPointer.md) | [iamfreakin/ElementalPointer](https://github.com/iamfreakin/ElementalPointer) |
| 서브 | Project-Wings-Chaos-Room | Unreal Engine 5.6 C++ 프로토타입 | 물리 비행, 속성 상성, Chaos 파괴 | [문서](projects/Project-Wings-Chaos-Room.md) | [iamfreakin/Project-Wings-Chaos-Room](https://github.com/iamfreakin/Project-Wings-Chaos-Room) |
| 서브 | PolyDrive | C++ 콘솔 프로젝트 | 다형성, `unique_ptr` 소유권, 객체 생명주기 | [문서](projects/PolyDrive.md) | [iamfreakin/PolyDrive](https://github.com/iamfreakin/PolyDrive) |

## Focus

- 문제를 먼저 정의하고, 기능보다 구조와 재현 가능한 결과를 우선합니다.
- Unreal Gameplay C++에서는 GameMode, Pawn, PlayerController, HUD, Enhanced Input, Foliage instance, Material Custom Data, Chaos Physics를 다뤘습니다.
- 서버/AI 프로젝트에서는 Node.js WebSocket 서버와 FastAPI AI 서버를 분리해 실시간 게임 진행과 LLM 판단을 독립적으로 관리했습니다.
- C++ 프로젝트에서는 추상 클래스, 인터페이스, 다형성, `std::unique_ptr`, `std::move`를 실제 게임 루프에 적용했습니다.

## Tech Stack

| 영역 | 키워드 |
| --- | --- |
| Unreal Gameplay | GameMode, Pawn, PlayerController, HUD, Enhanced Input |
| Unreal Rendering / Physics | Foliage instance, Material Custom Data, Chaos Physics, Geometry Collection, Field System |
| C++ | interface, abstract class, ownership, `std::unique_ptr`, `std::move` |
| Server | Node.js, WebSocket, FastAPI, HTTP API |
| AI | OpenAI API, role prompt, AI player, memory structure |
| UI | Canvas HUD, UMG, Unity UI, state-based visibility |

## Repository Notes

- `NeuronGCC/Reclaisle`는 팀 프로젝트 저장소입니다. 접근 권한이 없는 환경에서는 저장소가 보이지 않을 수 있습니다.
- 각 프로젝트 저장소의 README는 포트폴리오 허브와 같은 구조로 점진적으로 정리합니다.
