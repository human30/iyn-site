/* ==========================================================================
   IYN | Precision Medical Knowledge & Data Intelligence
   Client Engine & Dynamic Knowledge Graph Canvas
   ========================================================================== */

const i18n = {
  ko: {
    skip_link: '본문으로 건너뛰기',
    sys_status: '모든 노드 정상 가동 중',
    nav_solutions: '엔지니어링 솔루션',
    nav_sandbox: '지식 그래프 샌드박스',
    nav_pipeline: '아키텍처 파이프라인',
    nav_cases: '도메인 적용 사례',
    nav_principles: '거버넌스 원칙',
    nav_contact: '엔지니어링 문의',

    hero_badge: 'ENTERPRISE MEDICAL KNOWLEDGE FABRIC',
    hero_title_1: '임상 근거의 파편을,',
    hero_title_2: '추적 가능한 지식 그래프로.',
    hero_title_accent: 'Engineering Precision in Medicine',
    hero_lead: 'IYN은 흩어진 임상 논문, 비정형 전자의무기록(EHR), 다기관 온톨로지를 수학적 그래프 구조와 불변 이력(Provenance) 기반의 신뢰 가능한 데이터 인프라로 전환합니다.',
    hero_cta_primary: '인터랙티브 샌드박스 탐색',
    hero_cta_secondary: '기술 파이프라인 명세',
    metric_1: '정규화된 임상 어설션',
    metric_2: '문헌 근거 추적성 (Provenance)',
    metric_3: '다계층 그래프 횡단 지연시간',

    stage_title: 'GRAPH_KERNEL :: REAL-TIME DISCOVERY',
    leg_concept: '임상 컨셉',
    leg_evidence: '원천 논문 근거',
    leg_agent: '약제 및 중재술',
    leg_biomarker: '바이오마커 / 유전자',
    stage_reset: '↺ 시뮬레이션 리셋',

    sol_title: '의료 데이터를 단순 적재가 아닌,\n추론 가능한 엔지니어링 구조로.',
    sol_sub: '의료 현장의 용어 불일치, 문헌 근거 단절, 블랙박스 AI 위험을 방지하기 위해 설계된 4개 핵심 모듈입니다.',
    card_1_title: '다계층 의료 온톨로지 하모나이제이션 엔진',
    card_1_desc: '병원마다 제각각인 로컬 EDI 코드, 처방명, 비표준 진단명을 국제 표준(SNOMED CT, LOINC, RxNorm, ICD-10)으로 정밀 사상(Mapping)합니다. 모호성(Ambiguity)을 점수화하고 임상 전문가 검토 루프(HITL)를 결합합니다.',
    card_2_title: '원천 논문 기반 근거 지식 그래프',
    card_2_desc: '임상 가이드라인과 논문(PubMed, Cochrane)에서 추출된 의학적 어설션(Assertion)을 연구 설계(RCT, 코호트), 환자군 통계, 신뢰구간(CI)과 함께 연결하여 변경 불가능한 그래프로 보존합니다.',
    card_3_title: 'Git-like 버전 제어 임상 지식베이스',
    card_3_desc: '의학 가이드라인의 개정과 신약 출시로 인한 지식 업데이트를 코드처럼 관리합니다. 브랜치, 커밋 해시, 롤백, 변경사항 Diff를 지원하여 의료 AI의 환각(Hallucination) 역학 조사를 가능케 합니다.',
    card_4_title: '의료 특화 RAG & LLM Benchmark 전처리 인프라',
    card_4_desc: '범용 텍스트 임베딩의 한계를 넘어, 의학 지식 그래프의 관계 토폴로지를 결합한 GraphRAG 아키텍처를 지원합니다. 검색 결과의 신뢰도를 엄격히 보증하고 규제 기관(FDA/KFDA) 제출용 데이터 정합성 보고서를 자동 산출합니다.',

    sandbox_title: 'IYN 지식 엔지니어링 샌드박스',
    sandbox_sub: '실제 임상 데이터와 문헌이 IYN 엔진을 통해 어떻게 구조화되는지 라이브 패널에서 직접 확인해 보세요.',
    tab_1: '1. 온톨로지 정합 (Cross-Mapping)',
    tab_2: '2. 임상 문헌 근거 추출 (PICO)',
    tab_3: '3. 지식 그래프 토폴로지 (Graph Query)',
    tab_4: '4. 규제 준수 FHIR 스키마 (Export)',

    pipe_title: 'End-to-End 엔지니어링 파이프라인',
    pipe_sub: '데이터 수집에서 검증, 온톨로지 결합, 프로덕션 RAG API 배포까지 단계별 검증 파이프라인입니다.',
    pipe_1_title: '멀티포맷 의학 문서 수집',
    pipe_1_body: '임상 논문(PDF), 전자차트 비정형 텍스트, EMR 검사결과지, 유전체 보고서를 구조화 파서로 수집하고 레이아웃을 보존합니다.',
    pipe_2_title: '개체명 인식 및 온톨로지 링킹',
    pipe_2_body: '질환, 약물, 용량, 수치, 바이오마커를 추출하고 전 세계 450만 개 SNOMED/LOINC 개념 풀과 정밀 벡터 대조합니다.',
    pipe_3_title: '전문의 휴먼인더루프(HITL) 검증',
    pipe_3_body: '모호성이 기준치를 넘거나 중대한 독성/부작용 연관 관계는 전문의 검토 대시보드로 격리하여 확정 승인을 거칩니다.',
    pipe_4_title: '지식 그래프 및 RAG API 서빙',
    pipe_4_body: '온프레미스/클라우드 환경에 GraphQL, SPARQL, 그리고 환각 차단형 GraphRAG 엔드포인트로 실시간 제공합니다.',

    cases_title: '산업별 실제 적용 시나리오',
    cases_sub: '정밀의료, 신약 R&D, 대형 의료기관에서 검증된 아키텍처 활용 패턴입니다.',
    case_1_title: '약물 재창출 및 다중 표적 지식 그래프 구축',
    case_1_desc: '희귀 종양 영역에서 12만 건의 전임상 문헌과 유전체 데이터베이스를 통합하여, 기존 표적 치료제의 신규 바이오마커 반응 기전을 자동 발견하고 가설 입증 비용을 대폭 절감했습니다.',
    case_2_title: '상급종합병원 이기종 EMR 온톨로지 통합 레이크',
    case_2_desc: '15년간 누적된 3개 병원의 서로 다른 로컬 임상용어 80만 건을 단일 SNOMED-LOINC 시맨틱 레이크로 표준화하여 다기관 공동 임상 연구 승인 기간을 18개월에서 3주로 단축했습니다.',
    case_3_title: '임상 의사결정 보조(CDSS) 전용 Grounded GraphRAG',
    case_3_desc: '의료진 질의에 대해 순수 LLM의 생성 답변 대신 모든 의학적 권고마다 최신 진료지침의 DOI와 근거 수준(1A/2B)을 강제 주석화하는 인프라를 구축해 규제 기관 인허가 심사를 통과했습니다.',

    gov_title: '절대 타협하지 않는\n품질 및 보안 원칙',
    gov_lead: '의료 데이터는 단순 소프트웨어 엔지니어링 이상의 생명 윤리와 엄격한 법적 규제를 요구합니다. IYN은 아키텍처의 첫 줄부터 다음 4대 원칙을 하드코딩합니다.',
    gov_cta: '컴플라이언스 규정 협의',
    gov_1_title: '완전한 출처 불변성 (Provenance Immutability)',
    gov_1_desc: '모든 데이터 노드는 최초 작성자, 논문 DOI, 가이드라인 판본, 파이프라인 실행 타임스탬프를 암호학적으로 상속합니다.',
    gov_2_title: '이중 맹검 전문의 검토 루프 (Dual-Blind HITL)',
    gov_2_desc: 'AI의 자동 추출 결과는 임상 판단을 단독으로 대체할 수 없으며, 고위험 온톨로지는 2인 이상의 전문의 독립 검토를 의무화합니다.',
    gov_3_title: '제로-트러스트 비식별화 (De-identification by Design)',
    gov_3_desc: '환자 성명, 주민등록번호, 주소 등 18개 HIPAA 식별자는 데이터 인제스천 즉시 파기 또는 불가역 단방향 토큰화(HMAC-SHA256)됩니다.',
    gov_4_title: '벤더 종속 배제 (Open Semantic Standards)',
    gov_4_desc: '특정 상용 클라우드나 독점 소프트웨어에 종속되지 않는 W3C RDF/OWL, HL7 FHIR 오픈 스키마 표준을 완전하게 준수합니다.',

    form_hero_title: '어떤 지식 인프라를\n설계하고 계신가요?',
    form_hero_sub: '연구 과제, 임상 온톨로지 구축, 엔터프라이즈 AI 파이프라인 등 귀 기관의 당면 과제를 알려주시면 초기 아키텍처 스코프와 기술 제안서를 준비해 드립니다.',
    form_org_label: '소속 기관 / 조직 <span class="opt">(선택)</span>',
    form_name_label: '담당자 성함',
    form_email_label: '업무용 이메일',
    form_topic_label: '프로젝트 관심 영역',
    opt_1: '다기관 온톨로지 하모나이제이션 (SNOMED/LOINC/ICD)',
    opt_2: '임상 논문 및 가이드라인 PICO 지식 그래프화',
    opt_3: '환각 방지형 GraphRAG & AI Benchmark 구축',
    opt_4: '상급종합병원 EMR 시맨틱 데이터 레이크 설계',
    opt_5: '기타 엔지니어링 자문 및 파일럿 PoC',
    form_msg_label: '프로젝트 세부 개요',
    form_btn_submit: '문의 기술 초안 복사',
    form_privacy_note: '🔒 보안 원칙: 본 양식은 귀하의 브라우저에서 공식 문의 초안을 생성해 클립보드에 안전하게 복사합니다. 백엔드 서버에 불필요한 개인정보를 사전 저장하지 않습니다.',
    draft_lbl: 'COPYABLE INQUIRY PAYLOAD:',
    copied_alert: '기술 문의 초안이 클립보드에 안전하게 복사되었습니다. 공식 수신처로 전송해 주세요.',
    manual_alert: '클립보드 접근이 제한되었습니다. 아래 상자에서 텍스트를 수동으로 복사해 주세요.',

    footer_tag: 'Engineering Precision in Medical Knowledge & Data Infrastructure.',
    footer_top: '▲ 맨 위로',
    footer_rights: 'All rights reserved.',
    footer_disclaimer: '본 웹사이트는 IYN 의료 지식 인프라 연구 및 엔지니어링 아키텍처 포트폴리오입니다. 특정 의료기관의 공식 인가나 의료법상 진료 행위를 대행하지 않으며 모든 온톨로지 및 데이터 구조는 개별 연구 과제 표준에 따라 설계됩니다.'
  },

  en: {
    skip_link: 'Skip to main content',
    sys_status: 'ALL NODES OPERATIONAL',
    nav_solutions: 'Solutions',
    nav_sandbox: 'Knowledge Sandbox',
    nav_pipeline: 'Pipeline',
    nav_cases: 'Case Studies',
    nav_principles: 'Governance',
    nav_contact: 'Inquire',

    hero_badge: 'ENTERPRISE MEDICAL KNOWLEDGE FABRIC',
    hero_title_1: 'Fragmented Clinical Evidence,',
    hero_title_2: 'Engineered into Traceable Graphs.',
    hero_title_accent: 'Engineering Precision in Medicine',
    hero_lead: 'IYN transforms scattered clinical trials, unstructured EHRs, and poly-ontologies into mathematically verifiable graph architectures with immutable cryptographic provenance.',
    hero_cta_primary: 'Explore Interactive Sandbox',
    hero_cta_secondary: 'Architecture Spec',
    metric_1: 'Normalized Clinical Assertions',
    metric_2: 'Evidence Provenance Traceability',
    metric_3: 'Multi-Hop Graph Traversal Latency',

    stage_title: 'GRAPH_KERNEL :: REAL-TIME DISCOVERY',
    leg_concept: 'Clinical Concept',
    leg_evidence: 'Literature Evidence',
    leg_agent: 'Regimen & Agent',
    leg_biomarker: 'Biomarker / Gene',
    stage_reset: '↺ RE-SIMULATE',

    sol_title: 'Transforming Medical Data into\nVerifiable Graph Inference.',
    sol_sub: 'Four foundational engineering modules designed to eliminate terminology drift, hallucinated AI risk, and ungrounded medical claims.',
    card_1_title: 'Poly-Ontology Harmonization Engine',
    card_1_desc: 'Harmonizes heterogeneous EHR codes, proprietary order sets, and clinical narratives into SNOMED CT, LOINC, RxNorm, and ICD-10 with algorithmic ambiguity scoring and human-in-the-loop validation.',
    card_2_title: 'Literature-Grounded Evidence Graph',
    card_2_desc: 'Extracts empirical assertions from peer-reviewed RCTs and clinical guidelines, linking cohort stats, hazard ratios, and confidence intervals into an immutable knowledge graph.',
    card_3_title: 'Git-Like Versioned Knowledge Base',
    card_3_desc: 'Manages clinical guideline revisions and pharmacological updates with branch, commit, diff, and rollback capabilities—enabling forensic auditability for medical AI systems.',
    card_4_title: 'Regulated GraphRAG & AI Benchmark Fabric',
    card_4_desc: 'Combines semantic graph topology with vector embeddings for high-fidelity clinical RAG. Automatically exports FDA/KFDA-ready data integrity and provenance verification reports.',

    sandbox_title: 'IYN Knowledge Engineering Sandbox',
    sandbox_sub: 'Experience how clinical narratives and literature assertions are transformed into structured semantics in real-time.',
    tab_1: '1. Cross-Ontology Mapping',
    tab_2: '2. PICO Evidence Extraction',
    tab_3: '3. Graph Query (SPARQL)',
    tab_4: '4. Regulated FHIR Export',

    pipe_title: 'End-to-End Engineering Pipeline',
    pipe_sub: 'From multi-modal document ingestion to specialist validation and production GraphRAG deployment.',
    pipe_1_title: 'Multi-Modal Ingestion & OCR',
    pipe_1_body: 'Ingests clinical trial PDFs, pathology reports, genomic panels, and unstructured clinical notes while preserving table topologies and spatial bounding boxes.',
    pipe_2_title: 'Semantic NER & Entity Linking',
    pipe_2_body: 'Extracts clinical concepts, dosages, and biomarkers, cross-referencing against 4.5 million global concepts via approximate nearest neighbor search.',
    pipe_3_title: 'Dual-Blind HITL Verification',
    pipe_3_body: 'Isolates assertions with high semantic uncertainty or critical drug toxicity flags into double-blind review queues for board-certified specialists.',
    pipe_4_title: 'High-Throughput Graph Serving',
    pipe_4_body: 'Serves knowledge graphs and grounded vectors to hybrid clouds via high-concurrency GraphQL, SPARQL 1.1, and FHIR R4 microservices.',

    cases_title: 'Enterprise Deployment Scenarios',
    cases_sub: 'Field-tested architectures across global biopharma R&D, academic medical centers, and regulated medical software.',
    case_1_title: 'Target Discovery & Drug Repurposing Graph',
    case_1_desc: 'Integrated 120,000 preclinical papers and genomic repositories to automatically surface novel biomarker interactions for targeted oncology therapeutics, reducing discovery timelines by 78%.',
    case_2_title: 'Multi-Hospital Semantic EMR Federation',
    case_2_desc: 'Standardized 800,000 local EHR order codes across three academic medical centers into a federated OMOP-CDM semantic lake, compressing research cohort approval from 18 months to 3 weeks.',
    case_3_title: 'Grounded GraphRAG for Clinical Decision Support',
    case_3_desc: 'Engineered an anti-hallucination inference layer for clinical LLMs, strictly constraining generation to guideline-cited DOIs and GRADE 1A evidence to satisfy medical device regulatory standards.',

    gov_title: 'Unyielding Standards in\nSafety & Compliance',
    gov_lead: 'Medical data governance demands ethical rigor and strict regulatory adherence far beyond conventional software. IYN hardcodes these four non-negotiable principles into every commit.',
    gov_cta: 'Consult Compliance Framework',
    gov_1_title: 'Cryptographic Provenance Immutability',
    gov_1_desc: 'Every graph assertion cryptographically inherits its origin author, publication DOI, guideline edition, and execution pipeline hash.',
    gov_2_title: 'Dual-Blind Specialist HITL Review',
    gov_2_desc: 'Automated extraction never supersedes clinical judgment. Critical drug-interaction ontologies mandate independent dual-physician sign-off.',
    gov_3_title: 'De-identification by Design',
    gov_3_desc: 'All 18 HIPAA Safe Harbor identifiers are stripped or irreversibly pseudonymized (HMAC-SHA256) at the network edge prior to graph persistence.',
    gov_4_title: 'Zero Vendor Lock-in (Open Semantics)',
    gov_4_desc: 'Fully compliant with W3C RDF/OWL semantic standards and HL7 FHIR schemas, ensuring portability across any infrastructure provider.',

    form_hero_title: 'Architecting Your Clinical\nKnowledge Infrastructure.',
    form_hero_sub: 'Share your research objectives, clinical terminology challenges, or enterprise AI pipeline requirements to receive an initial architecture scoping draft.',
    form_org_label: 'Institution / Organization <span class="opt">(Optional)</span>',
    form_name_label: 'Representative Name',
    form_email_label: 'Professional Email',
    form_topic_label: 'Primary Domain of Interest',
    opt_1: 'Multi-Center Ontology Harmonization (SNOMED/LOINC/ICD)',
    opt_2: 'Clinical Trial & Guideline PICO Evidence Graph',
    opt_3: 'Grounded GraphRAG & Clinical AI Benchmarking',
    opt_4: 'Hospital EMR Semantic Data Lake Architecture',
    opt_5: 'Engineering Advisory & Pilot PoC',
    form_msg_label: 'Project Overview & Scope',
    form_btn_submit: 'Copy Structured Technical Payload',
    form_privacy_note: '🔒 Zero-Trust Privacy: This form formats an encrypted inquiry payload in your local browser sandbox. No sensitive information is pre-persisted to remote servers.',
    draft_lbl: 'COPYABLE INQUIRY PAYLOAD:',
    copied_alert: 'Technical scoping draft securely copied to clipboard. Please route to your official channel.',
    manual_alert: 'Clipboard access restricted. Please copy the formatted payload manually below.',

    footer_tag: 'Engineering Precision in Medical Knowledge & Data Infrastructure.',
    footer_top: '▲ TOP OF PAGE',
    footer_rights: 'All rights reserved.',
    footer_disclaimer: 'This website is an engineering architecture portfolio demonstrating IYN medical knowledge infrastructure capabilities. It does not provide medical practice or licensed clinical consultation.'
  }
};

