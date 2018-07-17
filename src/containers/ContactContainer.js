import { connect } from "react-redux";
import Contact from "../components/Contact"
import { fetchCalendar } from "../actions";



const mapDispatchToProps = dispatch => {

  return {
    fetchCalendar: () => dispatch(fetchCalendar())
  }
}


export default connect(null, mapDispatchToProps)(Contact);


