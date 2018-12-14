import React, { Component } from 'react';
import Header from './components/Header';
import AddMeeting from './components/AddMeeting';
import MeetingList from './components/MeetingList';

//Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


  componentDidMount(){
    const meetingsLS = localStorage.getItem('meetings');

    if(meetingsLS){
      this.setState({
        meetings: JSON.parse(meetingsLS)
      })
    }
  }

  //
  componentDidUpdate(){
    localStorage.setItem(
      'meetings',
      JSON.stringify(this.state.meetings)
    )
  }


  deleteMeeting = id => {
    //state copy
    const actualMeetings = this.state.meetings; 

    const meetings = actualMeetings.filter(meeting => meeting.id !== id);

    this.setState({meetings});

  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header
            title="Patient manager"
          />
          <div className="row">
            <div className="col-md-6">
              <AddMeeting/>
            </div>
            <div className="col-md-6">
              <MeetingList
                deleteMeeting={this.deleteMeeting}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
