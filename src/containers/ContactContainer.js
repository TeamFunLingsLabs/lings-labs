import { connect } from "react-redux";
import Contact from "../components/Contact"
import { fetchCalendar } from "../actions";
//Sheila was here


const mapDispatchToProps = dispatch => {

  return {
    fetchCalendar: () => dispatch(fetchCalendar())
  }
}


export default connect(null, mapDispatchToProps)(Contact);


