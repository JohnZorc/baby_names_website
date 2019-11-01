import React from 'react';
import './App.css';
//Components
import ShortList from './components/shortlist'
import Credit from './components/credit'
import Search from "./components/search";
import NamesList from './components/nameslist'

//use the div wrapper since all elements in the return statement must be wrapped in one wrapper for react to compile
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            favorites: []
        }
    }
    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    addFavorite(id) {
        const list = this.state.favorites.concat([id]);
        this.setState({
            favorites: list
        })
    }
    render () {
        return (
            <div>
                <Search
                    filterText = {this.state.filterText}
                    filterUpdate = {this.filterUpdate.bind(this)}
                />
                <main>
                    <ShortList
                        favorites={this.state.favorites}
                        data={this.props.data}

                    />
                    <NamesList
                        data={this.props.data}
                        filterText={this.state.filterText}
                        addFavorite={this.addFavorite.bind(this)}
                    />
                    <Credit />
                </main>
            </div>
        )
    }
}

export default App;
