/**
 * Created by ngandriau on 5/13/14.
 */
describe("Order Controller Test Suit", function () {

    beforeEach(module("BookApp"));

    var OrderCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        OrderCtrl = $controller("OrderCtrl", {
            $scope: scope
        });
    }));


    describe("OrderCtrl", function () {

        it("should have default search mode == 'id'", function () {
            expect(scope.orderSearch.mode).toBe("id")
        })

        it("should identified selected order has been modified", function(){
            //given
            scope.selectedOrder.editedOrder = {id: 1, customerFirstname: "Nicolas", customerLastname: "Gandriau",
                books: [
                    {isbn: "1", title: "book1", price: "23"},
                    {isbn: "2", title: "book2", price: "23"}
                ],
                amount: "46"};

            scope.selectedOrder.originalOrder = {id: 1, customerFirstname: "Nicolas", customerLastname: "Gandriau",
                books: [
                    {isbn: "1", title: "book1", price: "23"},
                    {isbn: "2", title: "book2", price: "23"}
                ],
                amount: "50"};

            //then
            expect(scope.isSelectedOrderModified()).toBeTruthy()

        })
    });

})