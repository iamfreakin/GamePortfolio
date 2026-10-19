window.PORTFOLIO = {
  "meta": {
    "title": "PolyDrive · 프로젝트 상세"
  },
  "profile": {
    "eyebrow": "PROJECT · C++ 콘솔 프로젝트",
    "name": "PolyDrive",
    "initial": "P",
    "links": [
      {
        "label": "← 프로젝트 목록",
        "href": "../../index.html#projects"
      },
      {
        "label": "iamfreakin/PolyDrive",
        "href": "https://github.com/iamfreakin/PolyDrive"
      }
    ],
    "motto": "다형성 · 소유권 · 객체 생명주기"
  },
  "sections": [
    {
      "type": "document",
      "id": "project-document",
      "title": "프로젝트 소개",
      "html": "<h3>Overview</h3><div class=\"document-table\"><table><tr><th>항목</th><th>내용</th></tr><tr><td>형태</td><td>C++ 콘솔 기반 하이웨이 운송 시뮬레이션</td></tr><tr><td>언어</td><td>C++</td></tr><tr><td>개발 형태</td><td>1인 개발</td></tr><tr><td>Repository</td><td><a href=\"https://github.com/iamfreakin/PolyDrive\" target=\"_blank\" rel=\"noopener\">iamfreakin/PolyDrive</a></td></tr></table></div><h3>Summary</h3><p>차량을 상속과 다형성으로 모델링하고, raw pointer 기반 객체 관리를 <code>std::unique_ptr</code> 소유권 구조로 정리한 C++ 콘솔 게임입니다.</p><h3>Problem</h3><p>서로 다른 차량 타입을 같은 게임 루프에서 관리해야 했고, 상점에서 구매한 차량은 차고로 소유권이 이동해야 했습니다. raw pointer로만 관리하면 상점과 차고 중 누가 객체를 소유하고 삭제하는지 불분명해질 수 있습니다.</p><h3>Implementation</h3><p><code>Car</code>를 추상 기반 클래스로 두고 <code>Bus</code>, <code>SportsCar</code>, <code>Truck</code>, <code>Sedan</code>이 같은 인터페이스를 구현하게 했습니다. 상점과 차고는 <code>std::vector&lt;std::unique_ptr&lt;Car&gt;&gt;</code>로 차량을 소유하고, 구매 시 <code>std::move</code>로 소유권을 이전합니다. 현재 선택 차량은 <code>.get()</code>으로 얻은 observer pointer로 참조만 합니다.</p><h3>Contribution</h3><ul><li><code>Car</code> 추상 클래스 설계</li><li>파생 차량 타입 구현</li><li>랜덤 상점 생성</li><li><code>unique_ptr</code> 기반 상점/차고 소유권 분리</li><li><code>std::move</code> 기반 구매 처리</li><li>현재 차량 observer pointer 구조 정리</li><li>내구도 0 차량 제거 흐름 정리</li></ul>"
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