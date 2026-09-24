export interface StatCardData {
  id: string;
  title: string;
  value: number | string;
  subtitle: string;
  color: 'primary' | 'success' | 'warning' | 'info';
  iconType: 'published' | 'open' | 'closed' | 'comments';
  linkText: string;
}

export interface ConsultationPaper {
  id: string;
  title: string;
  division: string;
  releaseDate: string;
  closingDate: string;
  daysRemaining?: number;
  status: 'Open for Comments' | 'Closed for Comments' | 'Under Review' | 'Recommendations Issued';
  statusType: 'success' | 'warning' | 'info' | 'default';
  tags: string[];
  pdfName: string;
  pdfSize: string;
  commentsCount: number;
  stakeholdersCount: number;
  publicCount: number;
}

export interface FeedbackItem {
  id: string;
  stakeholderName: string;
  stakeholderType: 'Telecom Service Provider (TSP)' | 'Internet Service Provider (ISP)' | 'Industry Association' | 'Consumer Advocacy Group' | 'Academic / Think Tank';
  avatarInitials: string;
  avatarColor: string;
  subject: string;
  sentiment: 'Strongly Agree' | 'Supportive with Amendments' | 'Needs Revision' | 'Neutral / Informational';
  sentimentType: 'success' | 'info' | 'warning' | 'default';
  summary: string;
  questionsAnswered: number;
  totalQuestions: number;
  submissionDate: string;
  attachmentName: string;
  attachmentSize: string;
  chapter: string;
}

export interface ChartMonthData {
  month: string;
  comments: number;
}

export interface StakeholderParticipationData {
  category: string;
  participants: number;
  percentage: number;
}

export interface StatusDistributionData {
  name: string;
  value: number;
  color: string;
}

// 4 Stats Cards Data
export const mockStatsData: StatCardData[] = [
  {
    id: 'published-papers',
    title: 'Published Papers',
    value: 86,
    subtitle: 'Total issued in 2026: 24',
    color: 'primary',
    iconType: 'published',
    linkText: 'View all >',
  },
  {
    id: 'open-comments',
    title: 'Open for Comments',
    value: 5,
    subtitle: 'Active public consultations',
    color: 'success',
    iconType: 'open',
    linkText: 'View all >',
  },
  {
    id: 'closed-papers',
    title: 'Closed Papers',
    value: 4,
    subtitle: 'Under TRAI evaluation',
    color: 'warning',
    iconType: 'closed',
    linkText: 'View all >',
  },
  {
    id: 'comments-received',
    title: 'Comments Received',
    value: 348,
    subtitle: '+42 received this week',
    color: 'info',
    iconType: 'comments',
    linkText: 'View all >',
  },
];

// Comments Trend Data (Bar Chart)
export const mockMonthlyCommentsData: ChartMonthData[] = [
  { month: 'Apr 26', comments: 180 },
  { month: 'May 26', comments: 220 },
  { month: 'Jun 26', comments: 260 },
  { month: 'Jul 26', comments: 310 },
  { month: 'Aug 26', comments: 290 },
];

// Stakeholder Participation Data
export const mockStakeholderData: StakeholderParticipationData[] = [
  { category: 'Telecom Operators (TSPs)', participants: 28, percentage: 42 },
  { category: 'Internet Service Providers (ISPs)', participants: 19, percentage: 25 },
  { category: 'Industry Associations', participants: 12, percentage: 15 },
  { category: 'Consumer Groups', participants: 8, percentage: 10 },
  { category: 'Academic & Think Tanks', participants: 6, percentage: 8 },
];

// Consultation Status Overview (Donut Chart)
export const mockStatusDistributionData: StatusDistributionData[] = [
  { name: 'Open for Comment', value: 5, color: '#0284c7' },
  { name: 'Under Review / Closed', value: 4, color: '#f97316' },
  { name: 'Open House Scheduled', value: 2, color: '#16a34a' },
  { name: 'Recommendations Draft', value: 1, color: '#6366f1' },
];

