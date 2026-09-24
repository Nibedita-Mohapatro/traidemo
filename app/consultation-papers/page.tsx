'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

import ConsultationStats from '@/components/consultation/ConsultationStats';
import ConsultationCharts from '@/components/consultation/ConsultationCharts';
import ConsultationPaperCard from '@/components/consultation/ConsultationPaperCard';
import { mockConsultationPapers } from '@/data/mockData';

export default function ConsultationPapersPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [divisionFilter, setDivisionFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [yearFilter, setYearFilter] = useState('2026');
  const [searchQuery, setSearchQuery] = useState('');

  const handleResetFilters = () => {
    setDivisionFilter('ALL');
    setStatusFilter('ALL');
    setYearFilter('2026');
    setSearchQuery('');
  };

  const filteredPapers = mockConsultationPapers.filter((paper) => {
    if (divisionFilter !== 'ALL' && paper.division !== divisionFilter) return false;
    if (statusFilter !== 'ALL' && paper.status !== statusFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match =
        paper.title.toLowerCase().includes(q) ||
        paper.division.toLowerCase().includes(q) ||
        paper.tags.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <Box>
      {/* Top Breadcrumbs & Utility Controls */}
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
          <Typography color="text.primary" sx={{ fontSize: '0.78rem', fontWeight: 600, color: '#0b4d9c' }}>
            Consultation Papers
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
          <Tooltip title="Print Overview">
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
      <Box sx={{ mb: 2 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 700, color: '#0f172a' }}>
          Consultation Papers
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mt: 0.3, fontSize: '0.825rem' }}>
          Summary & Stakeholder Consultation Analytics Dashboard
        </Typography>
      </Box>

      {/* Navigation Tabs (Summary View / Analytics & Insights View) */}
      <Box sx={{ borderBottom: 1, borderColor: '#e2e8f0', mb: 2.5 }}>
        <Tabs
          value={currentTab}
          onChange={(_, val) => setCurrentTab(val)}
          aria-label="consultation papers tabs"
        >
          <Tab
            icon={<TableChartOutlinedIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Summary View"
          />
          <Tab
            icon={<AssessmentOutlinedIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Analytics & Insights View"
          />
        </Tabs>
      </Box>

      {/* Top Filter Bar */}
      <Card
        elevation={0}
        sx={{
          mb: 2.5,
          bgcolor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 2,
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 2 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 1.5,
              alignItems: { xs: 'stretch', md: 'center' },
            }}
          >
            {/* Division Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 170 } }}>
              <InputLabel id="division-filter-label" sx={{ fontSize: '0.78rem' }}>
                Division / Wing
              </InputLabel>
              <Select
                labelId="division-filter-label"
                value={divisionFilter}
                label="Division / Wing"
                onChange={(e) => setDivisionFilter(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="ALL">All Divisions</MenuItem>
                <MenuItem value="QoS-I">QoS-I</MenuItem>
                <MenuItem value="Regulation & Policy">Regulation & Policy</MenuItem>
                <MenuItem value="Networks & Spectrum">Networks & Spectrum</MenuItem>
                <MenuItem value="Spectrum & Planning">Spectrum & Planning</MenuItem>
              </Select>
            </FormControl>

            {/* Status Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 170 } }}>
              <InputLabel id="status-filter-label" sx={{ fontSize: '0.78rem' }}>
                Paper Status
              </InputLabel>
              <Select
                labelId="status-filter-label"
                value={statusFilter}
                label="Paper Status"
                onChange={(e) => setStatusFilter(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="ALL">All Statuses</MenuItem>
                <MenuItem value="Open for Comments">Open for Comments</MenuItem>
                <MenuItem value="Closed for Comments">Closed for Comments</MenuItem>
                <MenuItem value="Recommendations Issued">Recommendations Issued</MenuItem>
              </Select>
            </FormControl>

            {/* Year Filter */}
            <FormControl size="small" sx={{ minWidth: { xs: '100%', md: 130 } }}>
              <InputLabel id="year-filter-label" sx={{ fontSize: '0.78rem' }}>
                Year
              </InputLabel>
              <Select
                labelId="year-filter-label"
                value={yearFilter}
                label="Year"
                onChange={(e) => setYearFilter(e.target.value)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="2026">2026</MenuItem>
                <MenuItem value="2025">2025</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </Select>
            </FormControl>

            {/* Keyword Search */}
            <TextField
              size="small"
              placeholder="Search consultation papers..."
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
                onClick={handleResetFilters}
                sx={{ borderColor: '#cbd5e1', color: '#475569', fontWeight: 600 }}
              >
                Reset
              </Button>
              <Tooltip title="Filter Settings">
                <IconButton size="small" sx={{ border: '1px solid #cbd5e1', color: '#475569' }}>
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* 4 Statistics Cards */}
      <ConsultationStats />

      {/* 3 Dashboard Analytics Charts */}
      <ConsultationCharts />

      {/* Add Consultation Paper Primary Action & Section Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 1.5,
          mt: 4,
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
            Consultation Papers Directory
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
            Active, closed and published consultation papers with stakeholder submissions
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="medium"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#0b4d9c',
            fontWeight: 700,
            fontSize: '0.825rem',
            px: 2.5,
            py: 0.9,
            boxShadow: '0 2px 8px rgba(11, 77, 156, 0.25)',
            '&:hover': { bgcolor: '#07336b' },
          }}
        >
          Add Consultation Paper
        </Button>
      </Box>

      {/* Results Count and Filter Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, px: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.8125rem' }}>
          Showing <strong>{filteredPapers.length}</strong> of <strong>{mockConsultationPapers.length}</strong> consultation papers
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
            Export:
          </Typography>
          <Tooltip title="Download CSV">
            <IconButton size="small" sx={{ color: '#64748b', p: 0.4 }}>
              <FileDownloadOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Print List">
            <IconButton size="small" sx={{ color: '#64748b', p: 0.4 }}>
              <PrintOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Consultation Papers List */}
      <Box>
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => <ConsultationPaperCard key={paper.id} paper={paper} />)
        ) : (
          <Paper sx={{ p: 4, textAlign: 'center', bgcolor: '#ffffff', borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#64748b', fontWeight: 600 }}>
              No consultation papers matched your search criteria.
            </Typography>
            <Button variant="outlined" size="small" onClick={handleResetFilters} sx={{ mt: 1.5 }}>
              Reset Filters
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
}

