import React from 'react'
import { mergeCSS } from '../utility/style'

const ButtonMixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.state = {
			on: false
		}
	}

	onTouchStart() {
		console.log('touch')
		this.setState({
			on: true
		})
	}

	onTouchEnd() {
		this.setState({
			on: false
		})
	}

	render() {
		return (
			<InnerComponent
				onTouchStart={this.onTouchStart.bind(this)}
				onTouchEnd={this.onTouchEnd.bind(this)}
				onTouchCancel={this.onTouchEnd.bind(this)}
				{...this.props}
				style={mergeCSS(this.props.style, {
					WebkitUserSelect: 'none',
					backgroundColor: this.state.on ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)'
				})}
				/>
			);
	}
}

export default ButtonMixin