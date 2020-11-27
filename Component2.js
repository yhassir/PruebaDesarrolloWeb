import React from 'react';

class Component2 extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
    }
    
    render () {
      const { name } = this.state
      
      return (
        <div>
           <form>
            <label for>Texto: 
              <input 
                type="text" 
                value={name} 
                onChange={(e) => this.setState({ name: e.target.value })} 
              />
            </label>
          </form>
  
          <div>
              <h2>Palabra escrita:</h2>
              <p>
                <font face="Comic Sans MS,arial" size='35' color="aqua">
                {this.state.name}
                </font>
              </p>
          </div>
        </div>
      )
    }
  }

  export default Component2;