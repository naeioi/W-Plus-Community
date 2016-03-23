import React from 'react'
import Header from '../component/Header.jsx'
import { mergeCSS } from '../utility/style'
import NavBar from '../component/NavBar.jsx'
import chunkit from '../utility/chunkit'
import Button from '../component/Button.jsx'
import ButtonMixin from '../component/ButtonMixin.jsx'
import padArray from '../utility/padArray'

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

	toggleSpaceEntry() {
		this.setState({
			on: !this.state.on
		})
	}

	render() {
		const {
			backgroundImage,
			name
		} = this.props;

		const ButtonTd = ButtonMixin((props)=><td {...props}>{props.children}</td>);

		const tableBorder = '1px solid rgb(230,230,230)';

		let s = {
			main: {
				width: '100%',
				position: 'relative',
				marginBottom: 5,
				boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
			},
			poster: {
				height: 122,
				position: 'relative'
			},
			posterBG: {
				position: 'absolute',
				top: 0, left: 0,
				height: '100%', width: '100%',
				backgroundImage: this.props.backgroundImage,
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				zIndex: -1,
				transition: 'opacity 300ms ease',
			},
			posterText: {
				width: '100%',
				lineHeight: '122px',
				textAlign: 'center',
				fontSize: 20,
				letterSpacing: 3,
				fontWeight: 'bold',
      	textShadow: '0 0 3px rgba(0,0,0,0.5)',
      	color: 'rgb(255,255,255)',
			},
			spaceEntry: {
				width: '100%',
				border: tableBorder,
				borderCollapse: 'collapse',
				backgroundColor: 'white'
			},
			tr: {
				border: tableBorder
			},
			td: {
				height: 60,
				fontSize: '0.5em',
				border: tableBorder,
				textAlign: 'center',
				padding: '0 5%',
				display: 'table-cell',
				verticalAlign: 'middle',
				color: 'black'
			},
		};

		console.log(padArray([1,2],4))

		return (
			<div style={s.main}>
				<div 
					style={s.poster} 
					onTouchTap={this.toggleSpaceEntry.bind(this)}>
					<div style={mergeCSS(s.posterBG, {opacity: this.state.on ? 1:0.6})}></div>
					<div 
						className="noselect"
						style={s.posterText}>
						{name}
					</div>
				</div>
				<table style={mergeCSS(s.spaceEntry, {
							display: this.state.on ? 'block' : 'none'
						})}>
					<tbody>
						{chunkit(this.props.spaces, 4).map((row, ind)=>(
							<tr 
								key={ind}
								style={s.tr}>
								{padArray(row, 4).map((space, ind)=>(
									<ButtonTd
										style={s.td}
										key={ind}>
										{space.name}
									</ButtonTd>
								))}
							</tr>
						))}
					</tbody>
				</table>
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
			spaces = []
		} = this.props;

		let s = {
			main: {
			
			},
			categoryEntry: {
				width: '100%'
			},
			categoriesWrap: {
				paddingTop: 44,
				paddingBottom: 80
			}
		};

		return (
			<div style={s.main}>
				<Header>
					场地
				</Header>
				<div style={s.categoriesWrap}>
					{spaces.map((category, ind)=>(
						<SpaceEntry 
							key={ind}
							style={s.categoryEntry}
							{...category} />
					))}
				</div>
				<NavBar />
			</div>
			);
	}
}

export default Space;