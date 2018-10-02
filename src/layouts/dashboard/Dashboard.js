import React, { Component } from 'react'
import { ContractData } from 'drizzle-react-components'


class Dashboard extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
            <p><ContractData contract="Registry" method="appWasMade" methodArgs={["26eb4b60c6abe61d462df84860af4fd713205a8b8a308d5c5a852e514f3189c9"]}/></p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
