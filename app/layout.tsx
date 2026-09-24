import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import DashboardLayout from '@/components/layout/DashboardLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRAI | Telecom Regulatory Authority of India - Consultation Portal',
  description: 'Consultation Papers and Public Feedback Portal for Telecom Regulatory Authority of India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f4f6fa' }}>
        <ThemeRegistry>
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}

