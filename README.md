| 구현 | 기능 설명                                |
| ---- | ---------------------------------------- |
| ❎   | Typescript 셋업                          |
| ❎   | Express 셋업                             |
| ❎   | Prisma 모델 스키마 생성 (User, Product)  |
| ❎   | 임시 라우터 설정과 GET POST 요청 관리    |
| ❎   | Planetscale에 연동과 실제 유저 생성 확인 |
| ❌   | 디렉토리 구조 설계 의논                  |
| ❌   | Prisma와 Planetscale 설명                |

---

### App 모델

<br>

```bash
├── common
│   ├── created (created time)
│   ├── modified (last update time)
├── user
│   ├── id          Int
│   ├── avatar      String
│   ├── userName    String
│   ├── phone       Int
│   └── product     Product[]
├── Product
│   ├── id          Int
│   ├── image       String
│   ├── name        String
│   ├── price       Int
│   ├── description String
│   ├── user        User
│   └── userId      Int
└──
```

<br>

---
