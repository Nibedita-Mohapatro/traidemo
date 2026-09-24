'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  mockMonthlyCommentsData,
  mockStakeholderData,
  mockStatusDistributionData,
} from '@/data/mockData';

export default function ConsultationCharts() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Chart 1 max calculation
  const maxCommentVal = 350;

  // Chart 3 Donut calculation
  const totalStatus = mockStatusDistributionData.reduce((acc, curr) => acc + curr.value, 0);
  let accumulatedAngle = 0;

  const donutSlices = mockStatusDistributionData.map((item) => {
    const sliceAngle = (item.value / totalStatus) * 360;
    const startAngle = accumulatedAngle;
    const endAngle = accumulatedAngle + sliceAngle;
    accumulatedAngle = endAngle;

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const R = 70;
    const r = 44;
    const cx = 100;
    const cy = 100;

    const x1 = cx + R * Math.cos(startRad);
    const y1 = cy + R * Math.sin(startRad);
    const x2 = cx + R * Math.cos(endRad);
    const y2 = cy + R * Math.sin(endRad);

    const x3 = cx + r * Math.cos(endRad);
    const y3 = cy + r * Math.sin(endRad);
    const x4 = cx + r * Math.cos(startRad);
    const y4 = cy + r * Math.sin(startRad);

    const largeArc = sliceAngle > 180 ? 1 : 0;

    const pathData = `
      M ${x1} ${y1}
      A ${R} ${R} 0 ${largeArc} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${r} ${r} 0 ${largeArc} 0 ${x4} ${y4}
      Z
    `;

    return {
      ...item,
      pathData,
      sliceAngle,
    };
  });

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {/* 1. Comments Trend (Bar Chart) */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            bgcolor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ p: 2.2, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.85rem' }}>
                Comments Trend
              </Typography>
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* SVG Bar Chart */}
            <Box sx={{ width: '100%', height: 190, position: 'relative', mt: 'auto' }}>
              <svg viewBox="0 0 320 180" width="100%" height="100%">
                {/* Background Grid Lines */}
                <line x1="40" y1="20" x2="305" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="40" y1="60" x2="305" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="40" y1="100" x2="305" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="40" y1="140" x2="305" y2="140" stroke="#e2e8f0" strokeWidth="1" />

                {/* Y-axis Labels */}
                <text x="32" y="24" textAnchor="end" fontSize="10" fill="#94a3b8">300</text>
                <text x="32" y="64" textAnchor="end" fontSize="10" fill="#94a3b8">200</text>
                <text x="32" y="104" textAnchor="end" fontSize="10" fill="#94a3b8">100</text>
                <text x="32" y="144" textAnchor="end" fontSize="10" fill="#94a3b8">0</text>

                {/* Bars */}
                {mockMonthlyCommentsData.map((d, idx) => {
                  const barWidth = 28;
                  const x = 58 + idx * 52;
                  const barHeight = (d.comments / maxCommentVal) * 120;
                  const y = 140 - barHeight;
                  const isHovered = hoveredBar === idx;

                  return (
                    <g
                      key={d.month}
                      onMouseEnter={() => setHoveredBar(idx)}
                      onMouseLeave={() => setHoveredBar(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Bar Rectangle */}
                      <rect
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        rx="4"
                        fill={isHovered ? '#1d4ed8' : '#60a5fa'}
                        opacity={isHovered ? 1 : 0.88}
                        style={{ transition: 'all 0.2s ease' }}
                      />
                      {/* Value label on top */}
                      <text
                        x={x + barWidth / 2}
                        y={y - 5}
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="600"
                        fill="#475569"
                      >
                        {d.comments}
                      </text>
                      {/* X-axis Label */}
                      <text
                        x={x + barWidth / 2}
                        y="156"
                        textAnchor="middle"
                        fontSize="10.5"
                        fill="#64748b"
                        fontWeight="500"
                      >
                        {d.month}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </Box>

            {/* Legend */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
              <Box sx={{ width: 10, height: 10, bgcolor: '#60a5fa', borderRadius: '2px' }} />
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
                Comments Received
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* 2. Stakeholder Participation (Horizontal Bar Chart) */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            bgcolor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ p: 2.2, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.85rem' }}>
                Stakeholder Participation
              </Typography>
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Horizontal Bars Container */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, flex: 1, justifyContent: 'center' }}>
              {mockStakeholderData.map((item) => (
                <Box key={item.category}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.3 }}>
                    <Typography variant="caption" sx={{ color: '#334155', fontWeight: 600, fontSize: '0.73rem' }}>
                      {item.category}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                      <strong>{item.participants}</strong> ({item.percentage}%)
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', height: 7, bgcolor: '#f1f5f9', borderRadius: 4, overflow: 'hidden', display: 'flex' }}>
                    <Box
                      sx={{
                        width: `${item.percentage * 1.8}%`,
                        bgcolor: '#3b82f6',
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Legend */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <Box sx={{ width: 10, height: 10, bgcolor: '#3b82f6', borderRadius: '2px' }} />
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
                  Participants (Count)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <Box sx={{ width: 10, height: 10, bgcolor: '#f97316', borderRadius: '2px' }} />
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem' }}>
                  Percentage (%)
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* 3. Consultation Status Overview (Donut Chart) */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            bgcolor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ p: 2.2, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.85rem' }}>
                Consultation Status Overview
              </Typography>
              <IconButton size="small" sx={{ color: '#94a3b8' }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* SVG Donut Chart */}
            <Box sx={{ width: '100%', height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <svg viewBox="0 0 200 200" width="150" height="150">
                {donutSlices.map((slice) => (
                  <path
                    key={slice.name}
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="#ffffff"
                    strokeWidth="2"
                    style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                  />
                ))}
                {/* Center text */}
                <text x="100" y="96" textAnchor="middle" fontSize="24" fontWeight="800" fill="#0f172a">
                  12
                </text>
                <text x="100" y="112" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">
                  Total Active
                </text>
              </svg>
            </Box>

            {/* Donut Legend */}
            <Grid container spacing={0.8} sx={{ mt: 'auto', pt: 1 }}>
              {mockStatusDistributionData.map((item) => (
                <Grid size={{ xs: 6 }} key={item.name}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: item.color, borderRadius: '50%', flexShrink: 0 }} />
                    <Typography variant="caption" noWrap sx={{ color: '#475569', fontSize: '0.68rem' }}>
                      {item.name}: <strong>{item.value}</strong>
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

