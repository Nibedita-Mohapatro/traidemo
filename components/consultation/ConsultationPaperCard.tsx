'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

import { ConsultationPaper } from '@/data/mockData';

interface ConsultationPaperCardProps {
  paper: ConsultationPaper;
}

export default function ConsultationPaperCard({ paper }: ConsultationPaperCardProps) {
  const router = useRouter();

  const getStatusChip = () => {
    switch (paper.status) {
      case 'Open for Comments':
        return (
          <Chip
            icon={<CheckCircleOutlinedIcon sx={{ fontSize: '13px !important' }} />}
            label="Open for Comments"
            size="small"
            sx={{
              backgroundColor: '#ecfdf5',
              color: '#047857',
              borderColor: '#a7f3d0',
              fontWeight: 700,
              fontSize: '0.72rem',
              border: '1px solid',
            }}
          />
        );
      case 'Closed for Comments':
      case 'Under Review':
        return (
          <Chip
            label="Closed for Comments"
            size="small"
            sx={{
              backgroundColor: '#fff7ed',
              color: '#c2410c',
              borderColor: '#ffedd5',
              fontWeight: 700,
              fontSize: '0.72rem',
              border: '1px solid',
            }}
          />
        );
      case 'Recommendations Issued':
      default:
        return (
          <Chip
            label="Recommendations Issued"
            size="small"
            sx={{
              backgroundColor: '#eff6ff',
              color: '#1d4ed8',
              borderColor: '#bfdbfe',
              fontWeight: 700,
              fontSize: '0.72rem',
              border: '1px solid',
            }}
          />
        );
    }
  };

  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 2,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: '#93c5fd',
          boxShadow: '0 4px 12px rgba(11, 77, 156, 0.06)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 2.5 }, '&:last-child': { pb: { xs: 2, sm: 2.5 } } }}>
        {/* Top Header: Status Chip & Share/Actions */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1.2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getStatusChip()}
            <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.72rem' }}>
              Ref: {paper.id}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Share Consultation Paper">
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <ShareOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Paper Title (Clickable) */}
        <Typography
          variant="h3"
          onClick={() => router.push('/feedback-summary')}
          sx={{
            fontWeight: 700,
            color: '#0b4d9c',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            mb: 1.2,
            lineHeight: 1.35,
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline', color: '#07336b' },
          }}
        >
          {paper.title}
        </Typography>

        {/* Metadata Details Row */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2.5 }, flexWrap: 'wrap', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <FolderOpenOutlinedIcon sx={{ fontSize: 16, color: '#0b4d9c' }} />
            <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
              Division: <strong>{paper.division}</strong>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 15, color: '#64748b' }} />
            <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
              Release Date: <strong>{paper.releaseDate}</strong>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 15, color: '#dc2626' }} />
            <Typography variant="caption" sx={{ color: '#dc2626', fontWeight: 600, fontSize: '0.75rem' }}>
              Closing Date: <strong>{paper.closingDate}</strong>
            </Typography>
          </Box>

          {paper.daysRemaining !== undefined && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
              <AccessTimeIcon sx={{ fontSize: 15, color: '#ea580c' }} />
              <Typography variant="caption" sx={{ color: '#ea580c', fontWeight: 700, fontSize: '0.75rem' }}>
                {paper.daysRemaining} Days Left
              </Typography>
            </Box>
          )}
        </Box>

        {/* Tag Chips */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap', mb: 1.8 }}>
          {paper.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: '#f1f5f9',
                color: '#475569',
                fontSize: '0.7rem',
                fontWeight: 600,
                borderRadius: 1,
                height: 22,
              }}
            />
          ))}
        </Box>

        {/* PDF Link Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: '6px 12px',
            bgcolor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 1.5,
            width: 'fit-content',
            maxWidth: '100%',
            mb: 2,
          }}
        >
          <PictureAsPdfIcon sx={{ color: '#dc2626', fontSize: 17 }} />
          <Typography noWrap variant="caption" sx={{ fontWeight: 600, color: '#0b4d9c', fontSize: '0.73rem' }}>
            {paper.pdfName}
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.68rem' }}>
            ({paper.pdfSize})
          </Typography>
          <IconButton size="small" sx={{ color: '#64748b', p: 0.3, ml: 0.5 }}>
            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>

        <Divider sx={{ my: 1.5, borderColor: '#f1f5f9' }} />

        {/* Bottom Action Controls */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
            Total Responses Received: <Box component="span" sx={{ fontWeight: 700, color: '#0b4d9c' }}>{paper.commentsCount}</Box> (Stakeholders: {paper.stakeholdersCount}, Public: {paper.publicCount})
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
            {paper.status === 'Open for Comments' && (
              <>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<UploadFileOutlinedIcon />}
                  sx={{
                    borderColor: '#cbd5e1',
                    color: '#334155',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Upload Feedback
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EventAvailableOutlinedIcon />}
                  sx={{
                    borderColor: '#cbd5e1',
                    color: '#334155',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Schedule OHD
                </Button>
              </>
            )}

            <Button
              variant="contained"
              size="small"
              startIcon={<VisibilityOutlinedIcon />}
              onClick={() => router.push('/feedback-summary')}
              sx={{
                bgcolor: '#0b4d9c',
                fontSize: '0.75rem',
                fontWeight: 600,
                px: 1.8,
                '&:hover': { bgcolor: '#07336b' },
              }}
            >
              View Responses
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
