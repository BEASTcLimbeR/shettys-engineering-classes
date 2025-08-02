import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Chip } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CourseAccordion = ({ branch, coursesData }) => {
  const years = ['FE', 'SE', 'TE', 'BE'];
  return (
    <Grid container spacing={2}>
      {years.map((year) => (
        <Grid item xs={12} md={6} key={year}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{year}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {coursesData[branch][year] && coursesData[branch][year].length > 0 ? (
                <Grid container spacing={1}>
                  {coursesData[branch][year].map((course, idx) => (
                    <Grid item key={idx}>
                      <Chip label={course} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body2" color="text.secondary">No courses listed.</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseAccordion;