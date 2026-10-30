# IYN | Precision Medical Knowledge & Data Intelligence

> **Enterprise Medical Knowledge Fabric & Provenance Engine**  
> Live Production: [https://iyn.one](https://iyn.one)

IYN은 흩어진 임상 논문, 비정형 전자의무기록(EHR), 다기관 온톨로지를 수학적 그래프 구조와 불변 이력(Provenance) 기반의 신뢰 가능한 데이터 인프라로 전환하는 오픈 의료 지식 아키텍처 프로젝트입니다.

---

## 🏛 Architecture Overview

```
                      [ Public Visitors / Clients ]
                                   │
                                   ▼
                      [ Cloudflare Edge Network ]
                        - WAF Rules (L7 Exploit Block)
                        - Edge Rate Limiting (60r/10s)
                        - SSL / TLS Full Termination
                                   │
                           (Cloudflare Tunnel)
                                   │
                                   ▼
                   [ Host Infrastructure (c1 node) ]
                     ┌───────────────────────────┐
                     │ Docker Network: default   │
                     │  - cloudflared container  │
                     │       │                   │
                     │       ▼ (HTTP:80)         │
                     │  - iyn-site (Nginx Alpine)│
                     │    ├─ Limit Conn (30)     │
                     │    ├─ Limit Req (30r/s)   │
                     │    └─ Static High-Perf V2 │
                     └───────────────────────────┘
```

---

## ✨ Key Features & Stack

* **Medical Knowledge Graph**: 실시간 캔버스 시뮬레이션을 통해 임상 컨셉(SNOMED CT), 바이오마커(HGNC), 약제(RxNorm), 원천 논문 근거(PMID/DOI) 토폴로지 탐색.
* **Poly-Ontology Harmonization**: 이기종 EMR 로컬 코드를 국제 표준 온톨로지(SNOMED CT, LOINC, ICD-10-CM)로 자동 정합.
* **Grounded Clinical Evidence**: Cochrane RoB-2 및 GRADE 1A 기반 PICO 임상 문헌 근거 추출 및 Merkle Tree 불변성 보증.
* **Regulatory FHIR Standards**: HL7 FHIR R4 규제 준수 데이터 번들 익스포트.
* **Zero-Trust Privacy**: 브라우저 로컬 암호화 샌드박스를 통한 문의 페이로드 생성 및 HIPAA 18개 식별자 원천 배제.

---

## 🚀 Deployment & Operations

### 1. Prerequisites
* Docker Engine 24+ & Docker Compose v2+
* Cloudflare Tunnel (`cloudflared`) 인증 토큰

### 2. Configuration
```bash
cp .env.example .env
# .env 파일에 Cloudflare Tunnel Token 기입 (권한 0600 권장)
chmod 600 .env
```

### 3. Run Stack
```bash
docker compose up -d
```

### 4. Verification
```bash
docker compose ps
curl -sI http://127.0.0.1:18081
```

---

## 📜 License
MIT License. Open semantic standards powered by W3C RDF, HL7 FHIR, and OHDSI OMOP CDM.
