import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';

const ChipFormatter = ({ value }) => {
    const [color, setColor] = useState();

    useEffect(() => { 
        switch (value) {
            case "New":
                setColor("secondary")
              break;
            case "HR_Review":
                setColor("primary")
              break;
              case "InterviewerReview":
                setColor("primary")
              break;
              case "TestTask":
                setColor("primary")
              break;
              case "Pending":
                setColor("default") 
              break;
              case "Accepted":
                setColor("success") 
              break;
              case "Questionable":
                setColor("warning")
              break;
              case "Graduated":
                setColor("success")
              break;
              default:
                setColor("error")
                break;
          }
      }, []);

      return (
    <Chip label={value} color={color} variant="outlined" size="small" />
      )
    };

export default ChipFormatter;