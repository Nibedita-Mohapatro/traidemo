'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

interface HeaderProps {
  onMobileDrawerToggle?: () => void;
}

export default function Header({ onMobileDrawerToggle }: HeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {/* Top Government of India Bar */}
      <Box
        sx={{
          backgroundColor: '#07336b',
          color: '#ffffff',
          px: { xs: 1.5, md: 3 },
          py: 0.4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.6,
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 14,
                height: 10,
                borderRadius: '2px',
                background: 'linear-gradient(to bottom, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            />
            <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.72rem' }}>
              भारत सरकार | Government of India
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: '#cbd5e1',
              cursor: 'pointer',
              '&:hover': { color: '#ffffff' },
              fontSize: '0.7rem',
            }}
          >
            Skip to Main Content
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)', height: 12, my: 'auto' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Typography
              variant="caption"
              sx={{ color: '#cbd5e1', cursor: 'pointer', fontSize: '0.7rem', '&:hover': { color: '#ffffff' } }}
            >
              A-
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#ffffff', fontWeight: 700, cursor: 'pointer', fontSize: '0.72rem' }}
            >
              A
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#cbd5e1', cursor: 'pointer', fontSize: '0.7rem', '&:hover': { color: '#ffffff' } }}
            >
              A+
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)', height: 12, my: 'auto' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
            <LanguageIcon sx={{ fontSize: 13, color: '#cbd5e1' }} />
            <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.72rem' }}>
              English
            </Typography>
            <ArrowDropDownIcon sx={{ fontSize: 14, color: '#cbd5e1' }} />
          </Box>
        </Box>
      </Box>

      {/* Main App Toolbar */}
      <Toolbar
        sx={{
          minHeight: { xs: 58, md: 64 },
          px: { xs: 1.5, md: 3 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Mobile Toggle & TRAI Logo Branding */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMobileDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#1e293b' }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                bgcolor: '#0b4d9c',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
                border: '2px solid #e0f2fe',
                boxShadow: '0 1px 4px rgba(11, 77, 156, 0.25)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '0.78rem', md: '0.85rem' },
                  color: '#07336b',
                  lineHeight: 1.2,
                }}
              >
                भारतीय दूरसंचार विनियामक प्राधिकरण
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.68rem', md: '0.73rem' },
                  color: '#475569',
                  letterSpacing: '0.01em',
                  display: 'block',
                }}
              >
                Telecom Regulatory Authority of India
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Action Icons & User Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Download Summary">
              <IconButton size="small" sx={{ color: '#64748b', '&:hover': { color: '#0b4d9c' } }}>
                <FileDownloadOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Print Page">
              <IconButton size="small" sx={{ color: '#64748b', '&:hover': { color: '#0b4d9c' } }}>
                <PrintOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share Link">
              <IconButton size="small" sx={{ color: '#64748b', '&:hover': { color: '#0b4d9c' } }}>
                <ShareOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem sx={{ mx: 0.5, height: 24, my: 'auto' }} />
          </Box>

          <Tooltip title="Notifications">
            <IconButton size="small" sx={{ color: '#475569' }}>
              <Badge badgeContent={3} color="error" variant="dot">
                <NotificationsOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Help & FAQs">
            <IconButton size="small" sx={{ color: '#475569', display: { xs: 'none', sm: 'inline-flex' } }}>
              <HelpOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem sx={{ height: 28, my: 'auto' }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, cursor: 'pointer', pl: 0.5 }}>
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: '#0b4d9c',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1.5px solid #cbd5e1',
              }}
            >
              AS
            </Avatar>
            <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'left' }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', lineHeight: 1.2 }}>
                Sh. Abhishek Singh
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                Advisor (QoS / B&CS)
              </Typography>
            </Box>
            <ArrowDropDownIcon sx={{ color: '#64748b', display: { xs: 'none', md: 'block' }, fontSize: 18 }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