// Active Featured Consultation Paper
export const featuredConsultationPaper: ConsultationPaper = {
  id: 'CP-2026-0910',
  title: 'Consultation Paper on Review of Existing TRAI Regulations on Interconnection Matters',
  division: 'QoS-I',
  releaseDate: '12/08/2026',
  closingDate: '12/10/2026',
  daysRemaining: 28,
  status: 'Open for Comments',
  statusType: 'success',
  tags: ['Interconnection', 'Regulatory Review', 'QoS Regulation'],
  pdfName: 'Consultation Paper on Review of Existing TRAI Regulations on Interconnection Matters.pdf',
  pdfSize: '2.4 MB',
  commentsCount: 25,
  stakeholdersCount: 18,
  publicCount: 7,
};

// All Consultation Papers List
export const mockConsultationPapers: ConsultationPaper[] = [
  {
    id: 'CP-2026-0910',
    title: 'Consultation Paper on Review of Existing TRAI Regulations on Interconnection Matters',
    division: 'QoS-I',
    releaseDate: '12/08/2026',
    closingDate: '12/10/2026',
    daysRemaining: 28,
    status: 'Open for Comments',
    statusType: 'success',
    tags: ['Interconnection', 'Regulatory Review', 'QoS Regulation'],
    pdfName: 'Consultation Paper on Review of Existing TRAI Regulations on Interconnection Matters.pdf',
    pdfSize: '2.4 MB',
    commentsCount: 25,
    stakeholdersCount: 18,
    publicCount: 7,
  },
  {
    id: 'CP-2026-0842',
    title: 'Consultation Paper on Regulatory Framework for Over-the-Top (OTT) Communication Services and Selective Banning of OTT Services',
    division: 'Regulation & Policy',
    releaseDate: '28/08/2026',
    closingDate: '28/10/2026',
    daysRemaining: 44,
    status: 'Open for Comments',
    statusType: 'success',
    tags: ['OTT Services', 'Licensing & Policy', 'Cyber Security'],
    pdfName: 'Consultation_Paper_OTT_Services_2026.pdf',
    pdfSize: '3.1 MB',
    commentsCount: 42,
    stakeholdersCount: 26,
    publicCount: 16,
  },
  {
    id: 'CP-2026-0518',
    title: 'Consultation Paper on Embedded SIM (eSIM) Architecture for M2M Communications and IoT Devices in India',
    division: 'Networks & Spectrum',
    releaseDate: '10/05/2026',
    closingDate: '10/07/2026',
    status: 'Closed for Comments',
    statusType: 'warning',
    tags: ['eSIM', 'IoT / M2M', 'Telecom Security'],
    pdfName: 'Consultation_Paper_eSIM_M2M_2026.pdf',
    pdfSize: '1.9 MB',
    commentsCount: 38,
    stakeholdersCount: 22,
    publicCount: 16,
  },
  {
    id: 'CP-2026-0112',
    title: 'Recommendations on Next-Generation 6G Ecosystem & Spectrum Allocation Framework',
    division: 'Spectrum & Planning',
    releaseDate: '15/01/2026',
    closingDate: '15/03/2026',
    status: 'Recommendations Issued',
    statusType: 'info',
    tags: ['6G', 'Spectrum', 'Future Tech'],
    pdfName: 'TRAI_6G_Final_Recommendations.pdf',
    pdfSize: '4.5 MB',
    commentsCount: 65,
    stakeholdersCount: 45,
    publicCount: 20,
  },
];

