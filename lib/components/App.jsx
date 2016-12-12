const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: null,
    };
  }

  componentDidMount() {
    this.setState({ location: localStorage.getItem('location' || '') }, () =>
    this.locationAccepted());
  }

  locationAccepted(e) {
    $.get(this.props.source + '/' + this.state.location, (data) => {
      this.setState({ weather: data.slice(0, 7) },
      localStorage.setItem('location', this.state.location));
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder='location'
          value = {this.state.location}
          onChange = { (e) => { this.setState({ location: e.target.value }); } }
         />
         <input type ='submit'
                onClick = { (e) => this.locationAccepted(e) }
         />
         <input type ='submit' />
       <WeatherCards weather={ this.state.weather } />
       </div>
     );
  }
}

const WeatherCards = (props) => {
  let { weather } = props;
  if (!weather) {
    return (
      <div>please enter a city</div>
 ); }
  return (
    <div className="WeatherCard">
      { weather.map((card) => <div key={card.date}>
        <Weather {...card}/>
        <li>high: {card.temp.high}</li>
        <li>low: {card.temp.low}</li>
    </div>
     )}
   </div>
 );
};

const Weather = (props) => {
  let { location, date, temp } = props;
  return (
    <div>
      <article>
        {location} {date}
      </article>
    </div>
 );
};

// denver, san-diego, san-francisco, castle-rock
ReactDOM.render(<App source= 'https://weatherly-api.herokuapp.com/api/weather' />, document.getElementById('application'));
