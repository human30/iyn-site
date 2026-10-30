/* ==========================================================================
   IYN | Precision Clinical Informatics & Knowledge Graph Specification
   Zero-Bloat Lightweight Client Script (No heavy animation loops)
   ========================================================================== */

const i18n = {
  ko: {
    skip_link: '본문 바로가기',
    nav_thesis: '문제 정의',
    nav_harmonization: '온톨로지 정합',
    nav_pico: '임상 근거 그래프',
    nav_graphrag: 'GraphRAG 아키텍처',
    nav_spec: '기술 규격 & FHIR',
    nav_contact: '문의',

    hero_subhead: 'Enterprise Clinical Informatics Whitepaper',
    hero_mainhead: '임상 온톨로지 하모나이제이션과 추적 가능한 의료 지식 그래프',
    hero_serif: 'Mathematical Provenance & Regulated GraphRAG Architecture',
    hero_summary: '의료 현장의 비정형 기록, 병원별 상이한 로컬 오더 코드, 파편화된 임상시험 논문을 단일화된 다계층 온톨로지(SNOMED CT, LOINC, RxNorm, OMOP CDM)와 수학적 방향성 그래프(Directed Knowledge Graph)로 정합합니다. 모든 의학적 어설션(Assertion)에 대해 원천 문헌(DOI/PMID), 가이드라인 버전, 증거 수준(GRADE 1A)을 암호학적으로 추적 보증합니다.',

    m_1: '정규화된 트리플 (RDF Triples)',
    m_2: '매핑된 글로벌 개념 (UMLS/SNOMED)',
    m_3: '엔티티 링킹 F1-Score (NCBI)',
    m_4: '4-Hop 지식 횡단 지연시간',

    sec_1_label: 'CORE THESIS',
    sec_1_title: '의료 AI와 전자의무기록(EMR)의 핵심 결함: 맥락과 온톨로지의 단절',
    sec_1_p1: '현재 임상 현장의 디지털 데이터는 <strong>(1) 표현형의 비표준 파편화</strong>, <strong>(2) 원천 문헌 근거의 분실</strong>, <strong>(3) 대규모 언어모델(LLM)의 생성 환각(Hallucination)</strong>이라는 세 가지 중대한 병목에 직면해 있습니다. 병원마다 같은 혈액 검사나 질환명에 서로 다른 로컬 청구 코드(EDI)를 부여하며, 임상 의사결정 보조 시스템(CDSS)은 권고 사항의 출처가 되는 무작위대조시험(RCT)의 인구군이나 통계적 신뢰구간(CI)을 검증하지 못한 채 텍스트를 생성합니다.',
    callout_1_title: '✦ THE TRIPLE DISCONNECT IN CLINICAL INFORMATICS',
    c_list_1_h: '용어 표류 (Terminology Drift):',
    c_list_2_h: '근거 휘발 (Evidence Evaporation):',
    c_list_3_h: '밀집 벡터 검색(Dense Vector RAG)의 구조적 한계:',
    sec_1_p2: 'IYN 아키텍처는 이를 해결하기 위해 단순한 텍스트 임베딩 대신, <strong>시맨틱 지식 그래프(Semantic Knowledge Graph)</strong>와 <strong>W3C RDF/OWL 명세</strong>, <strong>HL7 FHIR R4 표준</strong>을 결합한 결정론적(Deterministic) 추론 레이어를 구축합니다.',

    sec_2_label: 'ONTOLOGY HARMONIZATION',
    sec_2_title: '다기관 임상 용어 정밀 사상 (Poly-Ontology Harmonization)',
    sec_2_p1: '국내외 3차 상급종합병원 및 검사 수탁기관의 이기종 코드를 <strong>SNOMED CT</strong>(질환·해부학·소견), <strong>LOINC</strong>(진단검사), <strong>RxNorm</strong>(성분·제형), <strong>ICD-10-CM / ICD-11</strong>(진단 분류), <strong>OMOP CDM</strong>(공통데이터모델)으로 정밀 정규화하는 실제 파이프라인 명세입니다.',
    tech_card_1_h: '단위 변환 및 참조범위(Reference Range) 보정 알고리즘',
    tech_card_1_p: '단순 명칭 매핑에 그치지 않고, 임상 검사항목의 측정 원리(Methodology), 표준 단위 변환(예: Blood Glucose mg/dL ↔ mmol/L, 환산계수 0.0555), 환자 연령·성별에 따른 참조 범위 표류(Drift)를 수학적으로 정규화하여 다기관 데이터 결합 시 발생하는 통계적 오차를 사전 차단합니다.',

    sec_3_label: 'EVIDENCE PROVENANCE',
    sec_3_title: '원천 논문 기반 PICO 구조화 및 불변 근거 그래프 (Evidence Graph)',
    sec_3_p1: '권고 사항의 신뢰성은 무작위대조시험(RCT)의 엄밀한 계량화에서 시작됩니다. IYN의 근거 엔진은 의학 논문에서 환자군(Population), 중재술(Intervention), 대조군(Comparison), 임상결과(Outcome)와 함께 위험비(Hazard Ratio), 신뢰구간(CI), Cochrane 편향 위험(RoB-2)을 구조화하여 보존합니다.',

    sec_4_label: 'RETRIEVAL ARCHITECTURE',
    sec_4_title: '임상 의사결정을 위한 결정론적 GraphRAG 아키텍처',
    sec_4_p1: '순수 벡터 검색(Vector RAG)은 어휘적 유사성에 의존하므로, <em>"신장 기능 저하(eGFR < 30) 환자에게 메트포르민 투여가 금기되는 생리학적 경로"</em>와 같은 인과 관계를 추적할 수 없습니다. IYN GraphRAG 엔진은 RDF 지식 트리플과 온톨로지 계층을 활용하여 정확한 제약 조건을 사전에 검증합니다.',

    sec_5_label: 'STANDARDS & CODE EXPORT',
    sec_5_title: '국제 규제 준수 HL7 FHIR R4 데이터 교환 규격',
    sec_5_p1: '모든 정합된 지식은 미국 21st Century Cures Act 및 국내 보건의료 마이데이터 표준인 <strong>HL7 FHIR R4 Bundle</strong> 구조로 직렬화되어, 전자의무기록 시스템(EHR) 및 보건의료 규제기관 제출 시 100% 상호운용성을 보장합니다.',

    sec_6_label: 'ENGAGEMENT',
    sec_6_title: '아키텍처 자문 및 임상 데이터 프로젝트 문의',
    sec_6_p1: '의료기관의 다기관 데이터 연계, 제약·바이오 표적 지식 그래프 구축, 규제 준수 의료 AI 파이프라인 개발 등 기술적 협력이 필요한 과제에 대해 상세한 아키텍처 스코핑 제안을 제공합니다.',
    f_org_l: 'ORGANIZATION // 소속 기관',
    f_name_l: 'NAME // 담당자 성함',
    f_email_l: 'EMAIL // 업무용 이메일',
    f_domain_l: 'DOMAIN // 프로젝트 분야',
    f_d_1: 'EMR 온톨로지 하모나이제이션 (SNOMED / LOINC / OMOP)',
    f_d_2: '임상 논문 PICO 추출 및 GraphRAG 인프라',
    f_d_3: '의료기기 AI(SaMD) 규제 인허가 데이터 정합성 검증',
    f_d_4: '다기관 분산 코호트(OMOP-CDM) 레이크 구축',
    f_d_5: '기타 연구 과제 및 기술 자문',
    f_msg_l: 'PROJECT SPECIFICATION // 연구 및 개발 개요',
    f_submit: 'CREATE TECHNICAL PAYLOAD ↗',
    f_privacy: '🔒 ZERO-TRUST: 브라우저 내부에서 공식 문의 초안을 생성하여 클립보드에 복사합니다. 서버 사전 저장이 없습니다.',
    foot_desc: 'Enterprise Medical Knowledge Infrastructure & Ontological Harmonization Platform.'
  },

  en: {
    skip_link: 'Skip to main content',
    nav_thesis: 'Thesis',
    nav_harmonization: 'Harmonization',
    nav_pico: 'Evidence Graph',
    nav_graphrag: 'GraphRAG',
    nav_spec: 'FHIR Spec',
    nav_contact: 'Inquire',

    hero_subhead: 'Enterprise Clinical Informatics Whitepaper',
    hero_mainhead: 'Clinical Ontology Harmonization and Traceable Knowledge Graphs',
    hero_serif: 'Mathematical Provenance & Regulated GraphRAG Architecture',
    hero_summary: 'Harmonizes unstructured clinical narratives, heterogeneous hospital order sets, and clinical trials into a unified poly-ontology (SNOMED CT, LOINC, RxNorm, OMOP CDM) and directed knowledge graph. Cryptographically traces and verifies primary literature sources (DOI/PMID), guideline revisions, and evidence confidence levels (GRADE 1A) for every medical assertion.',

    m_1: 'Normalized RDF Triples',
    m_2: 'Mapped Global Concepts (UMLS/SNOMED)',
    m_3: 'Entity Linking F1-Score (NCBI)',
    m_4: '4-Hop Knowledge Traversal Latency',

    sec_1_label: 'CORE THESIS',
    sec_1_title: 'The Core Pathology of Medical AI & EHRs: Contextual Disconnect',
    sec_1_p1: 'Modern clinical digital data faces three critical bottlenecks: <strong>(1) Non-standard phenotypic fragmentation</strong>, <strong>(2) Evidence evaporation</strong>, and <strong>(3) Hallucinatory text generation in LLMs</strong>. Hospitals assign proprietary local order codes (EDI) to identical diagnostic tests and pathologies, while clinical decision support systems (CDSS) generate clinical prose without validating target populations or confidence intervals from randomized controlled trials (RCTs).',
    callout_1_title: '✦ THE TRIPLE DISCONNECT IN CLINICAL INFORMATICS',
    c_list_1_h: 'Terminology Drift:',
    c_list_2_h: 'Evidence Evaporation:',
    c_list_3_h: 'Structural Limits of Dense Vector RAG:',
    sec_1_p2: 'The IYN architecture replaces pure cosine-similarity text embedding with a deterministic inference layer combining <strong>Semantic Knowledge Graphs</strong>, <strong>W3C RDF/OWL standards</strong>, and <strong>HL7 FHIR R4 specifications</strong>.',

    sec_2_label: 'ONTOLOGY HARMONIZATION',
    sec_2_title: 'Precision Poly-Ontology Harmonization Across Heterogeneous EHRs',
    sec_2_p1: 'Technical specification for standardizing heterogeneous hospital codes into <strong>SNOMED CT</strong> (conditions/findings), <strong>LOINC</strong> (laboratory diagnostics), <strong>RxNorm</strong> (clinical drugs), <strong>ICD-10-CM / ICD-11</strong> (classifications), and <strong>OMOP CDM</strong> (common data models).',
    tech_card_1_h: 'Unit Conversion & Reference Range Drift Calibration',
    tech_card_1_p: 'Beyond simple text matching, we algorithmically standardize laboratory methodologies, unit conversions (e.g. Glucose mg/dL ↔ mmol/L, conversion factor 0.0555), and demographic reference range shifts, pre-empting statistical confounding across multi-center cohorts.',

    sec_3_label: 'EVIDENCE PROVENANCE',
    sec_3_title: 'PICO Structuring and Immutable Evidence Graphs from Primary Literature',
    sec_3_p1: 'Clinical reliability begins with rigorous quantification of randomized controlled trials (RCTs). The IYN evidence engine parses Population, Intervention, Comparison, and Outcome along with Hazard Ratios, Confidence Intervals, and Cochrane Risk of Bias (RoB-2) into immutable graph structures.',

    sec_4_label: 'RETRIEVAL ARCHITECTURE',
    sec_4_title: 'Deterministic GraphRAG Architecture for Clinical Decision Support',
    sec_4_p1: 'Vector similarity cannot parse causal counter-indications, such as <em>"physiological pathways where Metformin is strictly contraindicated in severe renal impairment (eGFR < 30)"</em>. The IYN GraphRAG engine utilizes RDF triples and ontological hierarchies to enforce physiological preconditions deterministically.',

    sec_5_label: 'STANDARDS & CODE EXPORT',
    sec_5_title: 'Regulatory-Compliant HL7 FHIR R4 Data Exchange Specification',
    sec_5_p1: 'All harmonized knowledge serializes into standard <strong>HL7 FHIR R4 Bundles</strong>, guaranteeing 100% interoperability with certified Electronic Health Record (EHR) systems and health authorities under the 21st Century Cures Act.',

    sec_6_label: 'ENGAGEMENT',
    sec_6_title: 'Architecture Advisory and Clinical Data Collaboration',
    sec_6_p1: 'We provide technical scoping proposals for multi-hospital federated research, oncology target knowledge graphs, and regulatory AI compliance pipelines.',
    f_org_l: 'ORGANIZATION // Institution Name',
    f_name_l: 'NAME // Lead Investigator',
    f_email_l: 'EMAIL // Institutional Email',
    f_domain_l: 'DOMAIN // Project Focus',
    f_d_1: 'EHR Ontology Harmonization (SNOMED / LOINC / OMOP)',
    f_d_2: 'Clinical Trial PICO Extraction & GraphRAG',
    f_d_3: 'Software-as-a-Medical-Device (SaMD) Validation',
    f_d_4: 'Multi-Center Federated OMOP-CDM Lake',
    f_d_5: 'General Advisory & Pilot PoC',
    f_msg_l: 'PROJECT SPECIFICATION // Scope Overview',
    f_submit: 'CREATE TECHNICAL PAYLOAD ↗',
    f_privacy: '🔒 ZERO-TRUST: The inquiry payload is formatted entirely in your browser sandbox and copied to your clipboard. No telemetry is persisted.',
    foot_desc: 'Enterprise Medical Knowledge Infrastructure & Ontological Harmonization Platform.'
  }
};

