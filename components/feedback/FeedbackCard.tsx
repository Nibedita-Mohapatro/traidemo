'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { FeedbackItem } from '@/data/mockData';

interface FeedbackCardProps {
  feedback: FeedbackItem;
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  const getSentimentChip = () => {
    switch (feedback.sentimentType) {
      case 'success':
        return (
          <Chip
            icon={<CheckCircleOutlinedIcon sx={{ fontSize: '14px !important' }} />}
            label={feedback.sentiment}
            size="small"
            sx={{
              backgroundColor: '#ecfdf5',
              color: '#047857',
              borderColor: '#a7f3d0',
              fontWeight: 600,
              fontSize: '0.72rem',
              border: '1px solid',
            }}
          />
        );
      case 'warning':
        return (
          <Chip
            icon={<InfoOutlinedIcon sx={{ fontSize: '14px !important' }} />}
            label={feedback.sentiment}
            size="small"
            sx={{
              backgroundColor: '#fffbeb',
              color: '#b45309',
              borderColor: '#fde68a',
              fontWeight: 600,
              fontSize: '0.72rem',
              border: '1px solid',
            }}
          />
        );
      case 'info':
      default:
        return (
          <Chip
            icon={<InfoOutlinedIcon sx={{ fontSize: '14px !important' }} />}
            label={feedback.sentiment}
            size="small"
            sx={{
              backgroundColor: '#eff6ff',
              color: '#1d4ed8',
              borderColor: '#bfdbfe',
              fontWeight: 600,
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
        {/* Top Row: Stakeholder Info & Sentiment Badge */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
            mb: 1.5,
          }}
        >
          {/* Stakeholder Avatar + Name + Type */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              sx={{
                bgcolor: feedback.avatarColor,
                color: '#ffffff',
                width: 36,
                height: 36,
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              {feedback.avatarInitials}
            </Avatar>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>
                  {feedback.stakeholderName}
                </Typography>
                <Chip
                  label={feedback.stakeholderType}
                  size="small"
                  sx={{
                    bgcolor: '#f1f5f9',
                    color: '#475569',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    height: 20,
                  }}
                />
              </Box>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
                {feedback.chapter} • Submitted on: {feedback.submissionDate}
              </Typography>
            </Box>
          </Box>

          {/* Sentiment Badge & Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getSentimentChip()}
            <Tooltip title="Options">
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Subject / Feedback Topic Title */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: '#1e3a8a',
            fontSize: '0.925rem',
            mb: 1,
            lineHeight: 1.35,
          }}
        >
          {feedback.subject}
        </Typography>

        {/* Summary Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#334155',
            lineHeight: 1.6,
            mb: 2,
            fontSize: '0.825rem',
          }}
        >
          {feedback.summary}
        </Typography>

        <Divider sx={{ my: 1.5, borderColor: '#f1f5f9' }} />

        {/* Bottom Metadata & Action Controls */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
          }}
        >
          {/* Metadata: Questions answered & PDF Attachment */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <EditNoteIcon sx={{ fontSize: 18, color: '#0b4d9c' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.75rem' }}>
                Questions Answered: <Box component="span" sx={{ color: '#0b4d9c', fontWeight: 700 }}>{feedback.questionsAnswered} of {feedback.totalQuestions}</Box>
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' }, height: 14, my: 'auto' }} />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                cursor: 'pointer',
                p: '3px 8px',
                borderRadius: 1,
                bgcolor: '#f8fafc',
                border: '1px solid #e2e8f0',
                '&:hover': { bgcolor: '#f1f5f9', borderColor: '#cbd5e1' },
              }}
            >
              <PictureAsPdfIcon sx={{ fontSize: 16, color: '#dc2626' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.72rem' }}>
                {feedback.attachmentName}
              </Typography>
              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.68rem' }}>
                ({feedback.attachmentSize})
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'space-between', sm: 'flex-end' },
            }}
          >
            <Tooltip title="Download Submission PDF">
              <IconButton size="small" sx={{ color: '#64748b', border: '1px solid #e2e8f0', borderRadius: 1.5, p: 0.6 }}>
                <FileDownloadOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share Feedback">
              <IconButton size="small" sx={{ color: '#64748b', border: '1px solid #e2e8f0', borderRadius: 1.5, p: 0.6 }}>
                <ShareOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              size="small"
              endIcon={<OpenInNewIcon sx={{ fontSize: '14px !important' }} />}
              sx={{
                borderColor: '#0b4d9c',
                color: '#0b4d9c',
                fontWeight: 600,
                fontSize: '0.75rem',
                py: 0.5,
                px: 1.5,
                '&:hover': {
                  borderColor: '#07336b',
                  backgroundColor: '#eff6ff',
                },
              }}
            >
              View Full Submission
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