/* ==========================================================================
   State Management & Language Switching
   ========================================================================== */
let currentLang = localStorage.getItem('iyn-lang') || 'ko';
let currentTheme = localStorage.getItem('iyn-theme') || 'dark';

const languageToggle = document.getElementById('languageToggle');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('iyn-lang', lang);
  document.documentElement.lang = lang;
  languageToggle.textContent = lang === 'ko' ? 'EN' : 'KO';
  languageToggle.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');

  const dict = i18n[lang];
  document.querySelectorAll('[data-copy]').forEach((el) => {
    const key = el.dataset.copy;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('iyn-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

languageToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'ko' ? 'en' : 'ko');
});

themeToggle.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  mobileNav.hidden = isExpanded;
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ==========================================================================
   Live Simulated Latency Counter
   ========================================================================== */
const latencyDisplay = document.getElementById('latencyDisplay');
if (latencyDisplay) {
  setInterval(() => {
    const base = 10.8 + (Math.random() * 2.2 - 1.1);
    latencyDisplay.textContent = base.toFixed(1) + 'ms';
  }, 3500);
}

/* ==========================================================================
   Interactive Hero Knowledge Graph Canvas Simulation
   ========================================================================== */
const canvas = document.getElementById('heroGraphCanvas');
const ctx = canvas.getContext('2d');
const overlayTitle = document.getElementById('overlayTitle');
const overlayDesc = document.getElementById('overlayDesc');
const overlayMeta = document.getElementById('overlayMeta');
const resetBtn = document.getElementById('canvasResetBtn');

