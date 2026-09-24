'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import FeedbackCard from './FeedbackCard';
import { featuredConsultationPaper, mockFeedbackList } from '@/data/mockData';

export default function FeedbackSummary() {
  const [stakeholderType, setStakeholderType] = useState('ALL');
  const [sentiment, setSentiment] = useState('ALL');
  const [chapter, setChapter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const handleReset = () => {
    setStakeholderType('ALL');
    setSentiment('ALL');
    setChapter('ALL');
    setSearchQuery('');
  };

  const filteredFeedbacks = mockFeedbackList.filter((item) => {
    if (stakeholderType !== 'ALL' && item.stakeholderType !== stakeholderType) return false;
    if (sentiment !== 'ALL' && item.sentiment !== sentiment) return false;
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const match =
        item.stakeholderName.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query);
      if (!match) return false;
    }
    return true;
  });

  return (
    <Box>
      {/* Breadcrumb & Top Utility Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 1,
          mb: 2,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: '#94a3b8' }} />}
          aria-label="breadcrumb"
          sx={{ fontSize: '0.78rem' }}
        >
          <Link underline="hover" color="inherit" href="/consultation-papers" sx={{ color: '#64748b' }}>
            Portal
          </Link>
          <Link underline="hover" color="inherit" href="/consultation-papers" sx={{ color: '#64748b' }}>
            Consultation Papers
          </Link>
          <Typography color="text.primary" sx={{ fontSize: '0.78rem', fontWeight: 600, color: '#0b4d9c' }}>
            Feedback Summary
          </Typography>
        </Breadcrumbs>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
            Last Updated: <strong>Sept 20, 2026 11:30 AM</strong>
          </Typography>
          <Tooltip title="Download CSV Report">
            <IconButton size="small" sx={{ color: '#64748b', border: '1px solid #e2e8f0' }}>
              <FileDownloadOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Print Summary">
            <IconButton size="small" sx={{ color: '#64748b', border: '1px solid #e2e8f0' }}>
              <PrintOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton size="small" sx={{ color: '#64748b', border: '1px solid #e2e8f0' }}>
              <ShareOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Page Title & Subtitle */}
      <Box sx={{ mb: 2.5 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 700, color: '#0f172a' }}>
          Feedback Summary
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mt: 0.3, fontSize: '0.825rem' }}>
          Consultation Paper: Stakeholder Comments, Responses & Analytical Summary
        </Typography>
      </Box>

      {/* Featured Consultation Paper Banner Card */}
      <Card
        elevation={0}
        sx={{
          mb: 3,
          backgroundColor: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 2px 6px rgba(11, 77, 156, 0.05)',
        }}
      >
        <Box sx={{ height: 4, bgcolor: '#0b4d9c' }} />
        <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', lg: 'center' },
              gap: 2.5,
            }}
          >
            {/* Left Side: Paper Details */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip
                  icon={<CheckCircleOutlinedIcon sx={{ fontSize: '14px !important' }} />}
                  label="OPEN FOR COMMENTS"
                  size="small"
                  sx={{
                    bgcolor: '#dcfce7',
                    color: '#15803d',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    border: '1px solid #86efac',
                  }}
                />
                <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.72rem' }}>
                  Ref: {featuredConsultationPaper.id}
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.35,
                  mb: 1.5,
                }}
              >
                {featuredConsultationPaper.title}
              </Typography>

              {/* Metadata Badges */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2.5 }, flexWrap: 'wrap', mb: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <FolderOutlinedIcon sx={{ fontSize: 16, color: '#0b4d9c' }} />
                  <Typography variant="caption" sx={{ color: '#475569', fontWeight: 500, fontSize: '0.75rem' }}>
                    Division: <strong>{featuredConsultationPaper.division}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: '#64748b' }} />
                  <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
                    Release Date: <strong>{featuredConsultationPaper.releaseDate}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: '#dc2626' }} />
                  <Typography variant="caption" sx={{ color: '#dc2626', fontWeight: 600, fontSize: '0.75rem' }}>
                    Closing Date: <strong>{featuredConsultationPaper.closingDate}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: '#ea580c' }} />
                  <Typography variant="caption" sx={{ color: '#ea580c', fontWeight: 700, fontSize: '0.75rem' }}>
                    {featuredConsultationPaper.daysRemaining} Days Left
                  </Typography>
                </Box>
              </Box>

              {/* PDF Document Attachment Link */}
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
                }}
              >
                <PictureAsPdfIcon sx={{ color: '#dc2626', fontSize: 18 }} />
                <Typography noWrap variant="caption" sx={{ fontWeight: 600, color: '#0b4d9c', fontSize: '0.75rem' }}>
                  {featuredConsultationPaper.pdfName}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                  ({featuredConsultationPaper.pdfSize})
                </Typography>
              </Box>
            </Box>

            {/* Right Side: Quick Stats Mini-Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 2,
                minWidth: { xs: '100%', sm: 260 },
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.8rem', mb: 1.5 }}>
                Submissions Breakdown
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <RateReviewOutlinedIcon sx={{ fontSize: 16, color: '#0b4d9c' }} />
                    <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
                      Total Comments
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#0b4d9c', fontSize: '0.8rem' }}>
                    {featuredConsultationPaper.commentsCount}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <GroupsOutlinedIcon sx={{ fontSize: 16, color: '#0284c7' }} />
                    <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
                      Stakeholders / TSPs
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#0284c7', fontSize: '0.8rem' }}>
                    {featuredConsultationPaper.stakeholdersCount}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <PersonOutlinedIcon sx={{ fontSize: 16, color: '#16a34a' }} />
                    <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
                      General Public
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#16a34a', fontSize: '0.8rem' }}>
                    {featuredConsultationPaper.publicCount}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="small"
                startIcon={<CloudDownloadOutlinedIcon />}
                sx={{
                  bgcolor: '#0b4d9c',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  py: 0.6,
                }}
              >
                Download All Submissions
              </Button>
            </Paper>
          </Box>
        </CardContent>
      </Card>

      {/* Filter / Search Area */}
      <Card
        elevation={0}
        sx={{
          mb: 2.5,
          bgcolor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 2,
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 2.2 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 1.5,
              alignItems: { xs: 'stretch', md: 'center' },
            }}
          >
            {/* Filter 1: Stakeholder Type */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 190 } }}>
              <InputLabel id="stakeholder-type-label" sx={{ fontSize: '0.78rem' }}>
                Stakeholder Type
              </InputLabel>
              <Select
                labelId="stakeholder-type-label"
                value={stakeholderType}
                label="Stakeholder Type"
                onChange={(e) => setStakeholderType(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="ALL">All Stakeholders</MenuItem>
                <MenuItem value="Telecom Service Provider (TSP)">Telecom Service Providers (TSPs)</MenuItem>
                <MenuItem value="Internet Service Provider (ISP)">Internet Service Providers (ISPs)</MenuItem>
                <MenuItem value="Industry Association">Industry Associations</MenuItem>
                <MenuItem value="Consumer Advocacy Group">Consumer Advocacy Groups</MenuItem>
              </Select>
            </FormControl>

            {/* Filter 2: Sentiment / Stance */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 170 } }}>
              <InputLabel id="sentiment-label" sx={{ fontSize: '0.78rem' }}>
                Feedback Sentiment
              </InputLabel>
              <Select
                labelId="sentiment-label"
                value={sentiment}
                label="Feedback Sentiment"
                onChange={(e) => setSentiment(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="ALL">All Sentiments</MenuItem>
                <MenuItem value="Strongly Agree">Strongly Agree</MenuItem>
                <MenuItem value="Supportive with Amendments">Supportive with Amendments</MenuItem>
                <MenuItem value="Needs Revision">Needs Revision</MenuItem>
              </Select>
            </FormControl>

            {/* Filter 3: Chapter / Topic */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 180 } }}>
              <InputLabel id="chapter-label" sx={{ fontSize: '0.78rem' }}>
                Chapter / Section
              </InputLabel>
              <Select
                labelId="chapter-label"
                value={chapter}
                label="Chapter / Section"
                onChange={(e) => setChapter(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="ALL">All Chapters</MenuItem>
                <MenuItem value="Chapter 1">Chapter 1: Peering & Transit</MenuItem>
                <MenuItem value="Chapter 2">Chapter 2: IUC & Port Charges</MenuItem>
                <MenuItem value="Chapter 3">Chapter 3: QoS Benchmarks</MenuItem>
                <MenuItem value="Chapter 4">Chapter 4: SLA & Timelines</MenuItem>
              </Select>
            </FormControl>

            {/* Filter 4: Keyword Search Input */}
            <TextField
              size="small"
              placeholder="Search by stakeholder, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ flex: 1, minWidth: { xs: '100%', md: 220 } }}
              slotProps={{
                input: {
                  startAdornment: <SearchIcon sx={{ color: '#94a3b8', fontSize: 18, mr: 0.8 }} />,
                },
              }}
            />

            {/* Search & Reset Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'flex-end', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<SearchIcon />}
                sx={{ bgcolor: '#0b4d9c', fontWeight: 600, px: 2 }}
              >
                Search
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<RestartAltIcon />}
                onClick={handleReset}
                sx={{ borderColor: '#cbd5e1', color: '#475569', fontWeight: 600 }}
              >
                Reset
              </Button>
              <Tooltip title="Advanced Filter Settings">
                <IconButton size="small" sx={{ border: '1px solid #cbd5e1', color: '#475569' }}>
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Result Count Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, px: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.8125rem' }}>
          Showing <strong>{filteredFeedbacks.length}</strong> of <strong>{mockFeedbackList.length}</strong> stakeholder submissions
        </Typography>
        <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
          Sorted by: <strong>Submission Date (Latest First)</strong>
        </Typography>
      </Box>

      {/* Feedback Items List */}
      <Box>
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((item) => <FeedbackCard key={item.id} feedback={item} />)
        ) : (
          <Paper sx={{ p: 4, textAlign: 'center', bgcolor: '#ffffff', borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#64748b', fontWeight: 600 }}>
              No feedback items matched your search criteria.
            </Typography>
            <Button variant="outlined" size="small" onClick={handleReset} sx={{ mt: 1.5 }}>
              Reset Filters
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
