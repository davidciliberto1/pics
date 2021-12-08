import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className='ui segment' >
                <form
                    className='ui form'
                    onSubmit={(this.onFormSubmit)}
                >
                    <div className='field'>
                        <label className='label'>Image Search</label>
                        <div className="ui icon input">
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => this.setState({ term: e.target.value })}
                                value={this.state.term}
                            />
                            <i className="circular search link icon"></i>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}