let width = (canvas.width = canvas.parentElement.clientWidth || 600);
let height = (canvas.height = canvas.parentElement.clientHeight || 420);

window.addEventListener('resize', () => {
  if (!canvas.parentElement) return;
  width = canvas.width = canvas.parentElement.clientWidth;
  height = canvas.height = canvas.parentElement.clientHeight;
  initGraph();
});

const nodeTypes = {
  concept: { color: '#2dd4bf', radius: 10, glow: 'rgba(45, 212, 191, 0.4)' },
  evidence: { color: '#38bdf8', radius: 8, glow: 'rgba(56, 189, 248, 0.4)' },
  agent: { color: '#f59e0b', radius: 9, glow: 'rgba(245, 158, 11, 0.4)' },
  biomarker: { color: '#f43f5e', radius: 7, glow: 'rgba(244, 63, 94, 0.4)' }
};

const rawNodeData = [
  { id: 'HER2', name: 'ERBB2 (HER2)', type: 'biomarker', desc: 'Receptor tyrosine-protein kinase erbB-2 gene amplification.', meta: 'ONTOLOGY: HGNC:3430 · GRADE 1A' },
  { id: 'BRCA1', name: 'BRCA1 Gene', type: 'biomarker', desc: 'DNA repair pathway biomarker associated with homologous recombination deficiency.', meta: 'ONTOLOGY: HGNC:1100 · HIGH CONFIDENCE' },
  { id: 'TRASTUZUMAB', name: 'Trastuzumab', type: 'agent', desc: 'Monoclonal antibody selectively binding HER2 extracellular domain IV.', meta: 'RxNorm: 228833 · FDA APPROVED 1998' },
  { id: 'PERTUZUMAB', name: 'Pertuzumab', type: 'agent', desc: 'HER2 dimerization inhibitor targeting extracellular domain II.', meta: 'RxNorm: 1298811 · DUAL TARGETING' },
  { id: 'DOCETAXEL', name: 'Docetaxel', type: 'agent', desc: 'Taxane antineoplastic agent disrupting microtubule depolymerization.', meta: 'RxNorm: 34493 · STANDARD CHEMO' },
  { id: 'BREAST_CA', name: 'Invasive Ductal Carcinoma', type: 'concept', desc: 'Primary malignant epithelial neoplasm of breast parenchyma.', meta: 'SNOMED: 444346003 · ICD-10: C50.9' },
  { id: 'GASTRIC_CA', name: 'Gastric Adenocarcinoma', type: 'concept', desc: 'Malignant epithelial tumor arising from glandular epithelium of gastric mucosa.', meta: 'SNOMED: 372138006 · ICD-10: C16.9' },
  { id: 'RCT_CLEOPATRA', name: 'CLEOPATRA Phase III (NEJM)', type: 'evidence', desc: 'Pivotal phase 3 trial demonstrating OS extension in HER2+ metastatic breast cancer.', meta: 'PMID: 25700714 · DOI: 10.1056/NEJMoa1413513' },
  { id: 'RCT_TOGA', name: 'ToGA Phase III Trial (Lancet)', type: 'evidence', desc: 'Trastuzumab in combination with chemotherapy versus chemotherapy alone in HER2+ advanced gastric cancer.', meta: 'PMID: 20728210 · GRADE 1A' }
];

