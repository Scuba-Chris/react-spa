import React from 'react';

class DiveSiteForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            diveSiteName : '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    handleInputChange(event){
        this.setState({ diveSiteName : event.target.value })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit({ siteName: this.state.diveSiteName })
        this.setState({ diveSiteName : '' })

    }
    deleteHandler(siteDelete){
        const deleteFromList = this.state.filter(site => site.id !== siteDelete.id)
        this.setState( { deleteFromList })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Enter site name: </legend>
                        <input name='diveSiteName' type='text' value={this.state.diveSiteName} onChange={this.handleInputChange} />
                        <button>Submit</button>
                </fieldset>
            </form>
        )
    }
}

function DiveSiteCreate(props) {
    return (
        <>
            <li>
                <p>{props.site.siteName}</p>
                <button onClick={() => props.onDelete(props.site)} >Delete</button>
            </li>
        </>

    )
}

class ListOfSites extends React.Component{
    
    render(){
        return(
            <>
                <ul>{this.props.diveSites.map(site => <DiveSiteCreate key={site.id} site={site}  />)}</ul>
            </>
        )
    }
}

export { DiveSiteForm, ListOfSites }


    