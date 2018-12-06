import React from "react";
import {Link} from 'react-router-dom'

const Home = props => {
	return (
		<div>
			Home
         <Link to="/detail/joni">Joni</Link>
         <Link to="/detail/joni">Jona</Link>
         <Link to="/detail/joni">Jono</Link>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
};

export default Home;
