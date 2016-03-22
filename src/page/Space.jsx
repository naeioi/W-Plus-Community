import React from 'react'
import Header from '../component/Header.jsx'
import { mergeCSS } from '../utility/style'
import NavBar from '../component/NavBar.jsx'

// SpaceEntry props = {
// 	style: ..,
// 	name: '钢琴房',
// 	backgroundImage: 'url(http://example.com/bg.png)',
// 	spaces: [
// 		{
// 			/* refer to Database.md: spaceInfo */
// 			name: '西南十钢琴房',
// 		}
// 	]
// }

class SpaceEntry extends React.Component {
	constructor() {
		super();
		this.state = {
			on: false
		}
	}

	render() {
		const {
			backgroundImage,
			name
		} = this.props;

		let s = {
			main: {
				width: '100%',
			},
			poster: {
				height: 122,
				backgroundImage: this.props.backgroundImage
			},
			spaceEntry: {

			}
		};

		return (
			<div style={s.main}>
				<div style={s.poster}>
					{name}
				<div>
				<div style={mergeCSS(s.spaceEntry, {
						display: on ? 'block' : 'none'
					})}>
					name
				</div>
			</div>
			)
	}
}

class Space extends React.Component {
	constructor() {
		super();
	}

	render() {
		const {
			spaces
		} = this.props;

		let s = {
			main: {
			
			},
			categoryEntry: {
				width: '100%'
			},
			categoriesWrap: {
				paddingTop: 44,
			}
		};

		return (
			<div style={s.main}>
				<Header>
					场地
				</Header>
				<div style={s.categoriesWrap}>
					{spaces.map((category)=>(
						<SpaceEntry 
							style={s.categoryEntry}
							{..category} />
					))}
				</div>
				<NavBar />
			</div>
			);
	}
}