// Feedback List Items
export const mockFeedbackList: FeedbackItem[] = [
  {
    id: 'FB-001',
    stakeholderName: 'Bharti Airtel Limited',
    stakeholderType: 'Telecom Service Provider (TSP)',
    avatarInitials: 'BA',
    avatarColor: '#e11d48',
    subject: 'Response to Chapter 2: Port charges and Interconnection usage charges (IUC) - IP Migration',
    sentiment: 'Supportive with Amendments',
    sentimentType: 'info',
    summary:
      'Regarding the interconnection architecture, we suggest a phased migration towards IP-based interconnection points. The transition should be market-driven rather than mandated with steep compliance timelines. Cost-based calculation for port charges should account for capital expenditure incurred during 5G SA rollout and network virtualisation.',
    questionsAnswered: 8,
    totalQuestions: 10,
    submissionDate: '15/09/2026',
    attachmentName: 'Airtel_TRAI_Interconnection_Comments.pdf',
    attachmentSize: '1.8 MB',
    chapter: 'Chapter 2: IUC & Port Charges',
  },
  {
    id: 'FB-002',
    stakeholderName: 'Reliance Jio Infocomm Limited',
    stakeholderType: 'Telecom Service Provider (TSP)',
    avatarInitials: 'RJ',
    avatarColor: '#0284c7',
    subject: 'Submission on Cloud-Native Core Interoperability and QoS Benchmarks',
    sentiment: 'Strongly Agree',
    sentimentType: 'success',
    summary:
      'We strongly endorse the adoption of packet-based IP interconnect with zero termination charges (Bill & Keep regime). TRAI\'s proactive measure to revise the 2018 regulation is timely. A centralized cloud-native interconnection registry will drastically reduce dispute resolution time between operators and improve packet throughput.',
    questionsAnswered: 10,
    totalQuestions: 10,
    submissionDate: '18/09/2026',
    attachmentName: 'Reliance_Jio_Interconnection_Feedback.pdf',
    attachmentSize: '2.2 MB',
    chapter: 'Chapter 3: QoS & Cloud Registry',
  },
  {
    id: 'FB-003',
    stakeholderName: 'Vodafone Idea Limited (Vi)',
    stakeholderType: 'Telecom Service Provider (TSP)',
    avatarInitials: 'VI',
    avatarColor: '#f59e0b',
    subject: 'Comments on Capacity Augmentation and Interconnection Quality SLA Timelines',
    sentiment: 'Needs Revision',
    sentimentType: 'warning',
    summary:
      'The proposed timeline of 30 days for provisioning additional Points of Interconnect (POIs) should consider OEM hardware delivery lead times and optical fiber right-of-way permissions. Relaxation on latency penalties during force majeure and severe natural calamities is urgently requested to maintain fair compliance.',
    questionsAnswered: 7,
    totalQuestions: 10,
    submissionDate: '19/09/2026',
    attachmentName: 'Vi_Response_TRAI_Consultation_QoS.pdf',
    attachmentSize: '1.4 MB',
    chapter: 'Chapter 4: SLA & Timelines',
  },
  {
    id: 'FB-004',
    stakeholderName: 'Internet Service Providers Association of India (ISPAI)',
    stakeholderType: 'Industry Association',
    avatarInitials: 'IS',
    avatarColor: '#6366f1',
    subject: 'Inputs on Peering, Transit Agreements and IXP Regulation',
    sentiment: 'Supportive with Amendments',
    sentimentType: 'info',
    summary:
      'Neutral Internet Exchange Points (IXPs) should be incentivized in tier-2 and tier-3 cities without licensing barriers. Equal treatment for domestic content delivery networks and ISPs is vital to prevent unfair transit monopolies and ensure affordable broadband connectivity across rural districts.',
    questionsAnswered: 6,
    totalQuestions: 10,
    submissionDate: '20/09/2026',
    attachmentName: 'ISPAI_Interconnection_Review_2026.pdf',
    attachmentSize: '980 KB',
    chapter: 'Chapter 1: Peering & Transit',
  },
  {
    id: 'FB-005',
    stakeholderName: 'Telecom Users Group & Consumer Protection Council',
    stakeholderType: 'Consumer Advocacy Group',
    avatarInitials: 'CP',
    avatarColor: '#059669',
    subject: 'Consumer Perspective on Call Drop Benchmarks and Congestion Penalties',
    sentiment: 'Supportive with Amendments',
    sentimentType: 'info',
    summary:
      'Consumers should not be penalized or billed for calls abruptly terminated due to POI congestion between operators. An automated compensation credit mechanism for consumers must be enforced in the new regulation whenever call setup failures exceed 0.5% during peak hours.',
    questionsAnswered: 5,
    totalQuestions: 10,
    submissionDate: '21/09/2026',
    attachmentName: 'Consumer_Forum_TRAI_Comments.pdf',
    attachmentSize: '640 KB',
    chapter: 'Chapter 3: QoS Benchmarks',
  },
];
