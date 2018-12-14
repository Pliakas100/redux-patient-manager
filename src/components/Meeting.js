import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 

//Redux
import { connect } from 'react-redux';
import { deleteMeeting } from '../actions/meetingsActions';


class Meeting extends Component{
	
	eraseMeeting = () =>{
		this.props.deleteMeeting(this.props.info.id);
	}

	render(){

		const {date, time, pet, owner, symptoms, id } = this.props.info;

		return(
			<div className="media mt-3">
				<div className="media-body">
					<h3 className="mt-0">{pet}</h3>
					<p className="card-text"><span>Owner Name: {owner}</span></p>
					<p className="card-text"><span>Date: {date}</span></p>
					<p className="card-text"><span>Time: {time}</span></p>
					<p className="card-text"><span>{symptoms}</span></p>

					<button onClick={ this.eraseMeeting } className="btn btn-danger">
						Delete
					</button>
				</div>
			</div>
		)
	}
}

Meeting.propTypes = {
	info: PropTypes.shape({
		date: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired,
		pet: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		symptoms: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}),
	deleteMeeting : PropTypes.func.isRequired
}




export default connect(null, {deleteMeeting}) (Meeting); 