/* State & Controls */
let currentLang = localStorage.getItem('iyn-lang') || 'ko';
let currentTheme = localStorage.getItem('iyn-theme') || 'dark';

const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('iyn-lang', lang);
  document.documentElement.lang = lang;
  if (langToggle) {
    langToggle.textContent = lang === 'ko' ? 'EN' : 'KO';
  }

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

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'ko' ? 'en' : 'ko');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* Copy FHIR Code */
const copyFhirBtn = document.getElementById('copyFhirBtn');
if (copyFhirBtn) {
  copyFhirBtn.addEventListener('click', async () => {
    const code = document.getElementById('fhirCode');
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.innerText);
      const prev = copyFhirBtn.textContent;
      copyFhirBtn.textContent = '✓ COPIED';
      setTimeout(() => {
        copyFhirBtn.textContent = prev;
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  });
}

/* Contact Form Payload Formatting */
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');
const payloadContainer = document.getElementById('payloadContainer');
const payloadText = document.getElementById('payloadText');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;

    const fd = new FormData(contactForm);
    const domainSelect = document.getElementById('f_domain');
    const domainText = domainSelect.selectedOptions[0].textContent;

    const payload = [
      '==============================================================',
      'IYN // CLINICAL INFORMATICS TECHNICAL SCOPING REQUEST',
      '==============================================================',
      `TIMESTAMP   : ${new Date().toISOString()}`,
      `ORGANIZATION: ${fd.get('org') || 'N/A'}`,
      `NAME        : ${fd.get('name')}`,
      `EMAIL       : ${fd.get('email')}`,
      `DOMAIN      : ${domainText}`,
      '--------------------------------------------------------------',
      'PROJECT SCOPE & DATA SPECIFICATION:',
      fd.get('message'),
      '=============================================================='
    ].join('\n');

    payloadText.value = payload;
    payloadContainer.hidden = false;

    try {
      await navigator.clipboard.writeText(payload);
      formResult.textContent = currentLang === 'ko'
        ? '✓ 기술 문의 초안이 클립보드에 안전하게 복사되었습니다.'
        : '✓ Technical scoping draft copied to clipboard.';
      formResult.style.color = 'var(--accent-emerald)';
    } catch {
      payloadText.focus();
      payloadText.select();
      formResult.textContent = currentLang === 'ko'
        ? '상자의 텍스트를 수동으로 복사해 주세요.'
        : 'Please manually copy the text in the box below.';
      formResult.style.color = 'var(--accent-amber)';
    }
  });
}

/* Year */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Initialize */
applyTheme(currentTheme);
applyLang(currentLang);
