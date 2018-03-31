import React , {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key ={book.title}
                    onClick={() =>this.props.selectBook(book)}
                    className="list-group-item">{book.title}</li>
            );
        })
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({selectBook : selectBook},dispatch);
}

function mapStateToProps(state) {
    return{
        books : state.books
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(BookList);