# Reclaisle

## Overview

| 항목 | 내용 |
| --- | --- |
| 장르 | 3D 로우폴리 힐링 크래프팅 어드벤처 |
| 엔진/언어 | Unreal Engine 5.6, C++ |
| 개발 형태 | 4인 팀 프로젝트 |
| 담당 파트 | Gameplay C++, 정화 시스템, 오염 Foliage 처리, 검증 문서 |
| Repository | [NeuronGCC/Reclaisle](https://github.com/NeuronGCC/Reclaisle) |

## Summary

넓은 지형에 반복 배치되는 오염 오브젝트를 Actor가 아니라 Foliage instance로 관리하고, Probe 정화 범위에 포함된 instance만 dissolve 후 제거하는 구조를 만들었습니다.

## Problem

오염 정화 장면에서 중요한 것은 오염물이 단순히 사라지는 연출이 아니라, 넓은 지형에 많이 배치된 작은 오염 흔적을 안정적으로 처리하는 것이었습니다. 개별 Actor로 오염물을 관리하면 수가 늘어날수록 배치, 참조, 충돌, 제거 비용이 커질 수 있습니다.

## Implementation

오염물은 Static Mesh Foliage로 배치하고, 정화 로직은 별도 Cleaner가 담당하도록 분리했습니다. Probe 또는 정화키트는 정화 중심 위치와 반경만 제공하고, `AReclaislePollutionFoliageCleaner`가 범위 안 instance를 찾아 진행도를 관리합니다.

Material은 `PerInstanceCustomData`를 읽어 instance별 dissolve와 pull motion을 표현합니다. 제거는 바로 처리하지 않고 완료 상태와 실제 제거 시점을 분리해 instance index 변경 리스크를 줄였습니다.

## Contribution

- `ApplyCleanField` 기반 정화 입력 계약 정리
- `GetInstancesOverlappingSphere` 기반 범위 내 Foliage instance 탐색
- instance별 정화 진행도 누적 구조 설계
- `PerInstanceCustomData` 기반 dissolve/motion 데이터 전달
- 완료 instance 지연 제거와 중복 등록 방지
- Dev 맵, Map Check, PIE 로그 기준 검증 문서 정리

## Keywords

| 키워드 | 설명 |
| --- | --- |
| Foliage instance | 대량 오염물을 Actor가 아니라 instance로 배치 |
| `ApplyCleanField` | 정화 중심, 반경, 정화량을 받는 입력 계약 |
| `PerInstanceCustomData` | instance별 dissolve와 motion 값을 Material에 전달 |
| Delayed removal | dissolve 완료 후 안정적으로 instance 제거 |
| Map Check / PIE Log | 기능 검증 기준 |
