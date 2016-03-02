var React = require('react');
var ReactDOM = require('react-dom');

// tutorial - 1 and 3
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});


// tutorial - 2 and 5
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});


var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});


// tutorial - 4, 6 and 7
var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup};
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{ this.props.author }</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

// tutorial - 8
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('app')
);
