import React from 'react'
import { mockEvent } from '../../mockData'
import EventEntry from '../../component/EventEntry.jsx'
const events = [mockEvent, mockEvent, mockEvent, mockEvent, mockEvent, mockEvent, mockEvent];

const Favo = () => {
	return (
		<div>
			{
				events.map((e, ind)=>(
					<EventEntry 
						key={ind}
						event={e} />
					))
			}
		</div>
	)
}

export default Favo