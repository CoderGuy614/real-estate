import React from 'react'

class Pin extends React.Component {
	state = {
		house: this.props.house,
		lat: this.props.lat,
		lng: this.props.lng
	}
	componentWillMount() {
		this.setState({
			house: this.props.house,
			lat: this.props.lat,
			lng: this.props.lng
		})
	}
	componentWillReceiveProps(props) {
		this.setState({
			house: this.props.house,
			lat: this.props.lat,
			lng: this.props.lng
		})
	}
	render() {
		return (
			<div
				className={this.state.house.selected ? 'pin selected' : 'pin'}
				lat={this.state.lat}
				lng={this.state.lng}
			>
				<label>${this.state.house.price}</label>
			</div>
		)
	}
}

export default Pin
