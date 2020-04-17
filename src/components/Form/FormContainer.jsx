import { connect } from 'react-redux';
import { resetAll, setFirstName, setLastName, setEmail, setUserId, setPhoneNumber, setReferenceCode, setCity, setCountry, setState } from '../../store/app-reducer';
import Form from './Form';

const mapStateToProps = (state) => {
  return {...state.app};
};


export default connect(mapStateToProps, {resetAll, setFirstName, setLastName, setEmail, setUserId, setPhoneNumber, setReferenceCode, setCity, setState, setCountry })(Form);
