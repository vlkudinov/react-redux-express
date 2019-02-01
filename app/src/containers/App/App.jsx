import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Tickets from '../../components/Tickets/TicketList';
import Sidebar from '../../components/Sidebar/Sidebar';
import Sorting from '../../components/Sorting/Sorting';
import Currency from '../../components/Currency/CurrencyList';
import Filter from '../../components/Filter/FilterList';
import Loader from '../../components/Loader/Loader';
import {getVisibleTickets, getStopsFromTickets} from '../../selectors';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.getTickets();
  }
  
  renderApp() {
    const {tickets, currencies, stops, filter, setCurrency, setFilter, setSortBy} = this.props;
    
    return (
      <div className="App">
        <Sidebar>
          <Sorting setSortBy={setSortBy}/>
          <Currency currencies={currencies} setCurrency={setCurrency}/>
          <Filter stops={stops} filter={filter} setFilter={setFilter}/>
        </Sidebar>
        <Tickets tickets={tickets} currency={currencies.active}/>
      </div>
    );
  }
  
  render() {
    return this.props.tickets ? this.renderApp() : <Loader/>;
  }
}

const mapStateToProps = state =>
  ({
    tickets: getVisibleTickets(state),
    stops: getStopsFromTickets(state),
    currencies: state.currencies,
    filter: state.filter
  });

const mapDispatchToProps = dispatch => ({
  getTickets: tickets => dispatch(actions.getTickets(tickets)),
  setCurrency: currency => dispatch(actions.setCurrency(currency)),
  setFilter: stop => dispatch(actions.setFilter(stop)),
  setSortBy: sortBy => dispatch(actions.setSorting(sortBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
