var React = require("react");

var OpportunityCard = React.createClass({
    selectAction: function () {
        
    },

    renderAction: function (action) {
        <button className="btn btn-primary active">
            {action.name}
        </button>
    },

    render: function () {
        var {description} = this.props;

        return (
            <div className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden={true}>
                                    &times;
                                </span>
                            </button>
                            <h4 className="modal-title">
                                Opportunity
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div>
                                {discription}
                            </div>
                            <div className="btn-group">
                                {actions.map(this.renderAction)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
