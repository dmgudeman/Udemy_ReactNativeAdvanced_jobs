import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component{
  render() {
    return (
      <View>
        
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

export default connect(mapStateToProps)(DeckScreen);