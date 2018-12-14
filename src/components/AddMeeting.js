import React, {Component} from 'react'; 
import uuid from 'uuid';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { addMeeting } from '../actions/meetingsActions';



class AddMeeting extends Component{

    //refs
    //How to get ref current value: this.petNameRef.current.value
    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();

    state = { errro: false}; 

    addNewMeeting = e => {
        e.preventDefault();

        const pet = this.petNameRef.current.value,
            owner = this.ownerNameRef.current.value,
            date = this.dateRef.current.value,
            time = this.timeRef.current.value,
            symptoms = this.symptomsRef.current.value;

        if(pet === '' || owner === '' || date === '' || time === '' || symptoms === ''){
            this.setState({ error: true })
        }else{
            const newMeeting = {
                id:uuid(),
                pet,
                owner,
                date,
                time,
                symptoms
            }

            this.props.addMeeting(newMeeting);

            //reset the form
            e.currentTarget.reset();
            
        }

    }

    render(){
        const errorExists = this.state.error;
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Add meetings here</h2> 
                    <form onSubmit={this.addNewMeeting}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.petNameRef} type="text" className="form-control" placeholder="Pet Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.ownerNameRef} type="text" className="form-control"  placeholder="Owner Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.dateRef} className="form-control" />
                            </div>                            
                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.timeRef} className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref={this.symptomsRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                    </form>
                    { errorExists ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
        )
    }
}

AddMeeting.propTypes = {
    addMeeting : PropTypes.func.isRequired
}



const mapStateToProps = state => ({
    meetings:state.meetings.meetings
})
export default connect(mapStateToProps, {addMeeting}) (AddMeeting);



