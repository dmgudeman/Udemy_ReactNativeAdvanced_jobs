
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job){
    return (
      <Card title={job.jobtitle}>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
          <Text></Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    )

  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">
      </Card>
    )

  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs || [] }
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}


// using jobs to signify the jobs object from the Indeed API and 
// jobs is now used as the key for only the results property of the jobs object
// returned.
function mapStateToProps({ jobs }) {
  return { jobs: jobs.result };
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}
export default connect(mapStateToProps)(DeckScreen);