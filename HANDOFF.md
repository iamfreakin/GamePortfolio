# 다른 PC에서 이어서 작업하기

```sh
git clone https://github.com/iamfreakin/GamePortfolio.git
cd GamePortfolio
```

`website/index.html`을 브라우저로 열면 됩니다. Node.js나 npm 설치는 필요하지 않습니다. 이미 복제했다면 `git pull`로 갱신합니다.

## 편집 위치

| 위치 | 내용 |
| --- | --- |
| website/assets/js/content.js | 원본 프로필과 경력, 프로젝트 목록 |
| website/assets/js/project-index.js | 요약·미리보기·상세 링크 렌더러 |
| website/assets/js/gyrovr-detail.js | GyroVR 상세 내용 |
| website/projects/프로젝트ID/content.js | 다른 프로젝트의 상세 내용 |
| website/assets/css | 원본 디자인과 미리보기 스타일 |
| projects/*.md | 기존 포트폴리오 허브의 프로젝트 문서 |

프로젝트 목록은 저장소의 실제 프로젝트 6개와 GyroVR로 구성했습니다. 기존 HTML 틀의 프로젝트 외 프로필·경력·학력·활동·관련 자료는 사용자 요청대로 보존했습니다. 그 영역을 임의로 정리하거나 삭제하지 않습니다.

GyroVR은 영상 미리보기, 다른 프로젝트는 개별 상세 페이지를 여는 미리보기를 사용합니다. 현재 문서에서 상세 페이지를 생성한 버전이므로 projects/*.md를 수정한 뒤 홈페이지 상세 내용에도 반영해야 합니다.

## 영상

website/assets/video/Seq_Master_1015.mp4는 전체 3분 54.3초를 담은 960×540 압축본입니다. 595MB 원본과 원본 활동일지는 이 저장소에 포함하지 않았습니다. 로컬 디스크에서 사용한 절대 경로 없이 폴더 안의 상대 경로로 연결했습니다.

이번 작업은 소스 커밋과 푸시입니다. GitHub Pages 등의 호스팅 설정은 추가하지 않았습니다.
