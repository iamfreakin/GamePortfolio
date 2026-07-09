# PolyDrive

## Overview

| 항목 | 내용 |
| --- | --- |
| 형태 | C++ 콘솔 기반 하이웨이 운송 시뮬레이션 |
| 언어 | C++ |
| 개발 형태 | 1인 개발 |
| Repository | [iamfreakin/PolyDrive](https://github.com/iamfreakin/PolyDrive) |

## Summary

차량을 상속과 다형성으로 모델링하고, raw pointer 기반 객체 관리를 `std::unique_ptr` 소유권 구조로 정리한 C++ 콘솔 게임입니다.

## Problem

서로 다른 차량 타입을 같은 게임 루프에서 관리해야 했고, 상점에서 구매한 차량은 차고로 소유권이 이동해야 했습니다. raw pointer로만 관리하면 상점과 차고 중 누가 객체를 소유하고 삭제하는지 불분명해질 수 있습니다.

## Implementation

`Car`를 추상 기반 클래스로 두고 `Bus`, `SportsCar`, `Truck`, `Sedan`이 같은 인터페이스를 구현하게 했습니다. 상점과 차고는 `std::vector<std::unique_ptr<Car>>`로 차량을 소유하고, 구매 시 `std::move`로 소유권을 이전합니다. 현재 선택 차량은 `.get()`으로 얻은 observer pointer로 참조만 합니다.

## Contribution

- `Car` 추상 클래스 설계
- 파생 차량 타입 구현
- 랜덤 상점 생성
- `unique_ptr` 기반 상점/차고 소유권 분리
- `std::move` 기반 구매 처리
- 현재 차량 observer pointer 구조 정리
- 내구도 0 차량 제거 흐름 정리
