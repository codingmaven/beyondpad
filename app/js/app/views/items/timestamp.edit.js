﻿app.view.item.timestamp = app.view.item.timestamp || {};
app.view.item.timestamp.edit = app.lib.element({
    displayName: 'item.timestamp.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:options.timestamp', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        if (this.props.model.getOptions('timestamp') && this.props.model.data('created')) {
            return (
                React.DOM.div({ className: "timestamp" },
                    app.lib.dateTimeToString(this.props.model.data('created'))
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});