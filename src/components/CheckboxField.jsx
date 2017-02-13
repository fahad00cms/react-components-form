import React from 'react';
import FieldConnect from './FieldConnect';

class CheckboxField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.value || false,
            value: props.checkboxValue || true
        };
        this.toggleValue = this.toggleValue.bind(this);
    }

    toggleValue() {
        let value = !this.state.checked ? this.state.value : undefined;
        if (!value && this.props.type.name === 'Boolean') value = false;
        this.setState({
            checked: !this.state.checked
        });
        if (typeof this.props.onChange === 'function') this.props.onChange(value);
    }

    render(){
        const {
            className,
            name,
            errors,
            error,
            value,
            label
        } = this.props;
        return (
            <div className={className}>
                {label && <label>{label}</label>}
                <input
                    type="checkbox"
                    checked={!!value}
                    name={name}
                    onClick={this.toggleValue}
                />
            </div>
        );
    }
}

export default FieldConnect(CheckboxField);