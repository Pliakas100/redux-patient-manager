import { SHOW_MEETINGS, ADD_MEETING, DELETE_MEETING } from '../actions/types';

//initial state, each reducer need to has his own state

const initialState = {
	meetings: [
		{
			id: 0,
			date: '10-12-2018',
			time: '10:30',
			pet: 'goku',
			owner: 'cristo',
			symptoms: 'too hairy'
		}

	]
}

export default function(state = initialState, action){
	switch(action.type){
		case SHOW_MEETINGS:
			return{
				...state
			}
		case ADD_MEETING:
			return{
				...state,
				meetings: [...state.meetings, action.payload]
			}
		case DELETE_MEETING:
			return{
				...state,
				meetings: state.meetings.filter(meeting => meeting.id !== action.payload )
			}

		default:
			return state;
	}
}