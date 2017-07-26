export default class Utility {
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

    constructor() {
    }

    welcome() {
      console.log("Hi. Welcome To Application Utility.!!!!!!!!!");
    }

    ajaxUtilityAPI(queryToRun, forWhat) {
      console.log("## AjaxUtilityAPI Running ##");
      console.log("Query :");
      console.log(queryToRun);

      $.ajax({
      type: "POST",/*method type*/
      contentType: "application/graphql; charset=utf-8",
      headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
      url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",/*Target function that will be return result*/
      data: queryToRun,/*parameter pass data is parameter name param is value */ //{"data":"' + param + '"}
      dataType: "json",
      success: function(data) {
             console.log("GraphQL Output: "+forWhat);
             console.log(data);
             //console.log("**!!!!! Filling STORE !!!!!**");
             //dispatch(fillStore(data));
             //alert("Success");
      },
      error: function(result) {
          alert("Error - "+forWhat);
      }
      });
      console.log("Ajax Request Done: "+forWhat);
    }


    ajaxUtilityAPITemp(queryToRun, forWhat, dispatch) {
      console.log("## AjaxUtilityAPITemp Running ##");
      console.log("Query :");
      console.log(queryToRun);
      console.log(dispatch);

      //dispatch(this.fetching());
      //OR
      //dispatch({type: 'FETCHING'});

      $.ajax({
      type: "POST",/*method type*/
      contentType: "application/graphql; charset=utf-8",
      headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
      url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",/*Target function that will be return result*/
      data: queryToRun,/*parameter pass data is parameter name param is value */ //{"data":"' + param + '"}
      dataType: "json",
      success: function(data) {
             console.log("GraphQL Output: "+forWhat);
             console.log(data);
             var response = data;
             //console.log("**!!!!! Filling STORE !!!!!**");
             //dispatch(fillStore(data));
             //OR
             dispatch({type: 'FILL_STORE', data: response});
             //alert("Success");
      },
      error: function(result) {
          alert("Error - "+forWhat);
      }
      });
      console.log("Ajax Request Done: "+forWhat);
    }

    fetching() {
        console.log("Fetching data... Please Wait..!!! ");
        return {
            type: 'FETCHING'
        }
    }

}
