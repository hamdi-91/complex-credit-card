import React from 'react';


class Complex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '0000000000000000',
      name: 'xxxxx xxx',
      valid: 'xx/xx',

    }
  }


  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (

      <div style={{ display: 'flex' }}>

        <div className='credit-card'>
          <div className='card-container'>
            <h1 className='credit-card-title'>CREDIT CARD</h1>

          </div>
          <img className='chip-pic' src='https://previews.123rf.com/images/miceking/miceking1603/miceking160300029/53109625-chip-of-credit-card-sim-card-chip.jpg' />
          <h3 className='credit-holder-number'>{this.state.number.replace(/(.{4})/g, '$1 ')
}</h3>
          <div className='credit-number-pic'>

            <div className='credit-card-number'>
              <div className='credit-card-holder'>
                <h3>{this.state.name.toUpperCase()}</h3>
              </div>
              <div className='validity-card'>
                <div>
                  <h6 className='valid'>VALID THRU </h6>
                </div>
                <div className='month-year'>
                  <h6 className='m-y'>MONTH/YEAR</h6>
                  <h3 className='valid-card'> {this.state.valid.slice(0,2)+'/'+this.state.valid.slice(2,4)}</h3>

                </div>
              </div>
            </div>
            <div className='visa-master-card'>
              <img className='visa-master' src='https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png' />

            </div>
            </div>
          </div>
          <div>
            <input type="text" placeholder="card number" onChange={this.handleChange} name="number" maxlength="16" />
            <input type="text" placeholder="name" onChange={this.handleChange} name="name" maxlength="20" />
            <input type="text" placeholder="valid thru" onChange={this.handleChange} name="valid" maxlength="4" />
          </div>
        </div>
      )
  }
}
export default Complex;