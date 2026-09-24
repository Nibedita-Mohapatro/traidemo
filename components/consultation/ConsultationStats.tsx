'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { mockStatsData, StatCardData } from '@/data/mockData';

export default function ConsultationStats() {
  const getIconAndColors = (card: StatCardData) => {
    switch (card.iconType) {
      case 'published':
        return {
          icon: <DescriptionOutlinedIcon sx={{ fontSize: 24, color: '#0b4d9c' }} />,
          iconBg: '#e0f2fe',
          numberColor: '#0b4d9c',
        };
      case 'open':
        return {
          icon: <ForumOutlinedIcon sx={{ fontSize: 24, color: '#16a34a' }} />,
          iconBg: '#dcfce7',
          numberColor: '#16a34a',
        };
      case 'closed':
        return {
          icon: <HourglassBottomOutlinedIcon sx={{ fontSize: 24, color: '#ea580c' }} />,
          iconBg: '#ffedd5',
          numberColor: '#ea580c',
        };
      case 'comments':
      default:
        return {
          icon: <MarkEmailReadOutlinedIcon sx={{ fontSize: 24, color: '#d97706' }} />,
          iconBg: '#fef3c7',
          numberColor: '#d97706',
        };
    }
  };

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {mockStatsData.map((stat) => {
        const { icon, iconBg, numberColor } = getIconAndColors(stat);

        return (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.id}>
            <Card
              elevation={0}
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: '#93c5fd',
                  boxShadow: '0 4px 12px rgba(11, 77, 156, 0.07)',
                },
              }}
            >
              <CardContent sx={{ p: 2.2, '&:last-child': { pb: 2 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#64748b',
                        fontWeight: 600,
                        fontSize: '0.78rem',
                        display: 'block',
                      }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: '1.85rem',
                        color: numberColor,
                        lineHeight: 1.1,
                        mt: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 0.5, borderTop: '1px solid #f1f5f9' }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.72rem' }}>
                    {stat.subtitle}
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.4,
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#0b4d9c',
                    }}
                  >
                    {stat.linkText}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

