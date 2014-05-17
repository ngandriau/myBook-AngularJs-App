/**
 * Created by ngandriau on 5/13/14.
 */
describe("hello from welcome app controller", function(){

    var welcomeCtrl;
    beforeEach(module("BookApp"));
    beforeEach(inject (function ($controller) {
        welcomeCtrl = $controller("welcomeAppCtrl")
    }));

    describe("AppCtrl", function () {
        it("should have a 'hello' message ", function(){
            expect(welcomeCtrl.message).toBe("hello")
        })
    });

})