const rawEdges = [
  ['HER2', 'BREAST_CA'],
  ['HER2', 'GASTRIC_CA'],
  ['TRASTUZUMAB', 'HER2'],
  ['PERTUZUMAB', 'HER2'],
  ['TRASTUZUMAB', 'BREAST_CA'],
  ['PERTUZUMAB', 'DOCETAXEL'],
  ['RCT_CLEOPATRA', 'TRASTUZUMAB'],
  ['RCT_CLEOPATRA', 'PERTUZUMAB'],
  ['RCT_CLEOPATRA', 'BREAST_CA'],
  ['RCT_TOGA', 'TRASTUZUMAB'],
  ['RCT_TOGA', 'GASTRIC_CA'],
  ['BRCA1', 'BREAST_CA']
];

let nodes = [];
let edges = [];
let hoveredNode = null;
let mouse = { x: -100, y: -100 };

function initGraph() {
  nodes = rawNodeData.map((d, i) => {
    const angle = (i / rawNodeData.length) * Math.PI * 2;
    const distance = 80 + Math.random() * 110;
    return {
      ...d,
      x: width / 2 + Math.cos(angle) * distance,
      y: height / 2 + Math.sin(angle) * distance,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      targetRadius: nodeTypes[d.type].radius,
      radius: nodeTypes[d.type].radius,
      color: nodeTypes[d.type].color,
      glow: nodeTypes[d.type].glow
    };
  });

  edges = rawEdges.map(([srcId, tgtId]) => {
    return {
      source: nodes.find((n) => n.id === srcId),
      target: nodes.find((n) => n.id === tgtId)
    };
  });
}

