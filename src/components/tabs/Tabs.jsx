import React from 'react';
import {
  Tabs,
  Tab,
  Card,
} from '@mui/material';
import { getFieldLabel } from '../../utils';
import {
  tableFeedback,
  activeInternships,
} from '../../mocks/profileData.json';
import { columnDefsFeed, columnDefsInternships } from '../../constants';
import ProfileTable from '../feedbacks/ProfileTable';

export default class CustomTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, newValue) {
    this.setState({ selectedTab: newValue });
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <Card className="activityTab">
        <Tabs value={selectedTab} onChange={this.handleChange}>
          <Tab label={getFieldLabel('profile.tab.internships')} />
          <Tab label={getFieldLabel('profile.tab.feedbacks')} />
        </Tabs>
        {selectedTab === 0 && (
          <ProfileTable
            rowData={activeInternships}
            columnDefs={columnDefsInternships}
          />
        )}
        {selectedTab === 1 && (
          <ProfileTable
            rowData={tableFeedback}
            columnDefs={columnDefsFeed}
          />
        )}
      </Card>
    );
  }
}
