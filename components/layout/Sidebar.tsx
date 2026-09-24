'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const SIDEBAR_WIDTH = 250;

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileDrawerToggle?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeColor?: 'primary' | 'success' | 'warning' | 'default';
}

const mainNavItems: NavItem[] = [
  {
    label: 'Consultation Papers',
    href: '/consultation-papers',
    icon: <DescriptionOutlinedIcon fontSize="small" />,
    badge: '5 Open',
    badgeColor: 'success',
  },
  {
    label: 'Feedback Summary',
    href: '/feedback-summary',
    icon: <RateReviewOutlinedIcon fontSize="small" />,
    badge: '25 New',
    badgeColor: 'primary',
  },
  {
    label: 'Stakeholder Directory',
    href: '#stakeholders',
    icon: <PeopleAltOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Open House Discussions',
    href: '#ohd',
    icon: <RecordVoiceOverOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Reports & Analytics',
    href: '#reports',
    icon: <AssessmentOutlinedIcon fontSize="small" />,
  },
];

const secondaryNavItems: NavItem[] = [
  {
    label: 'Help & Support',
    href: '#help',
    icon: <HelpOutlineOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Admin Portal',
    href: '#admin',
    icon: <SettingsOutlinedIcon fontSize="small" />,
  },
];

export default function Sidebar({ mobileOpen = false, onMobileDrawerToggle }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      if (onMobileDrawerToggle) {
        onMobileDrawerToggle();
      }
    }
  };

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#ffffff',
        borderRight: '1px solid #e2e8f0',
      }}
    >
      {/* Officer Section in Sidebar */}
      <Box sx={{ p: 2, bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: '#0b4d9c',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            AS
          </Avatar>
          <Box sx={{ overflow: 'hidden' }}>
            <Typography variant="body2" noWrap sx={{ fontWeight: 700, color: '#0f172a' }}>
              Sh. Abhishek Singh
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>
              Advisor (QoS & Interconnect)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mt: 0.3 }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: '#16a34a',
                }}
              />
              <Typography variant="caption" sx={{ color: '#16a34a', fontSize: '0.68rem', fontWeight: 600 }}>
                TRAI Official
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Navigation List */}
      <Box sx={{ flex: 1, py: 1.5, px: 1.2, overflowY: 'auto' }}>
        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            py: 0.5,
            display: 'block',
            fontWeight: 700,
            fontSize: '0.68rem',
            color: '#94a3b8',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Consultation Modules
        </Typography>

        <List disablePadding sx={{ mt: 0.5 }}>
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleNavigate(item.href)}
                  sx={{
                    borderRadius: 1.5,
                    py: 0.85,
                    px: 1.5,
                    backgroundColor: isActive ? '#0b4d9c' : 'transparent',
                    color: isActive ? '#ffffff' : '#334155',
                    fontWeight: isActive ? 600 : 500,
                    '&:hover': {
                      backgroundColor: isActive ? '#07336b' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#0f172a',
                    },
                    transition: 'all 0.15s ease-in-out',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      color: isActive ? '#ffffff' : '#64748b',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: '0.8125rem',
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? '#ffffff' : '#334155',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                  {item.badge && (
                    <Chip
                      label={item.badge}
                      size="small"
                      sx={{
                        height: 19,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : undefined,
                        color: isActive ? '#ffffff' : undefined,
                      }}
                      color={isActive ? undefined : item.badgeColor}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 1.5, borderColor: '#f1f5f9' }} />

        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            py: 0.5,
            display: 'block',
            fontWeight: 700,
            fontSize: '0.68rem',
            color: '#94a3b8',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Management & Help
        </Typography>

        <List disablePadding sx={{ mt: 0.5 }}>
          {secondaryNavItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleNavigate(item.href)}
                sx={{
                  borderRadius: 1.5,
                  py: 0.85,
                  px: 1.5,
                  color: '#475569',
                  '&:hover': {
                    backgroundColor: '#f1f5f9',
                    color: '#0f172a',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32, color: '#64748b' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: '#475569' }}>
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer System Info */}
      <Box sx={{ p: 2, borderTop: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
        <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem', display: 'block', fontWeight: 600 }}>
          TRAI Consultation Portal v2.6
        </Typography>
        <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.65rem', display: 'block' }}>
          Telecom Regulatory Authority of India
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { md: SIDEBAR_WIDTH }, flexShrink: { md: 0 } }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
            top: { xs: '58px', md: '94px' },
            height: { xs: 'calc(100% - 58px)', md: 'calc(100% - 94px)' },
            borderRight: '1px solid #e2e8f0',
            position: 'fixed',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
