var BookApp = angular.module("BookApp");

var OrderCtrl = BookApp.controller("OrderCtrl", function ($scope) {

        $scope.orderSearch = {value: "", mode: "orderId"};
        $scope.isValidSearch = function () {
            return !_.isEmpty($scope.orderSearch.value);
        }
        $scope.isOrderIdSearchMode = function () {
            return  $scope.orderSearch.mode == "orderId"
        };
        $scope.lastOrderSearch;

        $scope.searchOrder = function () {
            console.log("searchOrder(value:" + $scope.orderSearch.value + ", mode:" + $scope.orderSearch.mode + ")")
            $scope.lastOrderSearch = {value: $scope.orderSearch.value, mode: $scope.orderSearch.mode};
        }

        $scope.orderSearchResult = {
            totalNbResults: 10,
            orders: [
                {orderId: 1, customerFirstname:"Nicolas", customerLastname:"Gandriau",
                    books: [
                        {isbn: "1", title: "book1"},
                        {isbn: "2", title: "book2"}
                    ]},
                {orderId: 2, customerFirstname:"Nicolas", customerLastname:"Gandriau",
                    books: [
                        {isbn: "1", title: "book1"},
                        {isbn: "2", title: "book2"}
                    ]},
                {orderId: 3, customerFirstname:"Nicolas", customerLastname:"Gandriau",
                    books: [
                        {isbn: "1", title: "book1"},
                        {isbn: "2", title: "book2"}
                    ]}
            ]};

        $scope.selectOrder = function(anOrder){
            console.log("selected order with id:" + anOrder.orderId);
            $scope.selectedOrder = anOrder;
        };

        $scope.selectedOrder;
    }
);