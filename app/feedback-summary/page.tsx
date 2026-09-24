import React from 'react';
import type { Metadata } from 'next';
import FeedbackSummary from '@/components/feedback/FeedbackSummary';

export const metadata: Metadata = {
  title: 'Feedback Summary | TRAI Consultation Portal',
  description: 'Stakeholder comments and feedback summary on TRAI consultation papers.',
};

export default function FeedbackSummaryPage() {
  return <FeedbackSummary />;
}
