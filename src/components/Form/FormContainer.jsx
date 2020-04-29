import { connect } from 'react-redux';
import { resetAll,  setCity, setCountry, setState } from '../../store/app-reducer';
import Form from './Form';

const mapStateToProps = (state) => {
  return {...state.app};
};


export default connect(mapStateToProps, {resetAll,  setCity, setState, setCountry })(Form);
