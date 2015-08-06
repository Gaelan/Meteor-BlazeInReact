/**
 * params: template - name of template, data - context for template
 */

/// <reference path="typings/react/react-global.d.ts"/>
/// <reference path="typings/meteor/meteor.d.ts"/>

module BlazeInReact {
    export interface Props {
        template: string;
        data: any
    }
    export interface State {
        blazeView: Blaze.View
    }
}
class BlazeInReact extends React.Component<BlazeInReact.Props, BlazeInReact.State> {
    render() {
        return <div />;
    }
    componentDidMount() {
        var node = React.findDOMNode(this);
        var templateName = this.props.template;
        var data = this.props.data;
        if(!templateName || !Template[templateName]){
            console.error("Template", templateName, "is missing.");
            return;
        }
        this.setState({blazeView: Blaze.renderWithData(Template[templateName], data, node)});
    }
    componentWillUnmount() {
        if(this.state.blazeView){
            Blaze.remove(this.state.blazeView);
            this.setState({blazeView: undefined});
        }
    }
}