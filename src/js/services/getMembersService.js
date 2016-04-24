app.service('manipulateMembersService', ['getMembersService', '$http', function(getMembersService, $http) {

    return {
        getIndAge: function() {
            getMembersService.getallMembers()
                .then(function(data) {
                    console.log('data for individual', data);
                    return data;
                });
        }
    }

}]); // end of mainpulating service


app.service('getMembersService',['$http', function($http){
    return {


        getallMembers: function () {
            return $http({
                method: 'GET',
                url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/'
            })
                .then(function (results) {
                    return results;
                });
        }
        //TODO: create a function that takes members DOB and finds age
        //TODO: need to get testimonials of members


    }; // end of return statement

}]); //end of service

