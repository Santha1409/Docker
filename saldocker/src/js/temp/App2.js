import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag'; //temp code..........

import PostList from './PostList';
 //asdfas
class App2 extends Component {
  constructor(...args) {
    super(...args);

    console.log("GraphQL calling....");

    //const networkInterface = createNetworkInterface( {uri: 'https://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql'});

    // const networkInterface = createNetworkInterface('https://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql', {
    //   headers: {
    //     clientId: "233668646673605",
    //     clientSecret: "33b17e044ee6a4fa383f46ec6e28ea1d"
    //   }
    // });

     const networkInterface = createNetworkInterface('http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql', {
       headers: {
         clientId: "233668646673605",
         clientSecret: "33b17e044ee6a4fa383f46ec6e28ea1d"
       }
     });

     console.log("running client now.....");
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });

    console.log("Running query now.....");
    //temp code...................................
    this.client.query({
   query: gql`
    query { getTimePeriod (dateTime:"2017-05-31T00:00:00"){year period week} }
   `,
  })
  .then(data => console.log(" output graphql: "+data))
  .catch(error => console.error("There is error in GraphQL fetch.: "+error));
  //temp code.....................................

  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <PostList />
      </ApolloProvider>
    );
  }
}

export default App2;
