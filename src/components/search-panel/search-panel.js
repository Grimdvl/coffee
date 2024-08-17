import { Component } from 'react';
import './search-panel.css';
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="our-coffee__filters--search">
                <label htmlFor="search" className='about-text'>Lookiing for</label>
                <input type='text'
                id="search"
                className='country--search'
                placeholder='start typing here...'
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
            </div>
        );
    }
}

export default SearchPanel;