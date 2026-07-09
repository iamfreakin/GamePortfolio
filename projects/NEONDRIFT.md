# NEONDRIFT

## Overview

| 항목 | 내용 |
| --- | --- |
| 장르 | 3D 아케이드 웨이브 디펜스 |
| 엔진/언어 | Unreal Engine 5.8, C++20 |
| 개발 형태 | 1인 개발 |
| 개발 기간 | 3일 |
| Repository | [iamfreakin/NEON-DRIFT](https://github.com/iamfreakin/NEON-DRIFT) |

## Summary

3일 안에 채집, 전투, 강화, 승패 판정까지 이어지는 게임 루프를 Unreal C++ 중심으로 닫았습니다.

## Problem

짧은 기간 프로젝트에서 가장 큰 위험은 기능을 많이 시작하고 아무것도 끝내지 못하는 것입니다. 전투, 자원, 상점이 따로 존재해도 승패 판정까지 이어지지 않으면 완성 루프라고 보기 어렵습니다.

## Implementation

게임 흐름을 `MainMenu`, `PreWave`, `Gather`, `Combat`, `Shop`, `GameOver`, `Victory`의 7단계 상태로 나눴습니다. GameMode가 상태 전이와 승패 조건을 관리하고, 전투 대상은 `IDamageable` 인터페이스로 묶어 몬스터, 기지, 자원 블록을 같은 피해 처리 구조에 연결했습니다.

상점 입력 문제는 UMG 포커스 트리 우회가 아니라 Canvas HUD 직접 렌더링으로 입력 경로를 단순화해 해결했습니다.

## Contribution

- 7단계 게임 상태머신 설계와 구현
- Gather, Combat, Shop, Victory/GameOver 흐름 연결
- `IDamageable` 기반 피해 처리 구조 적용
- 자원 회수와 상점 강화 루프 구현
- Canvas HUD 기반 상점 입력 문제 해결
- 짧은 기간 내 기능 범위 조절
