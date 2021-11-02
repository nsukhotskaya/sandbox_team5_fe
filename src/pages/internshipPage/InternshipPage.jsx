import React from 'react';
import { 
  Box, Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText
} from '@mui/material';
import './internshipPage.sass';
import assets from '../../assets';
import { getFieldLabel } from '../../utils';
import { rowDataMentors, rowDataEmployees, internshipData } from '../../mocks/internshipMentorsEmployees.json';
import { columnDefsMentors, columnDefsEmployees } from '../../constants';
import ProfileTable from '../../components/feedbacks/ProfileTable';

const { internshipJavascript } = assets;

export default class InternshipPage extends React.Component{
  constructor(props) {
    super(props);
    this.state ={};
  }

  render(){
    return(
    <Box className="flexContainer">
      <Box className="internshipContentWrapper">
        <Card className="InternshipDataText" >
          <CardMedia 
          component="img"
          image={internshipJavascript} /> 
          <CardContent>
            <Typography variant="h4" >{internshipData.name}</Typography>
            <List>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.date')} />
                <Typography variant="body1">{internshipData.date}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.technology')} />
                <Typography variant="body1">{internshipData.technology}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.language')} />
                <Typography variant="body1">{internshipData.language}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.location')} />
                <Typography variant="body1">{internshipData.location}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.applicants')} />
                <Typography variant="body1">{internshipData.applicants}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.rejected')} />
                <Typography variant="body1">{internshipData.rejected}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.approve')} />
                <Typography variant="body1">{internshipData.approve}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.refused')} />
                <Typography variant="body1">{internshipData.refused}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.graduated')} />
                <Typography variant="body1">{internshipData.graduated}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary={getFieldLabel('internship.page.number.teams')} />
                <Typography variant="body1">{internshipData.teams}</Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box> 
      <Box className="internshipContentWrapper">
        <Box className="tableWrapper" >
          <Card className="InternshipDataMentors">
            <Typography variant="h4" >{getFieldLabel('internship.page.mentors')}</Typography>
            <ProfileTable  rowData={rowDataMentors} columnDefs={columnDefsMentors} />
          </Card>
        </Box> 
      </Box>  
      <Box className="internshipContentWrapper">
        <Box className="tableWrapper" >
          <Card className="InternshipDataEmployees">
            <Typography variant="h4" >{getFieldLabel('internship.page.employees')}</Typography>
            <ProfileTable  rowData={rowDataEmployees} columnDefs={columnDefsEmployees} />
          </Card>
        </Box>
      </Box>     
    </Box>
    );
  }
}
