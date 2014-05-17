var BookApp = angular.module("BookApp");

var OrderCtrl = BookApp.controller("OrderCtrl", function ($scope) {


        $scope.orderSearch = {value: "", mode: "orderId"};
        $scope.isValidSearch = function () {
            return !_.isEmpty($scope.orderSearch.value);
        };
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
                {orderId: 1, customerFirstname: "Nicolas", customerLastname: "Gandriau",
                    books: [
                        {isbn: "1", title: "book1", price: "23"},
                        {isbn: "2", title: "book2", price: "23"}
                    ],
                    amount: "123.45",
                    needConfirmation: false},
                {orderId: 2, customerFirstname: "Nicolas", customerLastname: "Gandriau",
                    books: [
                        {isbn: "1", title: "book1", price: "23"},
                        {isbn: "3", title: "book3", price: "23"},
                        {isbn: "2", title: "book2", price: "23"}
                    ],
                    amount: "456.33",
                    needConfirmation: true},
                {orderId: 3, customerFirstname: "Nicolas", customerLastname: "Gandriau",
                    books: [
                        {isbn: "1", title: "book1", price: "23"},
                        {isbn: "2", title: "book2", price: "23"}
                    ],
                    amount: "789.12",
                    needConfirmation: true}
            ]};

        // SELECTED ORDER

        $scope.selectedOrder = {
            editedOrder: null,
            originalOrder: null //permit to make comparison
        };

        $scope.selectOrder = function (anOrder) {

            if ($scope.selectedOrder.originalOrder == anOrder) {
                console.log("select the already selected order. Do nothing.");
                return;
            }

            if ($scope.isSelectedOrderModified()) {
                console.log("select an order in table, but current order is modified! - reject");
                $scope.alerts.push({type: 'danger', msg: 'You cannot select an order if you have started to edit another one. Revert the change or save them.'});
                return;
            } else {
                $scope.selectedOrder.originalOrder = anOrder;
                $scope.revertEditedOrder();
            }

        };

        $scope.revertEditedOrder = function () {
            $scope.selectedOrder.editedOrder = JSON.parse(JSON.stringify($scope.selectedOrder.originalOrder));
            $scope.selectedOrder.modified = false;
        };

        $scope.saveEditedOrder = function () {
            console.log("save order");

            $scope.selectedOrder.originalOrder.amount = $scope.selectedOrder.editedOrder.amount;
            $scope.selectedOrder.originalOrder.books = JSON.parse(JSON.stringify($scope.selectedOrder.editedOrder.books));
            $scope.selectedOrder.modified = false;
        };

        $scope.confirmEditedOrder = function () {
            console.log("confirm order");
        };

        $scope.isSelectedOrderModified = function () {
            if ($scope.selectedOrder.editedOrder == null || $scope.selectedOrder.originalOrder == null)
                return false;

            return ($scope.selectedOrder.editedOrder.amount != $scope.selectedOrder.originalOrder.amount)
                || ($scope.selectedOrder.editedOrder.books.length != $scope.selectedOrder.originalOrder.books.length)

        };

        $scope.removeBookFromEditedOrder = function (bookToRemove) {
            var books = $scope.selectedOrder.editedOrder.books
            books = _.filter(books, function (book) {
                return book != bookToRemove;
            });

            $scope.selectedOrder.editedOrder.books = books;
        };

        $scope.newBookIsbn = "";
        $scope.newBookTitle = "";


        $scope.addBook = function () {
            if ($scope.canAddBookToOrder()) {
                $scope.selectedOrder.editedOrder.books.push({isbn: $scope.newBookIsbn, title: $scope.newBookTitle, price: "???"});
                $scope.newBookIsbn = '';
                $scope.newBookTitle = '';
            }else{
                $scope.alerts.push({type:'danger', msg: 'provide title and isbn of book to add!'});
            }
        };

        $scope.canAddBookToOrder = function(){
            return !_.isEmpty($scope.newBookIsbn) && !_.isEmpty($scope.newBookTitle)
        };


        $scope.alerts = [
//            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
//            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function () {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }
);