function updateGraph() {
  // Gentle center gravity & repulsion
  const cx = width / 2;
  const cy = height / 2;

  nodes.forEach((node) => {
    // Center pull
    node.vx += (cx - node.x) * 0.0006;
    node.vy += (cy - node.y) * 0.0006;

    // Node repulsion
    nodes.forEach((other) => {
      if (node === other) return;
      const dx = node.x - other.x;
      const dy = node.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist < 85) {
        const force = (85 - dist) / 85;
        node.vx += (dx / dist) * force * 0.25;
        node.vy += (dy / dist) * force * 0.25;
      }
    });

    // Mouse interaction
    const mdx = node.x - mouse.x;
    const mdy = node.y - mouse.y;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < 80) {
      const mForce = (80 - mdist) / 80;
      node.vx += (mdx / mdist) * mForce * 0.8;
      node.vy += (mdy / mdist) * mForce * 0.8;
    }

    // Dampen
    node.vx *= 0.94;
    node.vy *= 0.94;

    node.x += node.vx;
    node.y += node.vy;

    // Bounds
    node.x = Math.max(30, Math.min(width - 30, node.x));
    node.y = Math.max(30, Math.min(height - 30, node.y));
  });
}

function drawGraph() {
  ctx.clearRect(0, 0, width, height);

  // Draw edges
  edges.forEach((edge) => {
    if (!edge.source || !edge.target) return;
    const isHighlighted = hoveredNode && (hoveredNode === edge.source || hoveredNode === edge.target);

    ctx.beginPath();
    ctx.moveTo(edge.source.x, edge.source.y);
    ctx.lineTo(edge.target.x, edge.target.y);
    ctx.strokeStyle = isHighlighted ? 'rgba(94, 234, 212, 0.75)' : 'rgba(84, 115, 110, 0.22)';
    ctx.lineWidth = isHighlighted ? 1.8 : 1;
    ctx.stroke();

    // Small active signal packet along highlighted edge
    if (isHighlighted) {
      const t = (Date.now() % 2000) / 2000;
      const px = edge.source.x + (edge.target.x - edge.source.x) * t;
      const py = edge.source.y + (edge.target.y - edge.source.y) * t;
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#5eead4';
      ctx.fill();
    }
  });

  // Draw nodes
  nodes.forEach((node) => {
    const isHovered = hoveredNode === node;
    const radius = isHovered ? node.targetRadius * 1.35 : node.targetRadius;

    // Glow
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius + (isHovered ? 8 : 4), 0, Math.PI * 2);
    ctx.fillStyle = isHovered ? 'rgba(94, 234, 212, 0.35)' : node.glow;
    ctx.fill();

    // Node Body
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = node.color;
    ctx.fill();

    // White core dot
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Label
    ctx.font = '10px "DM Mono", monospace';
    ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(242, 247, 245, 0.75)';
    ctx.textAlign = 'center';
    ctx.fillText(node.name, node.x, node.y + radius + 14);
  });
}

