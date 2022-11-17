import React from 'react';
import Auth from '../../utils/auth';
import Login from '../Login';

// //importing materialize
// import 'materialize-css';
// // import { Button, Card, Row, Col } from 'react-materialize';

// //Importing additional hooks
// import { useParams } from 'react-router-dom';

// //Importing apollo 
// // import { useQuery } from '@apollo/client';
// // import { QUERY_USER } from '../utils/queries';

function Profile() {
    if(Auth.loggedIn()) {
        return (
            <div>Write code here</div>
        )

    }
    else{ 
        return (<Login />)
    }

    // const { username: userParam } = useParams()

//     // const { loading, data } = useQuery(QUERY_USER, {
//     //     variables: { username: userParam }
//     //   });
  

//     //   const user = data?.user || {};

//     //   if (loading) {
//     //     return <div>Loading...</div>;
//       }
   
     
    

}

export default Profile;