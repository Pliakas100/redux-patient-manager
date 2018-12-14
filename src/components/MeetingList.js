import React, {Component} from 'react';
import Meeting from './Meeting';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { getMeetings } from '../actions/meetingsActions'


class MeetingList extends Component{

	componentDidMount(){
		this.props.getMeetings();
	}

	render(){
		const meetings = this.props.meetings;

		const message = Object.keys(meetings).length === 0 ? 'There are no meetings' :  'Meetings admin'

		return(
			<div className="card mt-5">
				<div className="card-body">
					<h2 className="card-title text-center">{message}</h2>
					<div className="lista-citas">
						{Object.keys(this.props.meetings).map(meeting => (
							<Meeting
								deleteMeeting={this.props.deleteMeeting}
								key={meeting}
								info={this.props.meetings[meeting]}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

MeetingList.propTypes = {
	deleteMeeting : PropTypes.func.isRequired,
	meetings : PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	meetings: state.meetings.meetings
})

export default connect(mapStateToProps, { getMeetings }) (MeetingList);