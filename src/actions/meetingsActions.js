import { SHOW_MEETINGS, ADD_MEETING, DELETE_MEETING } from './types';

export const getMeetings = () =>{ 
	return{ 
		type: SHOW_MEETINGS
	}
}

export const addMeeting = (meeting) => {
	return { 
		type: ADD_MEETING,
		payload:meeting
	}
}

export const deleteMeeting = (id) => {
	return { 
		type: DELETE_MEETING,
		payload: id
	}
}