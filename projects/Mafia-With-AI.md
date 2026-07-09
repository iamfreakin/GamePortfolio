# Mafia With AI

## Overview

| 항목 | 내용 |
| --- | --- |
| 장르 | LLM 기반 온라인 마피아 게임 |
| 클라이언트 | Unity, C# |
| 게임 서버 | Node.js, WebSocket |
| AI 서버 | FastAPI, OpenAI API |
| 개발 형태 | 팀 프로젝트 |
| Repository | [wonhou/Mafia](https://github.com/wonhou/Mafia) |

## Summary

8명이 모이지 않으면 시작하기 어려운 마피아 게임의 진입 장벽을 AI 자동 보충과 WebSocket 기반 실시간 진행 서버로 낮췄습니다.

## Problem

마피아 게임은 사람이 충분히 모이지 않으면 게임이 시작되지 않습니다. 온라인 환경에서는 대기 시간이 길어질수록 참가자가 이탈하고, 방을 만들어도 실제 플레이까지 이어지기 어렵습니다.

## Implementation

게임 시작 시 서버가 현재 사람 플레이어 수를 계산하고, 부족한 인원을 AI player로 자동 보충합니다. 이후 역할 배정, 밤 행동, 낮 토론, 투표, 승리 조건은 사람과 AI를 같은 player list에서 처리합니다.

실시간 게임 진행은 Node.js WebSocket 서버가 담당하고, AI 판단은 FastAPI 서버로 분리했습니다. Unity 클라이언트는 서버 이벤트를 받아 UI를 갱신합니다.

## Contribution

- 부족 인원 기준 AI 자동 보충 흐름 정리
- Node.js WebSocket 기반 방/페이즈/투표 흐름 정리
- FastAPI AI 서버 endpoint 구조 정리
- Unity 클라이언트 이벤트 동기화 흐름 문서화
- 실행 스크립트, 서버 주소, AI memory 구조 개선점 분리

## Keywords

| 키워드 | 설명 |
| --- | --- |
| WebSocket | 방 상태와 게임 페이즈를 실시간 전달 |
| FastAPI | AI 발언, 밤 행동, 투표 추천 처리 |
| AI auto-fill | 부족 인원만큼 AI player 추가 |
| role prompt | 역할별 AI 행동과 발언 생성 |
| room state | 서버가 단일한 게임 판정 유지 |