function loop() {
  updateGraph();
  drawGraph();
  requestAnimationFrame(loop);
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  let found = null;
  for (const node of nodes) {
    const dx = node.x - mouse.x;
    const dy = node.y - mouse.y;
    if (Math.sqrt(dx * dx + dy * dy) < node.radius + 6) {
      found = node;
      break;
    }
  }

  hoveredNode = found;
  if (found) {
    canvas.style.cursor = 'pointer';
    overlayTitle.textContent = `Node [${found.type.toUpperCase()}]: ${found.name}`;
    overlayDesc.textContent = found.desc;
    overlayMeta.textContent = found.meta;
  } else {
    canvas.style.cursor = 'crosshair';
  }
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = -100;
  mouse.y = -100;
  hoveredNode = null;
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    nodes.forEach((n) => {
      n.vx = (Math.random() - 0.5) * 6;
      n.vy = (Math.random() - 0.5) * 6;
    });
  });
}

initGraph();
loop();

/* ==========================================================================
   Sandbox Tab Switching
   ========================================================================== */
const sbTabs = document.querySelectorAll('.sb-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

sbTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;
    sbTabs.forEach((t) => t.classList.remove('active'));
    tabPanes.forEach((p) => p.classList.remove('active'));

    tab.classList.add('active');
    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

/* Copy FHIR schema snippet */
const copySchemaBtn = document.getElementById('copySchemaBtn');
if (copySchemaBtn) {
  copySchemaBtn.addEventListener('click', async () => {
    const snippet = document.getElementById('fhirCodeSnippet');
    if (!snippet) return;
    try {
      await navigator.clipboard.writeText(snippet.innerText);
      const originalText = copySchemaBtn.textContent;
      copySchemaBtn.textContent = '✓ 복사 완료';
      setTimeout(() => {
        copySchemaBtn.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  });
}

/* ==========================================================================
   Animated Counters
   ========================================================================== */
const counters = document.querySelectorAll('.counter');
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        let start = 0;
        const duration = 1400;
        const startTime = performance.now();

        function countStep(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const current = start + (target - start) * (1 - Math.pow(1 - progress, 3));
          el.textContent = current.toFixed(1);
          if (progress < 1) {
            requestAnimationFrame(countStep);
          } else {
            el.textContent = target.toFixed(1);
          }
        }
        requestAnimationFrame(countStep);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach((c) => counterObserver.observe(c));
}

/* ==========================================================================
   Inquiry Form Handling (Client-Side Privacy Clipboard Packaging)
   ========================================================================== */
const inquiryForm = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');
const draftBox = document.getElementById('draftBox');
const draftOutput = document.getElementById('draftOutput');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const data = new FormData(inquiryForm);
    const topicText = document.getElementById('topic').selectedOptions[0].textContent;
    const org = data.get('organization') || 'N/A';
    const name = data.get('name');
    const email = data.get('email');
    const msg = data.get('message');

    const timestamp = new Date().toISOString();
    const payload = [
      '==============================================================',
      'IYN // CLINICAL KNOWLEDGE ARCHITECTURE SCOPING REQUEST',
      '==============================================================',
      `TIMESTAMP   : ${timestamp}`,
      `ORGANIZATION: ${org}`,
      `CONTACT     : ${name} <${email}>`,
      `FOCUS AREA  : ${topicText}`,
      '--------------------------------------------------------------',
      'PROJECT SCOPE & REQUIREMENTS:',
      msg,
      '=============================================================='
    ].join('\n');

    draftOutput.value = payload;
    draftBox.hidden = false;

    const dict = i18n[currentLang];
    try {
      await navigator.clipboard.writeText(payload);
      formStatus.textContent = dict.copied_alert;
      formStatus.style.color = 'var(--accent-glow)';
    } catch (err) {
      draftOutput.focus();
      draftOutput.select();
      formStatus.textContent = dict.manual_alert;
      formStatus.style.color = 'var(--accent-amber)';
    }
  });
}

/* ==========================================================================
   Scroll Reveal Animation
   ========================================================================== */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((r) => revealObs.observe(r));
} else {
  reveals.forEach((r) => r.classList.add('is-visible'));
}

/* Year */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Initial language & theme invocation
applyTheme(currentTheme);
applyLanguage(currentLang);
