import React from "react";

const UserDetail = props => {
	return (
		<div>
         {props.match.params.id}
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
};

export default UserDetail;
