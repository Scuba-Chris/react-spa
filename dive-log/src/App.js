import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { DiveSiteForm, ListOfSites } from './components/Form';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      diveSites: [ {id : 1, siteName: 'Redondo'}, ]
    }
  this.submitHandler = this.submitHandler.bind(this);
  this.deleteHandler = this.deleteHandler.bind(this);
  }
  submitHandler(siteData){
    siteData.id = Math.floor(Math.random() * 1000 )
    let newList = this.state.diveSites.concat(siteData)
    this.setState({
      diveSites : newList
    })
    console.log(newList)
  }

  deleteHandler(divesSiteDelete){
    const newDiveSites = this.state.diveSites.filter(site => site.id !== divesSiteDelete.id);

    this.setState({
      diveSites : newDiveSites
    })
  }

  render(){
    return(
      <>
        <div className='App'>
          <Header count={ this.state.diveSites.length } />
          <DiveSiteForm onSubmit={ this.submitHandler } onDelete={ this.deleteHandler } />
          <ListOfSites diveSites={ this.state.diveSites } />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
